import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Ticker } from "@/components/site/Ticker";
import { Thesis } from "@/components/site/Thesis";
import { Audit } from "@/components/site/Audit";
import { Training } from "@/components/site/Training";
import { Method } from "@/components/site/Method";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => (
  <div className="grain min-h-screen bg-void">
    <Nav />
    <main>
      <Hero />
      <Ticker />
      <Thesis />
      <Audit />
      <Training />
      <Method />
      <Faq />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
