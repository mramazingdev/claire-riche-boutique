import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import welcomeImg from "../assets/welcome.jpg"; // Reference image_e6445b.jpg style

const gold = "#c9a96e";
const dark = "#0d0b09";
const cream = "#f5f0e8";

const WelcomeSection = () => {
  return (
    <section 
      style={{ 
        background: dark, 
        padding: "160px clamp(24px, 10vw, 100px)", 
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT SIDE: VISUAL STORYTELLING (7 Columns) */}
        <div className="relative lg:col-span-7">
          {/* Decorative Gold Frame behind image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            style={{
              position: "absolute",
              top: "-20px",
              left: "-20px",
              right: "40px",
              bottom: "40px",
              border: `1px solid ${gold}44`,
              zIndex: 0
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 overflow-hidden"
          >
            <motion.img
              src={welcomeImg}
              alt="The Claire Riche Aesthetic"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 2 }}
              className="w-full h-[500px] md:h-[700px] object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
            />
            
            {/* Floating Detail Tag */}
            <div className="absolute bottom-0 right-0 bg-white/10 backdrop-blur-md p-6 border-l border-t border-white/20">
              <p className="text-[#c9a96e] text-[8px] tracking-[4px] uppercase mb-1">Est.</p>
              <p className="text-white text-[12px] tracking-[2px]">MMXXIV</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: THE NARRATIVE (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#c9a96e] text-[10px] tracking-[5px] uppercase mb-6 block">
              Our Philosophy
            </span>
            
            <h2 
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(40px, 5vw, 72px)",
                fontWeight: 300,
                color: cream,
                lineHeight: 1,
                marginBottom: "32px"
              }}
            >
              The Essence <br /> 
              <em className="italic text-[#c9a96e]">of Riche</em>
            </h2>

            <div className="h-[1px] w-20 bg-[#c9a96e] mb-8" />

            <p className="text-white/60 text-[14px] leading-[1.8] font-light mb-10 max-w-md">
              Claire Riche is more than a boutique—it is a study in 
              the art of living well. Every piece in our collection 
              is curated for the ethereal silhouette, blending timeless 
              craftsmanship with modern luxury. We believe in the beauty 
              of the understated.
            </p>

            <motion.button
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex items-center gap-4 text-white text-[10px] tracking-[4px] uppercase group"
            >
              <span className="pb-1 border-b border-[#c9a96e] group-hover:text-[#c9a96e] transition-colors">
                Discover our story
              </span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke={gold} strokeWidth="1" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Background Vertical Text (Luxury Detail) */}
      <div 
        style={{
          position: "absolute",
          top: "10%",
          left: "2%",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          color: "white",
          opacity: 0.03,
          fontSize: "10vh",
          fontFamily: "'Cormorant Garamond', serif",
          pointerEvents: "none"
        }}
      >
        ELEVATION
      </div>
    </section>
  );
};

export default WelcomeSection;