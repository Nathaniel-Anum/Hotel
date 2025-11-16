import React from "react";
import { motion } from "framer-motion";
import accomodation from "../pic/Accomo.jpg";
import laundry from "../pic/laundry.jpg";
import restaurant from "../pic/bar.jpg";
import events from "../pic/event.jpg";
import weddings from "../pic/Wedding.jpg";
import engagement from "../pic/Engagement.jpg";
import birthday from "../pic/Birthday.jpg";

const services = [
  {
    title: "Accommodation",
    img: accomodation,
    desc: "Comfortable rooms designed for relaxation and convenience during your stay.",
  },
  {
    title: "Laundry Services",
    img: laundry,
    desc: "Professional laundry services to keep your clothes fresh and clean.",
  },
  {
    title: "Restaurant and Bar",
    img: restaurant,
    desc: "Enjoy delicious meals and refreshing drinks in a cozy atmosphere.",
  },
  {
    title: "Events",
    img: events,
    desc: "We host a variety of events tailored to your preferences and needs.",
  },
  {
    title: "Weddings",
    img: weddings,
    desc: "Make your special day unforgettable with our elegant wedding setups.",
  },
  {
    title: "Engagements",
    img: engagement,
    desc: "Celebrate love with beautifully arranged engagement ceremonies.",
  },
  {
    title: "Birthday Parties",
    img: birthday,
    desc: "Fun and memorable birthday party setups for all ages.",
  },
];

export default function OurServices() {
  return (
    <div className="w-full py-12 px-4 md:px-12 lg:px-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        Our Services
      </motion.h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition p-4"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-68 object-cover rounded-xl"
            />
            <h2 className="text-xl font-semibold mt-4">{service.title}</h2>
            <p className="text-gray-600 mt-2 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
