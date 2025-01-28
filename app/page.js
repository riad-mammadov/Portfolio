import MainSection from "@/components/Section/intro/MainSection";
import ProjectSection from "@/components/Section/project/ProjectSection.jsx";
import Timeline from "@/components/Section/Timeline";
import Chatbox from "@/components/Section/chatbot/Chat";
export default function Home() {
  return (
    <main>
      <MainSection />
      <div className="space-y-44">
        <section id="project-display">
          <ProjectSection />
        </section>
        <section id="timeline-section">
          <Timeline />
        </section>
        <section>
          <Chatbox />
        </section>
      </div>
    </main>
  );
}
