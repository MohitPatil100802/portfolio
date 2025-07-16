import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "Responsive portfolio website showcasing projects and skills",
      longDescription: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark/light mode toggle, project showcase, skills section, and contact form. Optimized for performance and SEO.",
      image: "dist/assets/Mohit portfolio.jpg",
      technologies: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Face Detection Attendence System",
      description: "Monitoring attendance using face detection and recognition",
      longDescription: "A face detection attendance system that uses OpenCV and Python to recognize faces in real-time. Features include automatic attendance marking, data storage in a CSV , and a user-friendly interface for organizations.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcwJoWhomKSLThRWZLJ8kbQH4Ey2G5BKMm5XoY_elrSkslUS-AYQWzcoIZxO_P2XXADmgfraF09NTd-H9sZdZ7hnSJRAEKmyliyW0i6oRDaZPJtWG1SriJYMuCXUWtJLo4_tzAQshPm5Q8/s1280/Face+recognition+biometric+by+FaceChk.jpg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "OpenCV ", "tkinter", "ML-Libraries"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      id: 3,
      title: "Weather Forcast App",
      description: "Weather application with API integration and geolocation",
      longDescription: "A responsive weather application that fetches real-time weather data using OpenWeatherMap API. Features current weather, 5-day forecast, geolocation support, and search functionality with a clean, modern interface.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React-vite", "Weather API", "CSS3", "HTML5"],
      liveUrl: "https://weather-forcast-orpin.vercel.app/",
      githubUrl: "https://github.com/MohitPatil100802/Weather_Forcast",
      category: "Frontend"
    },
    {
      id: 4,
      title: "Real Time Map Application",
      description: "Real-time map application with find destination route and location tracking",
      longDescription: "A real-time map application that allows users to find routes, track locations, and view nearby places. Built with React and Leaflet, it features interactive maps, geolocation, and responsive design for mobile and desktop.",
      image: "https://freebie.photography/travel/trans_atlantic.jpg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      liveUrl: "https://real-time-map-app.vercel.app/",
      githubUrl: "https://github.com/MohitPatil100802/real-time-map-app",
      category: "Frontend"
    },
    {
      id: 5,
      title: "Social Media Interface",
      description: "Fully functional social media interface with user profiles and posts",
      longDescription: "social media interface that allows users to view profiles, browse posts, interact with posts (like, comment), and view notifications. and a responsive design for seamless user experience.",
      image: "dist/assets/social .jpg",
      technologies: ["HTML", "JavaScript", "CSS3"],
      liveUrl: "https://mohitpatil100802.github.io/SocialMedia/",
      githubUrl: "https://github.com/MohitPatil100802/SocialMedia",
      category: "Frontend"
    },
    {
      id: 6,
      title: "Quiz Game",
      description: "Interactive quiz app with multiple categories and scoring",
      longDescription: "An engaging quiz application with multiple categories, timer functionality, score tracking, and result analysis. Features dynamic question loading, progress tracking, and responsive design for all devices.",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML5", "JavaScript", "CSS3"],
      liveUrl: "https://mohitpatil100802.github.io/TriviaQuizGame/Trivia%20Quiz%20game.html",
      githubUrl: "https://github.com/MohitPatil100802/TriviaQuizGame",
      category: "Frontend"
    },
    {
      id: 5,
      title: "Movie Catlog",
      description: "In The movie catalog project User can view the movie title , cast,release date and watch the Movie Trailer .",
      longDescription: "The movie catalog project aims to develop a web application where users can view and add movies to a catalog. The primary goals of this project are to display a list of movies, with each entry showing the title, director, year of release, and trailer link. Additionally, the design should be responsive and visually appealing, ensuring a user-friendly layout that looks attractive across different devices..",
      image:"dist/assets/Movie catlog.jpg",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "https://mohitpatil100802.github.io/MovieCatlog/",
      githubUrl: "https://github.com/MohitPatil100802/MovieCatlog",
      category: "Frontend"
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            A showcase of my recent work and personal projects
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-sm">Click to view details</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="flex items-center text-gray-600 hover:text-gray-700 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 text-lg mb-6">{selectedProject.longDescription}</p>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string) => (
                      <span key={tech} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={selectedProject.liveUrl} 
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    View Live Demo
                  </a>
                  <a 
                    href={selectedProject.githubUrl} 
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center gap-2"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;