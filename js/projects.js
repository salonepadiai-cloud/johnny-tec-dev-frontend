// ===========================
// PROJECTS
// ===========================

const projects = document.createElement("section");

projects.id = "projects";

projects.innerHTML = `
<div class="projects-container">

    <div class="projects-header">
        <p class="section-tag">MY WORK</p>
        <h2>Featured Projects</h2>
        <p>A collection of applications I've built.</p>
    </div>

    <div class="projects-grid">

        <div class="project-card">

            <div class="project-image">
                <img src="assets/images/project1.png" alt="Project">
            </div>

            <div class="project-content">

                <h3>Portfolio Website</h3>

                <p>
                    Personal portfolio built with HTML, CSS and JavaScript.
                </p>

                <div class="project-tags">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                </div>

                <div class="project-buttons">
                    <a href="#" class="demo-btn">Live</a>
                    <a href="#" class="code-btn">GitHub</a>
                </div>

            </div>

        </div>

        <div class="project-card">

            <div class="project-image">
                <img src="assets/images/project2.png" alt="Project">
            </div>

            <div class="project-content">

                <h3>Task Manager API</h3>

                <p>
                    REST API built using Node.js, Express and Supabase.
                </p>

                <div class="project-tags">
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>Supabase</span>
                </div>

                <div class="project-buttons">
                    <a href="#" class="demo-btn">Live</a>
                    <a href="#" class="code-btn">GitHub</a>
                </div>

            </div>

        </div>

        <div class="project-card">

            <div class="project-image">
                <img src="assets/images/project3.png" alt="Project">
            </div>

            <div class="project-content">

                <h3>Admin Dashboard</h3>

                <p>
                    Responsive dashboard with authentication and analytics.
                </p>

                <div class="project-tags">
                    <span>Dashboard</span>
                    <span>API</span>
                    <span>Responsive</span>
                </div>

                <div class="project-buttons">
                    <a href="#" class="demo-btn">Live</a>
                    <a href="#" class="code-btn">GitHub</a>
                </div>

            </div>

        </div>

    </div>

</div>
`;

document.getElementById("main-content").appendChild(projects);
