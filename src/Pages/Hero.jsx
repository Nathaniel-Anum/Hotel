import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "antd";

// 🖼️ Import your images (adjust the paths as needed)
import pic1 from "../pic/1.jpg";
import pic2 from "../pic/2.jpg";
import pic3 from "../pic/3.jpg";

const slides = [
  {
    id: 1,
    image: pic1,
    title: "Experience Luxury & Comfort",
    subtitle: "Book your stay with us and enjoy world-class service.",
  },
  {
    id: 2,
    image: pic2,
    title: "Relax & Rejuvenate",
    subtitle: "Unwind with our spa and wellness packages.",
  },
  {
    id: 3,
    image: pic3,
    title: "Dine in Elegance",
    subtitle: "Savor gourmet dishes from our award-winning chefs.",
  },
];

export default function Hero({ autoPlay = true, interval = 6000 }) {
  const [current, setCurrent] = useState(0);

  // 🖼️ Preload all images to avoid flashing while switching
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // 🔁 Auto-play logic
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[current].image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "#111827", // fallback (dark)
            zIndex: 0,
          }}
        />
      </AnimatePresence>

      {/* Persistent dark overlay (prevents flashes) */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-20">
        <AnimatePresence mode="sync">
          <motion.h1
            key={slides[current].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {slides[current].title}
          </motion.h1>

          <motion.p
            key={slides[current].subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg md:text-2xl max-w-2xl mb-8"
          >
            {slides[current].subtitle}
          </motion.p>
        </AnimatePresence>

        <Button
          type="primary"
          size="large"
          className="bg-green-500 border-none hover:bg-green-600"
          onClick={() =>
            window.open(
              "https://wa.me/233550530653?text=Hi! I’d like to book a room.",
              "_blank"
            )
          }
        >
          Book Now 
        </Button>

        {/* Slide navigation dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-white scale-110" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
