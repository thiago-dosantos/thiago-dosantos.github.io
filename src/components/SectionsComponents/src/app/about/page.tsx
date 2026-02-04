"use cliente";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Languages } from "@/components/Languages";
import { AboutMe } from "@/components/SectionsComponents/AboutMe";
import { Services } from "@/components/SectionsComponents/Services";

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <AboutMe />
      <Languages />
      <Services />
      <Footer />
    </div>
  );
};

export default Page;