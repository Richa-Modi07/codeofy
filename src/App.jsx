import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Working from "./pages/Working";
import Footer from "./components/Footer";
import Community from "./pages/Community";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection />
      <section id="features" className="w-full">
        <Features />
      </section>
      <section id="working" className="w-full">
        <Working />
      </section>
      <section id="pricing" className=" w-full">
        {/* <Pricing /> */}
      </section>
      <section id="community" className="w-full">
        {/* <Community /> */}
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default App;
