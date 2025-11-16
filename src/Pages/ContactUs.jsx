import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function ContactUs() {
  return (
    <div className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Details */}
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow">
            <div className="bg-blue-500 text-white p-3 rounded-full"><FiPhone size={22} /></div>
            <div>
              <h2 className="text-xl font-semibold">Phone</h2>
              <p className="text-gray-600">+233 30 251 7871</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow">
            <div className="bg-blue-500 text-white p-3 rounded-full"><FiMail size={22} /></div>
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p className="text-gray-600">info@example.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow">
            <div className="bg-blue-500 text-white p-3 rounded-full"><FiMapPin size={22} /></div>
            <div>
              <h2 className="text-xl font-semibold">Address</h2>
              <p className="text-gray-600">Adjringanor Ability Dzenayor Junction</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow">
          <a
            href="https://www.google.com/maps/place/East+Legon,+Accra,+Ghana/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              title="East Legon Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1966010555485!2d-0.164!3d5.650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b0137083f53%3A0x6c2e58f38eae5b43!2sEast%20Legon!5e0!3m2!1sen!2sgh!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </a>
        </div>
      </div>
    </div>
  );
}
