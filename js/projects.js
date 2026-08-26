// ==========================================
// JOHNNY TEC. Dev
// PROJECTS PAGE
// ==========================================

const projects = document.getElementById("projects");

projects.innerHTML = `

<section class="projects-container">

    <div class="projects-header">

        <span class="section-tag">
            MY WORK
        </span>

        <h2>Featured Projects</h2>

        <p>

            Here are some of the projects I'm currently building as I
            continue my journey in web development.

        </p>

    </div>

    <div class="projects-grid">

        <!-- Project 1 -->

        <div class="project-card">

            <div class="project-image">

                <img
                    src="assets/images/project1.png"
                    alt="Portfolio Website">

            </div>

            <div class="project-content">

                <h3>Portfolio Website</h3>

                <p>

                    My personal portfolio website built with
                    HTML, CSS and JavaScript.
                    It showcases my skills, projects and learning journey.

                </p>

                <div class="project-tags">

                    <span>HTML5</span>

                    <span>CSS3</span>

                    <span>JavaScript</span>

                </div>

                <div class="project-buttons">

                    <a
                        href="#"
                        class="demo-btn">

                        Live Demo

                    </a>

                    <a
                        href="https://github.com/"
                        target="_blank"
                        class="code-btn">

                        GitHub

                    </a>

                </div>

            </div>

        </div>

        <!-- Project 2 -->

        <div class="project-card">

            <div class="project-image">

                <img
                    src="assets/images/project2.png"
                    alt="SalonePadi AI">

            </div>

            <div class="project-content">

                <h3>SalonePadi AI</h3>

                <p>

                    An AI-powered platform I'm developing while learning
                    frontend development and modern web technologies.

                </p>

                <div class="project-tags">

                    <span>AI</span>

                    <span>JavaScript</span>

                    <span>GitHub</span>

                </div>

                <div class="project-buttons">

                    <a
                        href="https://salonepadiai-cloud.github.io/salonepadi-ai-frontend/"
                        target="_blank"
                        class="demo-btn">

                        Live Demo

                    </a>

                    <a
                        href="#"
                        class="code-btn">

                        GitHub

                    </a>

                </div>

            </div>

        </div>

        <!-- Project 3 -->

        <div class="project-card">

            <div class="project-image">

                <img
                    src="assets/images/project3.png"
                    alt="Learning Project">

            </div>

            <div class="project-content">

                <h3>Learning Projects</h3>

                <p>

                    A collection of websites and practice applications
                    I build to improve my coding and problem-solving skills.

                </p>

                <div class="project-tags">

                    <span>HTML</span>

                    <span>CSS</span>

                    <span>JavaScript</span>

                </div>

                <div class="project-buttons">

                    <a
                        href="#"
                        class="demo-btn">

                        Preview

                    </a>

                    <a
                        href="#"
                        class="code-btn">

                        Source Code

                    </a>

                </div>

            </div>

        </div>

    </div>

</section>

`;
