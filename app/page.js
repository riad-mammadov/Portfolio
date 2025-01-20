import MainSection from "@/components/Section/MainSection";
import ProjectSection from "@/components/Section/ProjectSection.jsx";

export default function Home() {
  return (
    <main>
      <MainSection />
      <div className="h-[1000px]">
        <ProjectSection />
      </div>
    </main>
  );
}
