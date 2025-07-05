import React from "react";

function ExperienceEducation() {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-br from-[#33E4B2] via-[#6B6EF7] to-[#33E4B2] text-white"
    >
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-12 font-titillium">Experience & Education</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-orange-400 font-titillium">Experience</h3>

            {[
              {
                role: "Web Development Intern – TechOctanet",
                date: "Feb 2025 | Remote",
                desc: "Worked on live MERN stack projects, improved frontend & backend skills under industry mentorship.",
              },
              {
                role: "Web Developer – Cognifyze",
                date: "Jan 2025 | Remote",
                desc: "Enhanced user experience using HTML, CSS, JS, and Node.js in real-world apps.",
              },
              {
                role: "Freelance Tutor – QalpEdu",
                date: "Feb 2024 – Nov 2024 | Varanasi",
                desc: "Managed students & coding side by side. Improved teaching + communication skills.",
              },
              {
                role: "Computer Operator – Khemchand Group",
                date: "Dec 2022 – Jan 2024 | Varanasi",
                desc: "Streamlined reporting using Excel, improved team efficiency via documentation.",
              },
            ].map((exp, index) => (
              <div
                key={index}
                className=" p-5 rounded-xl backdrop-blur-sm shadow-md hover:scale-[1.02] transition"
              >
                <h4 className="font-bold text-lg text-orange-300 font-titillium">{exp.role}</h4>
                <p className="text-sm text-gray-200 font-spline">{exp.date}</p>
                <p className="text-sm mt-2 text-white/90 font-spline">{exp.desc}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-pink-300 font-titillium">Education</h3>

            {[
              {
                course: "MCA – Uttaranchal University Dehradun",
                date: "2025 – 2027",
                desc: "Integrated MCA program focusing on advanced web technologies, software development and AI.",
              },
              {
                course: "Full Stack Development – PW Skills",
                date: "2024 – 2025",
                desc: "Industry-level MERN stack fellowship with real-world projects and mentorship.",
              },
              {
                course: "B.Sc – Rajju Bhaiya State University",
                date: "2019 – 2022 | Prayagraj",
                desc: "Completed Bachelor of Science with strong foundation in analytical thinking and discipline.",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className="bg-white/10 p-5 rounded-xl backdrop-blur-sm shadow-md hover:scale-[1.02] transition"
              >
                <h4 className="font-bold text-lg text-pink-300 font-titillium">{edu.course}</h4>
                <p className="text-sm text-gray-200 font-spline">{edu.date}</p>
                <p className="text-sm mt-2 text-white/90 font-spline">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceEducation;
