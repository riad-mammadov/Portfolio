import MainSection from "@/components/Section/intro/MainSection";
import ProjectSection from "@/components/Section/project/ProjectSection.jsx";
import Timeline from "@/components/Section/timeline/Timeline";
import Chatbox from "@/components/Section/chatbot/Chat";
import Footer from "@/components/ui/Footer";
export default function Home() {
  return (
    <main>
      <section id="Home">
        <MainSection />
      </section>
      <div className="sm:space-y-44">
        <section id="Portfolio">
          <ProjectSection />
        </section>
        <section id="Experience">
          <Timeline />
        </section>
        <section className="About">
          <Chatbox />
        </section>
      </div>
      <Footer />
    </main>
  );
}
