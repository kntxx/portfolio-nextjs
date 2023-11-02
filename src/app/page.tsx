
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import NavMobile from "./components/NavMobile";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <Nav />
      <NavMobile />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
