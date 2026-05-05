import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";

const gold = "#c9a96e";
const dark = "#0d0b09";
const cream = "#f5f0e8";

const Footer = () => {
  return (
    <footer style={{ background: dark, color: cream, borderTop: `1px solid ${gold}33` }}>
      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto pt-24 pb-16 px-6 md:px-16">
        <div className="flex flex-col items-center">
          
          {/* BRAND LOGO - Elegant Serif */}
          <h2 
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: "clamp(30px, 4vw, 42px)", 
              letterSpacing: "8px",
              fontWeight: 300,
              color: "white"
            }}
          >
            CLAIRE <span style={{ color: gold }}>RICHE</span>
          </h2>
          
          <div className="h-[1px] w-12 bg-[#c9a96e] my-8" />

          {/* SECONDARY LINKS - Minimalist Grid */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12 text-[10px] tracking-[3px] uppercase text-white/50">
            <a href="#" className="hover:text-[#c9a96e] transition-colors duration-300">Shop</a>
            <a href="#" className="hover:text-[#c9a96e] transition-colors duration-300">Journal</a>
            <a href="#" className="hover:text-[#c9a96e] transition-colors duration-300">Bespoke</a>
            <a href="#" className="hover:text-[#c9a96e] transition-colors duration-300">Our Story</a>
            <a href="#" className="hover:text-[#c9a96e] transition-colors duration-300">Sustainability</a>
          </div>

          {/* CONTACT & SOCIALS */}
          <div className="grid grid-cols-1 md:grid-cols-3 w-full border-y border-white/10 py-12 gap-8 items-center">
            
            {/* Left: Hours */}
            <div className="text-center md:text-left">
              <p className="text-[9px] tracking-[2px] uppercase text-[#c9a96e] mb-2">Concierge Hours</p>
              <p className="text-[11px] text-white/40 font-light">Mon — Sat: 08:00 — 19:00</p>
              <p className="text-[11px] text-white/40 font-light">Sunday: By Appointment</p>
            </div>

            {/* Center: Social Icons */}
            <div className="flex justify-center space-x-8">
              {[FaFacebookF, FaInstagram, FaPinterestP, FaYoutube].map((Icon, idx) => (
                <a key={idx} href="#" className="text-white/40 hover:text-[#c9a96e] transition-all transform hover:-translate-y-1">
                  <Icon size={14} />
                </a>
              ))}
            </div>

            {/* Right: Region */}
            <div className="text-center md:text-right">
              <p className="text-[9px] tracking-[2px] uppercase text-[#c9a96e] mb-2">Region</p>
              <p className="text-[11px] text-white/40 font-light underline decoration-[#c9a96e]/30 underline-offset-4">Australia — AUD $</p>
            </div>
          </div>
        </div>
      </div>

      {/* SUB-FOOTER: LEGAL & PAYMENTS */}
      <div style={{ background: "#090807" }} className="py-8 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <p className="text-[9px] tracking-[1px] text-white/20 uppercase">
            © 2026 <span className="text-white/40 font-medium">Claire Riche Boutique</span>. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-white/20">
               <FaCcVisa size={18} className="hover:text-white transition-colors" />
               <FaCcMastercard size={18} className="hover:text-white transition-colors" />
               <FaCcPaypal size={18} className="hover:text-white transition-colors" />
               <FaCcAmex size={18} className="hover:text-white transition-colors" />
            </div>
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
            <div className="flex gap-4 text-[9px] tracking-[1px] text-white/20 uppercase">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;