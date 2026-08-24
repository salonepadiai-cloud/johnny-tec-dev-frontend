// ===========================
// ABOUT SECTION
// File: js/about.js
// ===========================

const about = document.getElementById("about");

about.innerHTML = `
<div class="container about-container">

    <!-- Left Side -->
    <div class="about-image">

        <div class="about-image-card">
            <img
                src="assets/images/about.png"
                alt="JOHNNY TEC. Dev">
        </div>

    </div>

    <!-- Right Side -->
    <div class="about-content">

        <p class="section-tag">
            ABOUT ME
        </p>

        <h2>
            Full Stack Developer Creating Modern Web Solutions
        </h2>

        <p class="about-text">
            I'm <strong>JOHNNY TEC. Dev</strong>, a passionate software
            developer dedicated to building fast, secure and scalable web
            applications. I enjoy solving real-world problems through clean,
            maintainable code and modern technologies.
        </p>

        <p class="about-text">
            My focus is on creating high-performance websites, REST APIs,
            backend systems and responsive user interfaces that deliver an
            excellent user experience.
        </p>

        <div class="about-info">

            <div class="info-card">
                <h3>Frontend</h3>
                <p>
                    HTML5, CSS3, JavaScript, Responsive Design
                </p>
            </div>

            <div class="info-card">
                <h3>Backend</h3>
                <p>
                    Node.js, Express.js, REST API Development
                </p>
            </div>

            <div class="info-card">
                <h3>Database</h3>
                <p>
                    Supabase, PostgreSQL, Cloud Storage
                </p>
            </div>

            <div class="info-card">
                <h3>Version Control</h3>
                <p>
                    Git & GitHub Workflow
                </p>
            </div>

            <div class="info-card">
                <h3>Hosting</h3>
                <p>
                    GitHub Pages, Render & Cloud Deployment
                </p>
            </div>

            <div class="info-card">
                <h3>Mission</h3>
                <p>
                    Build software that is fast, secure, scalable and easy to
                    use.
                </p>
            </div>

        </div>

        <div class="about-buttons">

            <a href="#projects" class="btn-primary">
                View Projects
            </a>

            <a href="#contact" class="btn-secondary">
                Contact Me
            </a>

        </div>

    </div>

</div>
`;
