import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="portfolio">
    <header>
      <h1>Umberto</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    
    <main>
      <section id="hero">
        <h2>Web Developer &amp; Designer</h2>
        <p>Crafting digital experiences that inspire</p>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>I'm a passionate web developer with a keen eye for design and a love for creating responsive, user-friendly websites that leave a lasting impression.</p>
      </section>
      
      <section id="projects">
        <h2>Featured Projects</h2>
        <div class="project-grid">
          <div class="project">
            <img src="https://picsum.photos/seed/project1/300/200" alt="Project 1">
            <h3>Project 1</h3>
            <p>A responsive e-commerce platform</p>
          </div>
          <div class="project">
            <img src="https://picsum.photos/seed/project2/300/200" alt="Project 2">
            <h3>Project 2</h3>
            <p>Interactive data visualization dashboard</p>
          </div>
          <div class="project">
            <img src="https://picsum.photos/seed/project3/300/200" alt="Project 3">
            <h3>Project 3</h3>
            <p>Mobile-first social media app</p>
          </div>
        </div>
      </section>
      
      <section id="contact">
        <h2>Let's Connect</h2>
        <p>Ready to bring your ideas to life? Get in touch!</p>
        <div class="contact-links">
          <a href="mailto:your.email@example.com">Email</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
          <a href="https://github.com/yourusername" target="_blank">GitHub</a>
        </div>
      </section>
    </main>
    
    <footer>
      <p>&copy; 2023 Your Name. All rights reserved.</p>
    </footer>
  </div>
`