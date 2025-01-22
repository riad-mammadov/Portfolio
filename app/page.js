import MainSection from "@/components/Section/MainSection";
import SecondSection from "@/components/Section/MySkillsSection";
import ProjectSection from "@/components/Section/ProjectSection.jsx";
import SkillSection from "@/components/templates/SkillSection";
import Timeline from "@/components/Section/Timeline";

export default function Home() {
  return (
    <main>
      <MainSection />
      <section id="project-display" className="sm:-mt-24 ">
        <ProjectSection />
      </section>
      <section id="timeline-section" className="mt-48 h-fit ">
        <Timeline />
      </section>
      <section></section>
    </main>
  );
}
