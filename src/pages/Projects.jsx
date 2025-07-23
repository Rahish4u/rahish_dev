import React from "react";

 function Projects() {
  return (
     <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-br from-[#021e21] via-[#030406] to-[#202020] text-white"
    >
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-lg">
        <h2 className="text-center text-4xl font-bold mb-12 font-titillium">My Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Glow Atelier */}
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md shadow-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-orange-400 font-titillium">Glow Atelier</h3>
            <p className="text-sm mt-3 text-gray-100 leading-relaxed font-spline">
              Responsive salon booking app built using MERN Stack & Tailwind CSS.
              Real-time form validation, booking logic, and deployed on Vercel.
            </p>
            <div className="mt-4 flex gap-6 text-sm font-titillium">
              <a
                href="https://glow-atelier-frontend.onrender.com"
                target="_blank"
                className="text-white bg-black/20 px-4 py-1 rounded-full hover:bg-black/40 transition"
              >
                Live
              </a>
              <a
                href="https://github.com/Rahish4u/Glow-Atelier"
                target="_blank"
                className="text-white bg-black/20 px-4 py-1 rounded-full hover:bg-black/40 transition"
              >
                Code
              </a>
            </div>
          </div>

          {/* Mentor Hub */}
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md shadow-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-pink-400 font-titillium">Mentor Hub</h3>
            <p className="text-sm mt-3 text-gray-100 leading-relaxed font-spline">
              Secure mentorship platform with JWT Auth, dashboard UI, Razorpay integration, and focus on scalable architecture.
            </p>
            <div className="mt-4 text-sm font-titillium">
              <a
                href="https://github.com/Rahish4u/Mentor-Hub"
                target="_blank"
                className="text-white bg-black/20 px-4 py-1 rounded-full hover:bg-black/40 transition"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;