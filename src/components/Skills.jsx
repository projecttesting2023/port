import { useState, useEffect, useRef } from 'react'
import './Skills.css'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "PHP", level: 80 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: "🚀",
      skills: [
        { name: "React Native", level: 95 },
        { name: "React.js", level: 90 },
        { name: "Redux", level: 88 },
        { name: "Redux Toolkit", level: 85 },
        { name: "Redux Middleware", level: 80 },
        { name: "Context API", level: 85 },
        { name: "Node.js", level: 82 },
        { name: "CodeIgniter", level: 75 }
      ]
    },
    {
      title: "Databases & Tools",
      icon: "🛠️",
      skills: [
        { name: "SQLite", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "JEST", level: 75 },
        { name: "API Integration", level: 90 },
        { name: "Android/iOS Development", level: 85 },
        { name: "Object-Oriented Programming", level: 88 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">What I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className={`skill-category ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="skill-item"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress ${isVisible ? 'animate' : ''}`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-item">
            <h4>Always Learning</h4>
            <p>I'm constantly exploring new technologies and improving my existing skills to stay current with industry trends.</p>
          </div>
          <div className="summary-item">
            <h4>Problem Solver</h4>
            <p>I enjoy tackling complex challenges and finding creative solutions using the right combination of technologies.</p>
          </div>
          <div className="summary-item">
            <h4>Team Player</h4>
            <p>I work well in collaborative environments and believe in sharing knowledge to help teams succeed together.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
