import MainSection from "@/components/Section/intro/MainSection";
import ProjectSection from "@/components/Section/project/ProjectSection.jsx";
import Timeline from "@/components/Section/timeline/Timeline";
import Chat from "@/components/Section/chatbot/Chat";
import Footer from "@/components/ui/Footer";
import ContactForm from "@/components/Section/Contact/ContactForm";
import Navigation from "@/components/ui/Navbar";
import ParticlesComponent from "@/components/animations/particles";
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <ParticlesComponent id="particles" />
      <div className="space-y-16 sm:space-y-28">
        <Navigation />
        <section id="Home">
          <MainSection />
        </section>
        <section id="Projects">
          <ProjectSection />
        </section>
        <section id="Experience">
          <Timeline />
        </section>
        <section id="About">
          <Chat />
        </section>
        <section id="Contact">
          <ContactForm />
        </section>
      </div>
      <Footer />
    </main>
  );
}
