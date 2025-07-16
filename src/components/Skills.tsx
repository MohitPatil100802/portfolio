import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 85 },
       
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Node.js", level: 65 },
        { name: "MySQL", level: 70 }
      ]
    },
    {
      title: "Programming",
      skills: [
      
        { name: "Python", level: 70 },
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 80 }
      ]
    }
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h3>
              <div>
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Responsive Design', 'REST APIs', 'JSON', 'ML Libraries','OCR','LLM"s', 'npm', 'Postman', 'Netlify', 'Vercel'
            ].map((tech) => (
              <span 
                key={tech}
                className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;