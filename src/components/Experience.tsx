import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Techjar Technologies Private Limited",
      position: "React Developer",
      period: "Mar 2025 - Jun 2025",
      location: "Pune, India",
      description: "Worked on developing responsive web applications using React and modern CSS frameworks. Collaborated with the design team to implement pixel-perfect UI components.",
      achievements: [
        "Specialize in front-end development with a strong focus on React.js usable React components improving development efficiency",
        "Working on AI & OCR integration projects using Python, Machine Learning libraries, and LLMs (Large Language Models)"
,
        "Collaborate with an amazing development team and contribute to project success",
        "Visit client sites, understand project requirements, and document key discussions",
        "Engage with clients directly for feedback and technical clarification"

      ]
    },
    {
      company: "Numetry Technologies Private Limited",
      position: "Full Stack Development Intern",
      period: "Feb 2025 - Mar 2025",
      location: "Pune",
      description: "Focused on creating user-friendly interfaces and improving user experience.",
      achievements: [
        "Designed and maintained dynamic websites for diverse clients, incorporating custom features tailored to specific client requirements",
 "Enhanced website aesthetics and usability by integrating responsive design principles",
 "Coordinated with clients to gather feedback, iterating and improving designs to meet evolving needs."
      ]
    },
    {
      company: "Synexoo Technologies Private Limited",
      position: " Frontend Web Developer Intern",
      period: "May 2024 - July 2024",
      location: "Remote",
      description: "Assisted in developing various web pages and landing pages. Gained experience in WordPress customization and basic SEO optimization techniques.",
      achievements: [
        "Handled multiple web development projects. Implemented HTML, CSS, and JavaScript to enhance website functionality." 
           ]
    },
    {
      company: "PHN Technologies Private Limited",
      position: "Web Developer Intern",
      period: "April 2023 - Jun 2023",
      location: "Remote",
      description: "First internship experience working on small-scale web projects. Learned fundamental web development concepts and industry best practices.",
      achievements: [
        "Developed and maintained websites for clients. Assisted in debugging and optimizing code"
      ]
    }
  ];

  const education = [
    {
      institution: "DY Patil International University, Akurdi",
      degree: "Master of Computer and Applications (AI, ML, and Data Science)",
      period: "2023 - 2025",
      grade: "8.43 CGPA",
      description: "Specialized in Artificial Intelligence, Machine Learning, and Data Science. Completed projects on AI-driven applications and data analysis."
    },

    {
      institution: "GH Raisoni Institute of Business and Management,Jalgaon",
      degree: "Bachelor of Computer and Applications",
      period: "2020 - 2023",
      grade: "8.89 CGPA",
      description: "Specialized in computer applications, data structures, algorithms, database management, and web technologies."
    },

    {
      institution: "K.R.Kotkar Junior College, Chalisgaon",
      degree: "HSC (Science)",
      period: "2018 - 2020",
      grade: "68.92%",
      description: "Studied core science subjects with a focus on mathematics and computer science."
    },

    {
      institution: "Tatyasaheb Samaant Madhyamik Vidyalaya, Chalisgaon",
      degree: "SSC",
      period: "2018",
      grade: "82.60%",
      description: "Completed secondary education with a strong foundation in mathematics and science."
    }


  ];

  const certifications = [
     "The Complete Front-End Web Development Course(Udemy)",
     " Data Science and Machine Learning Fundamentals(Udemy)",
     "Snowflake Platform Training-APAC"
   
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional experience, education, and achievements that shaped my career
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Calendar className="mr-3 text-blue-600" />
              Professional Experience
            </h3>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-500"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative mb-12 ml-12">
                  <div className="absolute -left-8 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-gray-900">{exp.position}</h4>
                      <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                      <div className="flex items-center text-gray-500 text-sm mt-2 space-x-4">
                        <span className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </span>
                        <span className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Award className="mr-3 text-blue-600" />
                Education
              </h3>
              
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <p className="text-lg font-semibold text-blue-600 mb-2">{edu.institution}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={14} className="mr-1" />
                    {edu.period}
                  </div>
                  <p className="text-green-600 font-medium mb-3">{edu.grade}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="grid gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;