import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-bg">
      <Navbar />
      <main className="relative">
        <Hero />
        <section id="about" className="container mx-auto px-6 py-24">
          <About />
        </section>
        <section id="skills" className="container mx-auto px-6 py-24">
          <Skills />
        </section>
        <section id="projects" className="container mx-auto px-6 py-24">
          <Projects />
        </section>
        <section id="experience" className="container mx-auto px-6 py-24">
          <Experience />
        </section>
        <section id="contact" className="container mx-auto px-6 py-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
