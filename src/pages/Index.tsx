import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProductsSection } from "@/components/landing/ProductsSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { ClientsSection } from "@/components/landing/ClientsSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ProductsSection />
      <SolutionSection />
      <ClientsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
