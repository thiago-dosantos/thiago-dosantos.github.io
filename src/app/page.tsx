import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Languages } from "@/components/Languages";
import { Portfolio } from "@/components/Portfolio";
import LastPostsBlog  from "@/components/LastPostsBlog";

const Page = async () => {
  return (
    <div className="container mx-auto px-5 mb-10">
      <Header />
      <Hero />
      <Languages />
      <Portfolio />
      <LastPostsBlog searchParams={{}} />
      <Footer />
    </div>
  );
};

export default Page;