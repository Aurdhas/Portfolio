// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <div className="bg-orange-100">
        <Navbar />
        <Hero />
        {/* <Clients /> */}
        <Skills />
        <Projects />
        <Resume />
        {/* <Testimonial /> */}
        {/* <PopularClients /> */}
        <ContactForm />
        <Footer />
      </div>

    </>
  );
}
