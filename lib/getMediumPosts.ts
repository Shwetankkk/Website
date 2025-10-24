// lib/getMediumPosts.ts
import Parser from "rss-parser";

export type MediumPost = {
  title: string;
  link: string;
  pubDate?: string;
  thumbnail?: string;
  categories?: string[];
};

function pickFirstSrcsetUrl(srcset: string): string | undefined {
  const first = srcset.split(",")[0]?.trim().split(" ")[0];
  return first || undefined;
}

// Extract first image URL from HTML/text
function extractFirstImage(html?: string): string | undefined {
  if (!html) return;

  // <img src="...">
  const imgSrc = html.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
  if (imgSrc) return imgSrc;

  // <source srcset="...">
  const srcset = html.match(/<source[^>]+srcset=["']([^"']+)["']/i)?.[1];
  const fromSrcset = srcset ? pickFirstSrcsetUrl(srcset) : undefined;
  if (fromSrcset) return fromSrcset;

  // Bare image URLs (incl. miro.medium.com)
  const bare = html.match(
    /https?:\/\/[^\s"'<>]+\.(?:png|jpe?g|gif|webp)(?:\?[^"' <>]*)?/i
  )?.[0];
  if (bare) return bare;

  return undefined;
}

// Try to fetch Open Graph / Twitter image from the article page (server-side only)
async function fetchOgImage(
  url: string,
  timeoutMs = 4000
): Promise<string | undefined> {
  try {
    const controller = new AbortController();
    const to = setTimeout(() => controller.abort(), timeoutMs);

    const res = await fetch(url, {
      // Pretend to be a browser; Medium sometimes varies content by UA
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
      signal: controller.signal,
      // Next.js can cache this if you want, but default is fine
    });

    clearTimeout(to);
    if (!res.ok) return undefined;

    const html = await res.text();

    // <meta property="og:image" content="...">
    const og =
      html.match(
        /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i
      )?.[1] ||
      html.match(
        /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i
      )?.[1];

    return og;
  } catch {
    return undefined;
  }
}

const parser = new Parser({
  customFields: {
    item: [
      ["content:encoded", "contentEncoded"],
      ["media:content", "mediaContent"],
      ["media:thumbnail", "mediaThumb"],
    ],
  },
});

export async function getMediumPosts(
  username: string,
  limit = 6
): Promise<MediumPost[]> {
  const feedUrl = `https://medium.com/feed/@${username}`;
  const feed = await parser.parseURL(feedUrl);

  // Map feed items → first pass thumbnails
  const firstPass = (feed.items || []).slice(0, limit).map((item: any) => {
    const thumb: string | undefined =
      item.enclosure?.url ||
      item.mediaContent?.url ||
      item.mediaThumb?.url ||
      extractFirstImage(item.contentEncoded) ||
      extractFirstImage(item["content:encoded"]) ||
      extractFirstImage(item.content) ||
      extractFirstImage(item.contentSnippet);

    const link: string = item.link || item.guid || "#";

    return {
      title: item.title || "Untitled",
      link,
      pubDate: item.pubDate,
      thumbnail: thumb,
      categories: item.categories,
    } as MediumPost;
  });

  // Second pass: fill in missing thumbnails using OG tags
  const withOg = await Promise.all(
    firstPass.map(async (p) => {
      if (p.thumbnail || !p.link || p.link === "#") return p;
      const og = await fetchOgImage(p.link);
      return { ...p, thumbnail: og ?? p.thumbnail };
    })
  );

  return withOg;
}
