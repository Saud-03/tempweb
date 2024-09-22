import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:saudhusayn@gmail.com?subject=${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-900 text-gray-200 rounded-lg shadow-2xl max-w-4xl mx-auto overflow-hidden">
        <div className="lg:flex">
          <div className="lg:w-1/2 p-6 sm:p-8 bg-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Get in Touch</h2>
            <p className="text-gray-300 mb-6">Feel free to reach out, whether you have a question or just want to connect!</p>
            <div className="flex space-x-4 sm:space-x-6">
              <a href="mailto:saudhusayn@gmail.com" className="text-gray-400 hover:text-purple-400 transition duration-300">
                <FaEnvelope className="text-2xl sm:text-3xl" />
              </a>
              <a href="https://www.linkedin.com/in/saud-h-43a584199" className="text-gray-400 hover:text-purple-400 transition duration-300">
                <FaLinkedin className="text-2xl sm:text-3xl" />
              </a>
              <a href="https://github.com/saud-03" className="text-gray-400 hover:text-purple-400 transition duration-300">
                <FaGithub className="text-2xl sm:text-3xl" />
              </a>
              <a href="https://wa.me/+917019291068" className="text-gray-400 hover:text-purple-400 transition duration-300">
                <FaWhatsapp className="text-2xl sm:text-3xl" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-700 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-700 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-700 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                  placeholder="Write your message here"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;