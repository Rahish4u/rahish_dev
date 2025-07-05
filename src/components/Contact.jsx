import React, { useState, useRef } from "react";

function Contact() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      formRef.current.reset(); // Clear form
      setSuccess(true); // Show success message

      setTimeout(() => {
        setSuccess(false); // Hide message after 4s
      }, 4000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-[#6E33F4] via-[#6B6EF7] to-[#33E4B2] text-white"
    >
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-lg">
        <h2 className="text-4xl font-bold text-center text-white mb-10 font-titillium">
          Contact Me
        </h2>

        <form
          ref={formRef}
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-6"
          onSubmit={(e) => {
            setSuccess(true);
            setTimeout(() => setSuccess(false), 4000);
            setTimeout(() => formRef.current.reset(), 100); // clear fields
          }}
        >
          <input
            type="hidden"
            name="access_key"
            value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
          />

          <div>
            <label className="block text-md text-white mb-1 font-titillium">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-white outline-none focus:ring-2 focus:ring-white font-spline"
            />
          </div>

          <div>
            <label className="block text-md text-white mb-1 font-titillium">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-white outline-none focus:ring-2 focus:ring-white font-spline"
            />
          </div>

          <div>
            <label className="block text-md text-white mb-1 font-titillium">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Type your message here..."
              className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-white outline-none resize-none focus:ring-2 focus:ring-white font-spline"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-40 bg-white text-black font-semibold py-2 px-6 rounded-full transition-all shadow-md hover:scale-105 hover:shadow-lg mx-auto block font-titillium"
          >
            Send Message
          </button>

          {success && (
            <p className="text-center text-green-300 text-sm font-medium mt-4 animate-fadeIn font-spline">
              ✅ Message successfully sent to{" "}
              <span className="text-orange-400">Mr. Rahish Ali</span>. Thank
              you!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
