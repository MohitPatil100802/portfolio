import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';


const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-cyan-400 text-lg font-medium animate-fadeIn">
                👋 Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slideUp">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
                  Mohit Patil
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 animate-slideUp delay-200">
                Full Stack Web Developer 
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl animate-slideUp delay-300">
             MCA graduate specialized in AI, ML, and Data Science with a passion for crafting responsive and 
             engaging web applications. Skilled in React, JavaScript, HTML/CSS, and modern frontend tools with 
             a strong focus on performance, accessibility, and user-centered design.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slideUp delay-400">
              <button
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
              <button
                className="border border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 font-semibold"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 animate-slideUp delay-500">
              {[
                { icon: Github, href: "https://github.com/MohitPatil100802", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/mohit-patil1008", label: "LinkedIn" },
                { icon: Mail, href: "mailto:patilmohit1008@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center text-gray-300 animate-slideUp delay-600">
              <MapPin size={16} className="mr-2" />
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-slideUp delay-700">
            <div className="relative mx-auto w-45 h-70 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full border-[2px] border-white/20 flex items-center justify-center">
                <div className="w-72 h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                    style={{ objectPosition: 'center 30%' }} // Moves image down
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-white/70 hover:text-white transition-colors">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </section>
  );
};

export default Hero;