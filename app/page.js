import MainSection from "@/components/Section/intro/MainSection";
import ProjectSection from "@/components/Section/project/ProjectSection.jsx";
import Timeline from "@/components/Section/timeline/Timeline";
import Chatbox from "@/components/Section/chatbot/Chat";
import Footer from "@/components/ui/Footer";
import ContactForm from "@/components/Section/Contact/ContactForm";
export default function Home() {
  return (
    <main>
      <section id="Home">
        <MainSection />
      </section>
      <div className="sm:space-y-20 mb-12">
        <section id="Projects">
          <ProjectSection />
        </section>
        <section id="Experience">
          <Timeline />
        </section>
        <section id="About">
          <Chatbox />
        </section>
        <section className="pt-12" id="Contact">
          <ContactForm />
        </section>
      </div>
      <Footer />
    </main>
  );
}
