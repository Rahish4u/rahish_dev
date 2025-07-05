import React from "react";

function Footer() {
  return (
    <footer className="py-6 px-6 bg-gradient-to-br from-[#33E4B2] to-[#6E33F4] text-center text-gray-900 text-sm font-titillium">
      <p>
        © {new Date().getFullYear()} Rahish Ali. Built with 💙 using React & Tailwind CSS.
      </p>
    </footer>
  );
}

export default Footer;