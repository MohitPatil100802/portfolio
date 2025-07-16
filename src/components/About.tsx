import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "10+" },
    { icon: Coffee, label: "Internships", value: "4" },
    { icon: Lightbulb, label: "Technologies Learned", value: "10+" },
    { icon: Users, label: "GitHub Repositories", value: "8+" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* About Text */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p>
  I'm a passionate and adaptable frontend developer with a Master's degree (MCA) in AI, ML, 
  and Data Science from DY Patil International University, Akurdi. My academic foundation and
   real-world exposure through 4 intensive internships have shaped me into a well-rounded developer focused 
   on both design and functionality.
</p>
<p>
  I specialize in building responsive and user-friendly web interfaces using React, JavaScript, HTML/CSS, Tailwind CSS, 
  and modern tools like Vite. My internship journey has allowed me to contribute to projects like WealthWise (fintech), 
   and gesture-based UI systems using CustomTkinter. I also have experience integrating
   backend APIs, using OCR in meter reading extraction prpject, automating workflows with n8n, and building full-stack features.
</p>
<p>
  I’m constantly exploring new technologies to solve real-world problems, with a strong focus on performance,
   accessibility, and user experience. Whether working solo or collaborating in teams, I bring energy, responsibility, 
   and a design-focused approach to every project I take on.
</p>

              <p>
                As a fresher entering the tech industry, I'm eager to contribute to meaningful projects 
                and continue learning from experienced developers. I believe in writing clean, 
                maintainable code and staying updated with the latest frontend technologies and best practices.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Quick Learner', 'Team Collaboration', 'Problem Solving', 'Attention to Detail'].map((skill) => (
                <span key={skill} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* About Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <div className="text-8xl text-center mb-4">🚀</div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Always Learning</h3>
                <p className="text-gray-600">
                  Committed to staying at the forefront of technology and best practices
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon size={28} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
              <p className="text-gray-600 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;