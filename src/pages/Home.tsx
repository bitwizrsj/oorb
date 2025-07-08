import CompanyTrustSection from "../components/hero/CompanyTrustSection";
import HeroSection from "../components/hero/HeroSection";
import ProductsGlimpse from "../components/hero/ProductsGlimpse";
import StatsSection from "../components/hero/StatsSection";
import TopWebsitesSection from "../components/hero/TopWebsitesSection";
import TestimonialsSection from '../components/hero/TestimonialsSection';
import ContactSection from '../components/hero/ContactSection';
import JoinSection from '../components/hero/JoinSection';
import ServicesSection from "../components/hero/ServicesSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CompanyTrustSection />
      <ServicesSection />
      <StatsSection />
      {/* <ProductsGlimpse /> */}
      <TestimonialsSection />
      <TopWebsitesSection />
      <ContactSection />
      <JoinSection />
    </div>
  );
};

export default Home;