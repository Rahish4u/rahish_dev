import React from "react";
import profileImg from "../assets/profile.jpg";

 function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-28 bg-gradient-to-br from-[#6E33F4] via-[#6B6EF7] to-[#33E4B2] text-white"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between bg-white/10 backdrop-blur-xl p-10 py-20 mb-10 rounded-3xl shadow-lg">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-titillium">
            Hi! I'm <span className="text-orange-400">Rahish</span>
          </h1>
          <p className="text-sm md:text-base text-gray-200 max-w-md leading-relaxed font-spline">
            I am a <span className="text-black font-bold">MERN Stack Developer</span> who loves building modern, scalable, and engaging websites with responsive UI.
          </p>

          <a
            href="mailto:rahishali0591@gmail.com"
            className="inline-block mt-6 bg-white text-black px-6 py-2 rounded-full font-medium font-titillium shadow hover:scale-105 transition"
          >
            Hire Me
          </a>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={profileImg}
            alt="Rahish Ali"
            className="w-64 h-80 object-cover rounded-[40%] border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;