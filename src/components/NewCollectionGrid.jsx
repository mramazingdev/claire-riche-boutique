import React from "react";
import { motion } from "framer-motion";

// Replace these imports with your real product images
import candle from "../assets/candle.jpg";
import vase from "../assets/vase.jpg";
import tray from "../assets/tray.jpg";
import bath from "../assets/bath.jpg";

const products = [
  {
    id: 1,
    name: "Candle",
    price: "$20.00 AUD",
    image: candle,
    sale: false,
  },
  {
    id: 2,
    name: "Glass Vase",
    price: "$30.00 AUD",
    image: vase,
    sale: false,
  },
  {
    id: 3,
    name: "Wooden Tray",
    price: "$20.00 AUD",
    oldPrice: "$25.00 AUD",
    image: tray,
    sale: true,
  },
  {
    id: 4,
    name: "Bath Set",
    price: "$30.00 AUD",
    image: bath,
    sale: false,
  },
];

const NewCollectionGrid = () => {
  return (
    <section className="bg-[#faf8f6] py-20 px-6 md:px-16 text-center">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl tracking-[4px] mb-8"
      >
        NEW COLLECTION
      </motion.h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              {item.sale && (
                <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-sm">
                  Sale
                </span>
              )}
            </div>

            <div className="py-4">
              <h3 className="text-gray-800 text-sm font-medium mb-1">
                {item.name}
              </h3>
              <div className="text-gray-600 text-sm">
                {item.oldPrice && (
                  <span className="line-through mr-2 text-gray-400">
                    {item.oldPrice}
                  </span>
                )}
                <span className="font-semibold">{item.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="mt-10 border border-black text-black px-6 py-2 text-sm hover:bg-black hover:text-white transition-all"
      >
        VIEW ALL
      </motion.button>
    </section>
  );
};

export default NewCollectionGrid;
