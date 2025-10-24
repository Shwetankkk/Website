// app/articles/page.tsx
import { getMediumPosts } from "@/lib/getMediumPosts";

// Revalidate every hour (ISR)
export const revalidate = 3600;

export default async function ArticlesPage() {
  const posts = await getMediumPosts("shwedank", 6);

  return (
    // Keep your content ABOVE any decorative canvas/overlay:
    //  - add relative + z-10 here
    //  - make sure your background layer has pointer-events-none and a lower z-index
    <main className="container relative z-10 mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Blogs</h1>
      <p className="text-muted-foreground mb-10">
        Latest thoughts and tutorials from my Medium.
      </p>

      {posts.length === 0 ? (
        <div className="rounded-xl border bg-background/60 p-6">
          <p className="text-sm text-muted-foreground">
            No posts found yet. Check back soon or{" "}
            <a
              className="underline"
              href="https://medium.com/@shwedank"
              target="_blank"
              rel="noopener noreferrer"
            >
              visit my Medium profile
            </a>
            .
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <div key={p.link} className="h-full">
              {/* Use a plain <a> for external links and make it a block that fills the card */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-2xl border bg-background/60 p-5 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {/* Thumbnail if present; otherwise show a subtle placeholder */}
                {p.thumbnail ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.thumbnail}
                    alt=""
                    className="mb-4 h-40 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="mb-4 h-40 w-full rounded-lg bg-gradient-to-br from-primary/20 to-secondary/10 ring-1 ring-foreground/10" />
                )}

                <h2 className="text-lg font-semibold leading-snug mb-2 line-clamp-2 group-hover:underline">
                  {p.title}
                </h2>

                {p.pubDate && (
                  <div className="text-xs text-muted-foreground mb-4">
                    {new Date(p.pubDate).toLocaleDateString()}
                  </div>
                )}

                <span className="inline-flex items-center text-sm underline group-hover:translate-x-1 transition-transform">
                  Read on Medium →
                </span>
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
