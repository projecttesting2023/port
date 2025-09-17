import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "HaloFoto",
      description: "A digital application platform built for photography lovers and photography activists to get all the information about latest products, latest news, tips & tricks, warranties and stories about idolized figures in the world of photography.",
      image: "/api/placeholder/400/250",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Photo Sharing", "Video Player"],
      demoUrl: "https://play.google.com/store",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "MyJoie (Patient & Therapist)",
      description: "Online consultation platform with video and audio calls using Agora.io, real-time chat with Firebase Firestore, and payments via Razorpay, developed using React Native and Laravel.",
      image: "/api/placeholder/400/250",
      category: "mobile",
      technologies: ["React Native", "Agora SDK", "Firebase", "Razorpay", "Laravel"],
      demoUrl: "https://play.google.com/store",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Datmont",
      description: "The ultimate data synchronization app that revolutionizes the way you manage and share your files across all your devices! With Datmont, syncing and collaborating on your data becomes a breeze.",
      image: "/api/placeholder/400/250",
      category: "mobile",
      technologies: ["React Native", "Data Sync", "File Management", "Cross-Platform"],
      demoUrl: "https://play.google.com/store",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Teleet",
      description: "A dynamic and interactive social media platform designed to connect people across the globe, fostering meaningful relationships and vibrant communities.",
      image: "/api/placeholder/400/250",
      category: "mobile",
      technologies: ["React Native", "Social Media", "Real-time Chat", "Community Features"],
      demoUrl: "https://play.google.com/store",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "Payvory",
      description: "A Cash Universal Wire service providing a secure and efficient platform for wire transfers of funds between individuals and businesses in different locations, integrated with PayPal for payments.",
      image: "/api/placeholder/400/250",
      category: "mobile",
      technologies: ["React Native", "PayPal Integration", "Wire Transfer", "Security"],
      demoUrl: "https://apps.apple.com",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "Astrology & User Apps",
      description: "Developed User and Astrologer apps, enabling users to recharge wallets, call or chat with astrologers based on wallet balance, purchase astrology-related products, book online puja, and access matchmaking features.",
      image: "/api/placeholder/400/250",
      category: "mobile",
      technologies: ["React Native", "Payment Gateway", "Chat System", "E-commerce"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web Apps' },
    { id: 'fullstack', label: 'Full Stack' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="filter-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-tab ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demoUrl} className="project-link demo" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Live Demo
                    </a>
                    <a href={project.codeUrl} className="project-link code" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
