import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutMe />
      <Projects />
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20 bg-secondary/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}
