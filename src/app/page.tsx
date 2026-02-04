import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Languages } from "@/components/Languages";
import { Portfolio } from "@/components/Portfolio";
import { AboutMe } from "@/components/SectionsComponents/AboutMe";
import { Workflow } from "@/components/Workflow";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact"; // Adicione esta importação
import { ScrollToTop } from "@/components/ScrollToTop";

const Page = async () => {
  return (
    <div className="container mx-auto px-5 mb-10">
      <Header />
      <Hero />
      <AboutMe />
      <Languages />
      <Workflow />
      <Portfolio />
      <FAQ />
      <Contact /> {/* Adicione esta linha */}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Page;