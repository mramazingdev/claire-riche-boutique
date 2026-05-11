import React from "react";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Signature Candle", price: "$20.00 AUD", img: "/src/assets/candle.jpg" },
  { id: 2, name: "Hand-Blown Vase", price: "$30.00 AUD", img: "/src/assets/vase.jpg" },
  { id: 3, name: "Handcrafted Tray", price: "$20.00 AUD", oldPrice: "$25.00 AUD", sale: true, img: "/src/assets/tray.jpg" },
  { id: 4, name: "Organic Bath Set", price: "$30.00 AUD", img: "/src/assets/bath.jpg" },
];

const cream = "#f5f0e8";
const dark = "#0d0b09"; // Matching your Hero Dark

const NewCollection = () => {
  return (
    <section
      style={{
        background: dark, // Flipped to dark to match the Hero's right panel
        padding: "120px clamp(24px, 8vw, 80px)",
        fontFamily: "'Tenor Sans', sans-serif",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center mb-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[0.5px] w-12 bg-[#c9a96e]" />
          <span className="text-[10px] tracking-[5px] text-[#c9a96e] uppercase">Curated Objects</span>
          <div className="h-[0.5px] w-12 bg-[#c9a96e]" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 300,
            color: cream,
            letterSpacing: "1px"
          }}
        >
          New <em className="italic text-[#c9a96e]">Collection</em>
        </motion.h2>
      </div>

      {/* ASYMMETRIC PRODUCT GALLERY */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20 max-w-[1400px] mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`group relative ${index % 2 !== 0 ? 'lg:mt-16' : ''}`} // Creates the luxury waterfall offset
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1816]">
              <motion.img
                src={product.img}
                alt={product.name}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Minimalist Sale Label */}
              {product.sale && (
                <span className="absolute top-0 right-0 bg-[#c9a96e] text-[#0d0b09] text-[8px] tracking-[2px] px-4 py-2 uppercase font-bold">
                  Sale
                </span>
              )}

              {/* Hover Overlay: Shop Button */}
              <div className="absolute inset-0 bg-[#0d0b09]/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-10">
                <button className="bg-white text-[#0d0b09] px-8 py-3 text-[9px] tracking-[3px] uppercase hover:bg-[#c9a96e] transition-colors duration-300">
                  Add to Bag
                </button>
              </div>
            </div>

            {/* Product Meta */}
            <div className="mt-8 text-center lg:text-left">
              <h3 className="text-[11px] tracking-[3px] text-white/90 uppercase mb-2 font-light">
                {product.name}
              </h3>
              <div className="flex justify-center lg:justify-start items-center gap-3">
                {product.oldPrice && (
                  <span className="text-[10px] text-white/30 line-through">
                    {product.oldPrice}
                  </span>
                )}
                <span className="text-[10px] tracking-[2px] text-[#c9a96e]">
                  {product.price}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 flex flex-col items-center gap-8"
      >
        <div className="h-[40px] w-[1px] bg-[#c9a96e]/40" />
        <button
          className="group relative text-[10px] tracking-[5px] text-white uppercase overflow-hidden pb-2"
        >
          View All Essentials
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c9a96e] origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500" />
        </button>
      </motion.div>

      {/* Subtle Background Text (Like the 'CR' in your hero) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-serif text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
        Aesthetic
      </div>
    </section>
  );
};

export default NewCollection;