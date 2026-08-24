// ==========================
// PROJECTS PAGE
// ==========================

const projects = document.getElementById("projects");

projects.innerHTML = `
<div class="container">

    <h1>Projects</h1>

    <div class="projects-grid">

        <div class="card">

            <img
            src="assets/images/project1.png"
            alt="">

            <h3>Portfolio Website</h3>

            <p>
                Personal Portfolio.
            </p>

            <a
            href="#"
            class="btn btn-primary">

                View

            </a>

        </div>

        <div class="card">

            <img
            src="assets/images/project2.png"
            alt="">

            <h3>Dashboard</h3>

            <p>
                Admin Dashboard.
            </p>

            <a
            href="#"
            class="btn btn-primary">

                View

            </a>

        </div>

        <div class="card">

            <img
            src="assets/images/project3.png"
            alt="">

            <h3>API Server</h3>

            <p>
                Backend using Node.js.
            </p>

            <a
            href="#"
            class="btn btn-primary">

                View

            </a>

        </div>

    </div>

</div>
`;
