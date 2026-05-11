import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NewCollection from "./components/NewCollection";
import JoinTheClub from "./components/JoinTheClub"; // Updated name
import WelcomeSection from "./components/WelcomeSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    // Changed bg to dark to match our new luxury sections
    <div className="bg-[#0d0b09] text-gray-800"> 
      <Navbar />
      <HeroSection />
      <NewCollection />
      <JoinTheClub /> {/* Updated tag */}
      <WelcomeSection />
      <Footer />
    </div>
  );
};

export default App;