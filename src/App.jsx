import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NewCollection from "./components/NewCollection";
import JoinClub from "./components/JoinClub";
import WelcomeSection from "./components/WelcomeSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#f9f6f1] text-gray-800">
      <Navbar />
      <HeroSection />
      <NewCollection />
      <JoinClub />
      <WelcomeSection />
      <Footer />
    </div>
  );
};

export default App;
