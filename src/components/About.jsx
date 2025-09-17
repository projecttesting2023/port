import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a passionate React Native Developer with over 7 years of experience in web and mobile app development. 
              Strong in debugging, custom UI implementation, test coverage, and app publishing. I have successfully 
              delivered 15-20 mobile application projects end-to-end using modern technologies like React Native, 
              React.js, Redux, and various other frameworks.
            </p>
            
            <p className="about-paragraph">
              Currently working at Coders Mind Pvt Ltd as a Mobile Application Developer, where I develop digital 
              platforms for photography enthusiasts, create consultation apps with video/audio calls, and build 
              data synchronization applications. I enjoy turning complex problems into simple, elegant solutions 
              and believe in continuous learning to stay current with industry trends.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h3 className="stat-number">7+</h3>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">20+</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">5+</h3>
                <p className="stat-label">Companies Worked</p>
              </div>
            </div>
            
            <div className="about-highlights">
              <h3>What I Do</h3>
              <ul className="highlights-list">
                <li>
                  <span className="highlight-icon">📱</span>
                  <div>
                    <strong>Mobile App Development</strong>
                    <p>Creating React Native applications with custom UI implementation and app publishing</p>
                  </div>
                </li>
                <li>
                  <span className="highlight-icon">🚀</span>
                  <div>
                    <strong>Frontend Development</strong>
                    <p>Building responsive web applications with React.js, Redux, and modern JavaScript/TypeScript</p>
                  </div>
                </li>
                <li>
                  <span className="highlight-icon">⚙️</span>
                  <div>
                    <strong>Backend Development</strong>
                    <p>Developing robust APIs and server-side applications with Node.js, PHP, and databases</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <div className="about-photo">
                <div className="photo-placeholder">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 11H7v3h2v-3zm4 0h-2v3h2v-3zm4 0h-2v3h2v-3zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </div>
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1">💻</div>
                <div className="floating-element element-2">🎨</div>
                <div className="floating-element element-3">⚡</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
