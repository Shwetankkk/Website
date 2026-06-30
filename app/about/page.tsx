import { ProfileCard } from "@/components/about/profile-card";
import { EducationTimeline } from "@/components/about/timelines/education-timeline";
import { ExperienceTimeline } from "@/components/about/timelines/experience-timeline";
import { CertificationsTimeline } from "@/components/about/timelines/certifications-timeline";
import { Skills } from "@/components/about/skills";
import { PageHeader } from "@/components/page-header";
import { DATA } from "@/data";

export default function AboutPage() {
  const { education, certifications, experience, profile } = DATA.about;
  const tech = DATA.about.technologies;

  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-foreground">
      <PageHeader texts={DATA.morphingTexts.about} />
      <ProfileCard
        description={profile.description}
        image={profile.image}
        name={profile.name}
        title={profile.title}
      />

      <EducationTimeline education={education} />
      <CertificationsTimeline certifications={certifications} />
      <ExperienceTimeline experience={experience} />
      <Skills tech={tech} />
    </section>
  );
}
