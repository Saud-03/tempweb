import React from 'react';

const Project = ({ project }) => {
  if (!project) {
    return null;
  }

  return (
    <div className="group bg-gray-900 rounded-lg overflow-hidden shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg">
      <div className="relative">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-700 flex items-center justify-center text-white">No image available</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 sm:p-6 relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-indigo-500 transform transition-transform duration-300 ease-in-out group-hover:scale-y-100 scale-y-0 origin-top"></div>
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-purple-300">{project.title}</h3>
        <p className="text-sm sm:text-base text-gray-400 mb-4 transition-colors duration-300 group-hover:text-gray-300">{project.description}</p>
        <a
          href={project.link}
          className="inline-block text-sm sm:text-base text-purple-400 hover:text-purple-300 transition-colors duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Project;