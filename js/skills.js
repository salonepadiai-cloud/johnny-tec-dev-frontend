// ===========================
// SKILLS SECTION
// ===========================

const skills = document.createElement("section");

skills.id = "skills";

skills.innerHTML = `
<div class="skills-container">

    <div class="skills-header">

        <p class="section-tag">MY SKILLS</p>

        <h2>Technologies I Use</h2>

        <p>
            My technology stack for building modern web applications.
        </p>

    </div>

    <div class="skills-grid">

        <div class="skill-card">
            <div class="skill-icon">🌐</div>
            <h3>HTML5</h3>
            <p>Semantic and accessible web structure.</p>
        </div>

        <div class="skill-card">
            <div class="skill-icon">🎨</div>
            <h3>CSS3</h3>
            <p>Responsive layouts, animations and modern UI.</p>
        </div>

        <div class="skill-card">
            <div class="skill-icon">⚡</div>
            <h3>JavaScript</h3>
            <p>Interactive and dynamic web applications.</p>
        </div>

        <div class="skill-card">
            <div class="skill-icon">🟢</div>
            <h3>Node.js</h3>
            <p>Fast backend development and REST APIs.</p>
        </div>

        <div class="skill-card">
            <div class="skill-icon">🚀</div>
            <h3>Express.js</h3>
            <p>Scalable backend architecture.</p>
        </div>

        <div class="skill-card">
            <div class="skill-icon">🗄️</div>
            <h3>Supabase</h3>
            <p>Authentication, database and storage.</p>
        </div>

    </div>

</div>
`;

document.getElementById("main-content").appendChild(skills);
