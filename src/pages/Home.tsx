import CompanyTrustSection from "../components/hero/CompanyTrustSection";
import HeroSection from "../components/hero/HeroSection";
import ProductsGlimpse from "../components/hero/ProductsGlimpse";
import StatsSection from "../components/hero/StatsSection";
import TopWebsitesSection from "../components/hero/TopWebsitesSection";
import ServicesSection from '../components/hero/ServicesSection';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CompanyTrustSection />
    <ServicesSection />
      <StatsSection />
      <ProductsGlimpse />
      <TopWebsitesSection />

      <div className='min-h-screen'></div>
      <main>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Routes> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;

