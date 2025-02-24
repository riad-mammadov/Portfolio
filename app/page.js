import MainSection from "@/components/Section/intro/MainSection";
import ProjectSection from "@/components/Section/project/ProjectSection.jsx";
import Timeline from "@/components/Section/timeline/Timeline";
import Chat from "@/components/Section/chatbot/Chat";
import Footer from "@/components/ui/Footer";
import ContactForm from "@/components/Section/Contact/ContactForm";
import Navigation from "@/components/ui/Navbar";
export default function Home() {
  return (
    <main>
      <Navigation />

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
          <Chat />
        </section>
        <section className="pt-12" id="Contact">
          <ContactForm />
        </section>
      </div>
      <Footer />
    </main>
  );
}
