import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import Projects from './Components/Project';
import ProjectsSection from './Components/ProjectsSection';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import { Settings } from 'lucide-react'; // Importing the icon

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust loading time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="animate-spin">
          <Settings className="text-white" size={80} />
        </div>
      </div>
    );
  }

  return (
    <div className="app-container bg-gradient-to-b from-black via-purple-600 to-white min-h-screen">
      <div className="fullscreen-overlay4"></div>
      {location.pathname !== '/resume' && <Header />}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Introduction />
                <Projects />
                <ProjectsSection />
                <Contact />
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
