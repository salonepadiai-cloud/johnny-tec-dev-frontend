const aboutSection = document.createElement("section");

aboutSection.id = "about";

aboutSection.innerHTML = `
<div class="container about-container">

    <div class="about-image">
        <img src="assets/images/about.png" alt="JOHNNY TEC. Dev">
    </div>

    <div class="about-content">

        <p class="section-tag">ABOUT ME</p>

        <h2>Building Modern Digital Solutions</h2>

        <p class="about-text">
            I'm JOHNNY TEC. Dev, a passionate Full Stack Developer who enjoys
            building fast, secure, and scalable web applications. I focus on
            writing clean code and creating solutions that solve real-world
            problems.
        </p>

        <div class="about-info">

            <div class="info-card">
                <h3>Frontend</h3>
                <p>Responsive, fast and modern interfaces.</p>
            </div>

            <div class="info-card">
                <h3>Backend</h3>
                <p>REST APIs, authentication and databases.</p>
            </div>

            <div class="info-card">
                <h3>Database</h3>
                <p>Supabase, PostgreSQL and cloud storage.</p>
            </div>

            <div class="info-card">
                <h3>Goal</h3>
                <p>Deliver quality software with great user experience.</p>
            </div>

        </div>

    </div>

</div>
`;

document.getElementById("main-content").appendChild(aboutSection);
