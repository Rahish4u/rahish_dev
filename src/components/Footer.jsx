import React from "react";

function Footer() {
  return (
    <footer className="py-6 px-6 bg-gradient-to-br from-[#021e21] to-[#000000] text-center text-gray-300 text-sm font-titillium">
      <p>
        © {new Date().getFullYear()} Rahish Ali. Built with 💙 using React & Tailwind CSS.
      </p>
    </footer>
  );
}

export default Footer;