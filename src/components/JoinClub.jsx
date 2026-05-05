import React from "react";
import { motion } from "framer-motion";

const gold = "#c9a96e";
const cream = "#f5f0e8";
const dark = "#0d0b09";

const JoinTheClub = () => {
  return (
    <section 
      style={{ 
        background: dark, // Matching the dark luxury theme
        padding: "140px clamp(24px, 8vw, 60px)", 
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative Background Element */}
      <div 
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${gold}44, transparent)`,
          zIndex: 0
        }} 
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Small Label */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "10px" }}
          whileInView={{ opacity: 1, letterSpacing: "5px" }}
          transition={{ duration: 1 }}
          className="text-[#c9a96e] text-[10px] uppercase mb-8"
        >
          The Inner Circle
        </motion.div>

        {/* Serif Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 6vw, 64px)",
            fontWeight: 300,
            color: cream,
            lineHeight: 1.1,
            marginBottom: "24px"
          }}
        >
          Join the <em className="italic text-[#c9a96e]">Club</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-white/40 text-[11px] tracking-[2px] uppercase mb-12 max-w-md mx-auto leading-relaxed"
        >
          Receive early access to new collections, <br /> 
          private events, and bespoke offers.
        </motion.p>

        {/* Minimalist Input - No rounded corners, just a clean line */}
        <motion.form
          initial={{ opacity: 0, width: "50%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center max-w-lg mx-auto group"
        >
          <div className="relative flex-grow w-full border-b border-white/20 group-focus-within:border-[#c9a96e] transition-colors duration-500">
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="w-full px-0 py-4 text-[10px] tracking-[3px] text-white outline-none bg-transparent placeholder:text-white/20"
            />
          </div>
          
          <button
            type="submit"
            className="mt-6 md:mt-0 md:ml-8 px-10 py-4 bg-transparent border border-[#c9a96e] text-[#c9a96e] text-[9px] tracking-[4px] uppercase hover:bg-[#c9a96e] hover:text-black transition-all duration-500"
          >
            Subscribe
          </button>
        </motion.form>

        {/* Small Legal/Privacy Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          className="text-[8px] text-white uppercase tracking-[2px] mt-12"
        >
          By subscribing, you agree to our Privacy Policy
        </motion.p>
      </div>

      {/* Luxury Watermark */}
      <div 
        style={{
          position: "absolute",
          bottom: "-5%",
          right: "2%",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "15vw",
          color: "white",
          opacity: 0.02,
          pointerEvents: "none",
          userSelect: "none"
        }}
      >
        RICHE
      </div>
    </section>
  );
};

export default JoinTheClub;