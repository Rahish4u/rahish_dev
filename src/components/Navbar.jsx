import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/Rahish_Ali_Resume.pdf" },
  ];

  // 👇 Auto-close sidebar on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 flex justify-between items-center bg-white/10 backdrop-blur-md shadow-sm text-white">
        <h1 className="flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-wide font-titillium animate-logo">
          <span className="px-4 py-1 rounded-2xl border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-md flex items-center justify-center transition-transform duration-300 hover:scale-105">
            R<span className="text-orange-400 animate-pulse ml-0.5">A</span>
          </span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 items-center text-xs font-spline uppercase">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.name === "Resume" ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-all"
                >
                  {link.name}
                </a>
              ) : (
                <a
                  href={link.href}
                  className="hover:text-orange-400 transition-all"
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
          <li>
            <a
              href="mailto:rahishali0591@gmail.com"
              className="bg-white text-black px-5 py-1.5 rounded-full shadow-md hover:scale-105 transition-all font-titillium"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-xl hover:text-orange-400 transition-all"
        >
          <FaBars />
        </button>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 md:hidden z-[999] transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out
        bg-gradient-to-br from-[#6E33F4] via-[#6B6EF7] to-[#33E4B2] backdrop-blur-xl bg-opacity-90 text-white shadow-lg rounded-l-3xl`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 font-titillium uppercase">
          <h1 className="flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-wide font-titillium animate-logo">
          <span className="px-4 py-1 rounded-2xl border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-md flex items-center justify-center transition-transform duration-300 hover:scale-105">
            R<span className="text-orange-400 animate-pulse ml-0.5">A</span>
          </span>
        </h1>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl hover:text-orange-400 transition-all"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-6 py-8 text-xs font-spline uppercase items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.name === "Resume" ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-all"
                >
                  {link.name}
                </a>
              ) : (
                <a
                  href={link.href}
                  className="hover:text-orange-400 transition-all"
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
          <li>
            <a
              href="mailto:rahishali0591@gmail.com"
              onClick={() => setMenuOpen(false)}
              className="inline-block bg-white text-black px-4 py-2 rounded-full text-center text-xs  shadow hover:scale-105 transition font-titillium"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <div className="flex gap-5 justify-center text-xl mt-4">
          <a
            href="https://github.com/Rahish4u"
            target="_blank"
            className="hover:text-orange-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/rahish-941653262"
            target="_blank"
            className="hover:text-orange-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[998] md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;
