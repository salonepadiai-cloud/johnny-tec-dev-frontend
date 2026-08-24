const hero = document.getElementById("hero");

hero.innerHTML = `
<section class="hero-container">

    <div class="hero-content">

        <p class="hero-tag">WELCOME TO MY PORTFOLIO</p>

        <h1>
            JOHNNY <span>TEC.</span> Dev
        </h1>

        <h2>
            Full Stack Developer & Software Engineer
        </h2>

        <p class="hero-description">
            I build fast, modern and scalable web applications with clean code,
            powerful APIs and beautiful user experiences.
        </p>

        <div class="hero-buttons">
            <a href="#projects" class="btn-primary">
                View My Work
            </a>

            <a href="#contact" class="btn-secondary">
                Hire Me
            </a>
        </div>

        <div class="hero-stats">

            <div class="stat">
                <h3>20+</h3>
                <span>Projects</span>
            </div>

            <div class="stat">
                <h3>5+</h3>
                <span>Technologies</span>
            </div>

            <div class="stat">
                <h3>100%</h3>
                <span>Dedication</span>
            </div>

        </div>

    </div>

    <div class="hero-image">

        <div class="profile-card">

            <img src="assets/images/profile.png" alt="JOHNNY TEC Dev">

        </div>

    </div>

</section>
`;
