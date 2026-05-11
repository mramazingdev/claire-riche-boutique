import portrait from "../assets/hero-portrait.jpg";
import flatlay from "../assets/hero-flatlay.jpg";

const dark = "#0d0b09";

// Refined Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function LuxuryHero() {
  return (
    <section
      style={{
        background: dark,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Tenor Sans', sans-serif",
      }}
    >
      <div className="flex flex-col md:flex-row flex-1">
        
        {/* IMAGE PANEL: The Visual Anchor */}
        <div className="relative overflow-hidden w-full md:w-[55%] h-[60vh] md:h-auto">
          <motion.div 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={portrait}
              alt="Editorial"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.7) contrast(1.1)" }}
            />
          </motion.div>

          {/* Luxury Overlay: Vignette & Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0d0b09]/80 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b09] via-transparent md:hidden" />

          {/* The Floating Accessory Detail */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: [0, -15, 0] }}
            transition={{ 
              opacity: { delay: 1.5, duration: 1 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
            }}
            className="absolute bottom-20 right-10 md:-right-12 z-20 hidden sm:block"
          >
            <div className="p-1 bg-[#0d0b09] border border-[#c9a96e]/30">
               <img src={flatlay} alt="Detail" className="w-32 h-40 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
               <p className="text-[7px] tracking-[3px] text-[#c9a96e] mt-2 text-center uppercase">Detail N° 04</p>
            </div>
          </motion.div>
        </div>

        {/* TEXT PANEL: The Editorial Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col justify-center px-8 md:px-20 py-12 z-10"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-[#c9a96e]" />
            <span className="text-[10px] tracking-[5px] uppercase text-[#c9a96e]">Collection 2025</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-[clamp(4rem,10vw,7rem)] leading-[0.85] font-light text-[#f5f0e8] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The Art <br /> 
            <span className="italic text-[#c9a96e] pl-8 md:pl-16">of</span> Silk
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-[11px] tracking-[2px] leading-relaxed text-[#f5f0e8]/40 uppercase max-w-xs mb-10"
          >
            Curated garments designed for the ethereal silhouette. Timelessness redefined through craftsmanship.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-8 items-center">
            <button className="group relative px-10 py-4 overflow-hidden border border-[#c9a96e]/50 text-[#f5f0e8] text-[10px] tracking-[4px] uppercase transition-all duration-500 hover:text-[#0d0b09]">
              <span className="absolute inset-0 bg-[#c9a96e] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10">Shop Suite</span>
            </button>
            <button className="text-[#f5f0e8]/60 text-[10px] tracking-[4px] uppercase hover:text-[#c9a96e] transition-colors">
              Lookbook — 01
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM INFO STRIP: Glassmorphic Minimalist */}
      <div 
        className="w-full h-14 border-t border-white/5 backdrop-blur-md flex items-center justify-between px-8"
        style={{ background: "rgba(13, 11, 9, 0.4)" }}
      >
        <div className="flex gap-10 overflow-hidden whitespace-nowrap">
           {["Complimentary Atelier Shipping", "Bespoke Packaging", "Global SS25 Release"].map((text, idx) => (
             <span key={idx} className="text-[8px] tracking-[3px] text-white/30 uppercase flex items-center gap-2">
               <div className="w-1 h-1 bg-[#c9a96e] rounded-full" /> {text}
             </span>
           ))}
        </div>
        <div className="hidden md:block text-[8px] tracking-[3px] text-[#c9a96e]">
          ©2026 CLAIRE RICHE
        </div>
      </div>

      {/* Decorative Ghost Number */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-serif opacity-[0.02] pointer-events-none select-none text-white">
        CR
      </div>
    </section>
  );
}