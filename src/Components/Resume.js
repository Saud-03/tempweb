import React from 'react';
import resumeData from '../data/resume';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaDownload, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Resume = () => {
  const handleDownload = () => {
    const pdfUrl = '/Saud_cv.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'Saud_Hussain_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className=" min-h-screen py-8 sm:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <div className="mb-6 sm:mb-8">
          <Link to="/">
            <button className="bg-purple-600 text-white p-2 rounded-full flex items-center hover:bg-purple-700 transition duration-300">
              <FaArrowLeft className="text-white" />
            </button>
          </Link>
        </div>

        {/* Resume Content */}
        <div className="bg-gray-700 text-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-0">{resumeData.name}</h1>
              <button
                onClick={handleDownload}
                className="bg-purple-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-purple-700 transition duration-300"
              >
                <FaDownload className="mr-2" /> Download Resume
              </button>
            </div>
            <h2 className="text-xl sm:text-2xl text-purple-400 mb-2">{resumeData.title}</h2>
            <p className="text-gray-300 mb-6">{resumeData.location}</p>

            <div className="flex flex-wrap mb-8">
              <a href={`mailto:${resumeData.contact.email}`} className="flex items-center text-gray-300 mr-6 mb-2">
                <FaEnvelope className="mr-2 text-purple-400" /> {resumeData.contact.email}
              </a>
              <a href={`tel:${resumeData.contact.phone}`} className="flex items-center text-gray-300 mr-6 mb-2">
                <FaPhone className="mr-2 text-purple-400" /> {resumeData.contact.phone}
              </a>
              <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 mr-6 mb-2">
                <FaGithub className="mr-2 text-purple-400" /> GitHub
              </a>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 mb-2">
                <FaLinkedin className="mr-2 text-purple-400" /> LinkedIn
              </a>
            </div>

            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Summary</h3>
              <p className="text-gray-300 leading-relaxed">{resumeData.summary}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Experience</h3>
              {resumeData.experience.map((job, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-purple-400">{job.title}</h4>
                  <p className="text-gray-300 font-medium">{job.company} | {job.duration}</p>
                  <p className="text-gray-400 mb-2">{job.location}</p>
                  <p className="text-gray-300">{job.description}</p>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Projects</h3>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-purple-400">{project.name}</h4>
                  <p className="text-gray-300 mt-2">{project.description}</p>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Skills</h3>
              <div className="flex flex-wrap">
                {resumeData.skills.map((skill, index) => (
                  <span key={index} className="bg-purple-800 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Languages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {resumeData.languages.map((lang, index) => (
                  <p key={index} className="text-gray-300">
                    <span className="font-semibold">{lang.language}:</span> {lang.level}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Education</h3>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-lg sm:text-xl font-semibold text-purple-400">{edu.degree}</h4>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-400">{edu.duration} | {edu.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;