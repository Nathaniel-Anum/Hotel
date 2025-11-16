import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // WhatsApp click handler
//   const handleWhatsAppClick = () => {
//     const phoneNumber = "233501234567"; // Replace with your number (no +)
//     const message = encodeURIComponent("Hi! I’d like to book a room.");
//     window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
//   };

  return (
    <nav className="flex items-center justify-between px-6 py-6 shadow-md bg-white fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 cursor-pointer">
        Moore
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#home" className="hover:text-blue-600 transition">Home</a>
        <a href="#rooms" className="hover:text-blue-600 transition">Rooms</a>
        <a href="#contact" className="hover:text-blue-600 transition">Contact Us</a>
        <a href="#about" className="hover:text-blue-600 transition">About Us</a>
        {/* <Button
          type="primary"
          className="bg-green-500 hover:bg-green-600"
          onClick={handleWhatsAppClick}
        >
          Book Now
        </Button> */}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <MenuOutlined
          className="text-2xl cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </div>

      {/* Mobile Drawer */}
      <Drawer
        placement="right"
        closable={true}
        onClose={() => setOpen(false)}
        open={open}
      >
        <div className="flex flex-col space-y-6 mt-4">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#rooms" onClick={() => setOpen(false)}>Rooms</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact Us</a>
          <a href="#about" onClick={() => setOpen(false)}>About Us</a>
          <Button
            type="primary"
            className="bg-green-500 hover:bg-green-600"
            onClick={() => {
              handleWhatsAppClick();
              setOpen(false);
            }}
          >
            Book Now
          </Button>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
