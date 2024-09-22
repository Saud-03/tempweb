import React from 'react';
import photo from '../assets/Images/photo.jpg';


function Introduction() {
  return (
    <section className="flex flex-col md:flex-row w-full mx-auto pt-4 sm:pt-6 md:pt-8 lg:pt-12 px-4 sm:px-6 lg:px-8 items-center mb-8 md:mb-12">
      <div className="flex-1 text-center md:text-left md:pr-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-300 mb-2 sm:mb-3 animate-fadeInOut">
          Hello <span role="img" aria-label="wave">👋</span>
        </h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-purple-500 mb-2 animate-fadeInOut delay-1">
          I'm <span className="text-teal-400">Saud Hussain</span>
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-cyan-300 italic mb-3 sm:mb-4 tracking-wider animate-fadeInOut delay-2">
          Full Stack Developer
        </p>
        <div className="text-base sm:text-lg lg:text-xl font-light text-gray-200 tracking-wide leading-relaxed mb-4 sm:mb-6">
          <p className="mb-1 animate-fadeInOut delay-3">Building efficient and scalable</p>
          <p className="mb-1 animate-fadeInOut delay-4">web applications with a passion</p>
          <p className="animate-fadeInOut delay-5">for technology and innovation.</p>
        </div>
        <a
          href="#contact"
          className="inline-block px-5 py-2 sm:px-6 sm:py-3 bg-purple-500 text-white rounded-lg font-bold text-base sm:text-lg hover:bg-purple-600 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
      <div className="flex-1 mt-6 md:mt-0 animate-fadeIn md:flex md:justify-end">
        <img
          src={photo}
          alt="Saud Hussain"
          className="w-2/3 max-w-xs sm:w-1/2 sm:max-w-sm mx-auto md:w-3/4 md:max-w-md lg:max-w-lg rounded-full shadow-lg object-cover"
        />
      </div>
    </section>
  );
}

export default Introduction;
