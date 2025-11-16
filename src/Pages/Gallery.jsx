import React, { useState } from "react";
import accomodation from "../pic/Accomo.jpg";
import laundry from "../pic/laundry.jpg";
import restaurant from "../pic/bar.jpg";
import events from "../pic/event.jpg";
import weddings from "../pic/Wedding.jpg";
import engagement from "../pic/Engagement.jpg";
import birthday from "../pic/Birthday.jpg";

// CSS Masonry + Simple Click-to-Expand (No packages needed)

const images = [
  { src: accomodation, title: "Accommodation" },
  { src: laundry, title: "Laundry Services" },
  { src: restaurant, title: "Restaurant & Bar" },
  { src: events, title: "Events" },
  { src: weddings, title: "Weddings" },
  { src: engagement, title: "Engagements" },
  { src: birthday, title: "Birthday Parties" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full py-12 px-4 md:px-10 lg:px-16">
      <h1 className="text-4xl font-bold text-center mb-10">Gallery</h1>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, index) => (
          <div key={index} className="break-inside-avoid cursor-pointer" onClick={() => setSelected(img.src)}>
            <img
              src={img.src}
              alt={img.title}
              className="w-full rounded-xl hover:opacity-90 duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img src={selected} className="max-w-[90%] max-h-[90%] rounded-xl" />
        </div>
      )}
    </div>
  );
}
