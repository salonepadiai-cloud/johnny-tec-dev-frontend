// ==========================================
// ABOUT PAGE
// File: js/about.js
// ==========================================

const about = document.getElementById("about");

about.innerHTML = `

<section class="about-page">

    <div class="container">

        <!-- Header -->

        <div class="about-header">

            <h1>About Me</h1>

            <p>
                Get to know me, my journey and what I'm currently learning.
            </p>

        </div>

        <div class="about-grid">

            <!-- ===========================
                 LEFT COLUMN
            ============================ -->

            <div class="left-column">

                <!-- Profile Card -->

                <div class="profile-card">

                    <img
                        src="assets/images/profile.jpg"
                        alt="JOHNNY TEC. Dev"
                        class="profile-image">

                    <h2>JOHNNY TEC. Dev</h2>

                    <h4>Aspiring Full Stack Developer</h4>

                    <p>

                        Hi, I'm Johnny from Sierra Leone.

                        I'm currently learning modern web development by
                        building real projects with HTML, CSS and JavaScript.

                        My goal is to become a professional Full Stack
                        Developer by learning something new every day.

                    </p>

                    <div class="profile-info">

                        <div class="info">

                            <span>📍</span>

                            <p>Sierra Leone</p>

                        </div>

                        <div class="info">

                            <span>💻</span>

                            <p>Learning Every Day</p>

                        </div>

                        <div class="info">

                            <span>📚</span>

                            <p>Building Personal Projects</p>

                        </div>

                        <div class="info">

                            <span>🚀</span>

                            <p>Future Full Stack Developer</p>

                        </div>

                    </div>

                    <div class="profile-buttons">

                        <button
                            class="btn btn-primary"
                            onclick="showPage('projects')">

                            View My Projects

                        </button>

                        <button
                            class="btn btn-outline"
                            onclick="showPage('contact')">

                            Contact Me

                        </button>

                    </div>

                </div>

                <!-- Quick Facts -->

                <div class="quick-facts">

                    <h3>Quick Facts</h3>

                    <div class="fact">

                        <span>🔥</span>

                        <p>Passionate About Programming</p>

                    </div>

                    <div class="fact">

                        <span>💻</span>

                        <p>Building Real Projects</p>

                    </div>

                    <div class="fact">

                        <span>📚</span>

                        <p>Learning Every Day</p>

                    </div>

                    <div class="fact">

                        <span>🎯</span>

                        <p>Working Towards Becoming Full Stack</p>

                    </div>

                </div>

            </div>

            <!-- ===========================
                 RIGHT COLUMN
            ============================ -->

            <div class="right-column">

                <!-- Journey -->

                <div class="section-card">

                    <h2>My Journey</h2>

                    <div class="timeline">

                        <div class="timeline-item">

                            <span class="year">

                                2025

                            </span>

                            <h3>

                                Started Programming

                            </h3>

                            <p>

                                Began learning HTML, CSS and JavaScript while
                                creating simple projects.

                            </p>

                        </div>

                        <div class="timeline-item">

                            <span class="year">

                                Present

                            </span>

                            <h3>

                                Learning Full Stack Development

                            </h3>

                            <p>

                                Learning Node.js, Express and databases while
                                building my portfolio and practice projects.

                            </p>

                        </div>

                        <div class="timeline-item">

                            <span class="year">

                                Future

                            </span>

                            <h3>

                                Professional Developer

                            </h3>

                            <p>

                                Continue improving my skills and build useful
                                applications for people around the world.

                            </p>

                        </div>

                    </div>

                </div>

                <!-- Skills -->

                <div class="section-card">

                    <h2>Technologies I'm Learning</h2>

                    <div class="skills">

                        <span>HTML5</span>

                        <span>CSS3</span>

                        <span>JavaScript</span>

                        <span>Git</span>

                        <span>GitHub</span>

                        <span>Responsive Design</span>

                        <span>Node.js</span>

                        <span>Express.js</span>

                    </div>

                </div>

                <!-- Current Work -->

                <div class="section-card">

                    <h2>What I'm Working On</h2>

                    <div class="experience">

                        <div class="experience-card">

                            <h3>Portfolio Website</h3>

                            <p>

                                Building my personal portfolio to showcase my
                                learning journey and future projects.

                            </p>

                        </div>

                        <div class="experience-card">

                            <h3>Learning Projects</h3>

                            <p>

                                Creating small projects to improve my coding
                                and problem-solving skills.

                            </p>

                        </div>

                        <div class="experience-card">

                            <h3>Future Goals</h3>

                            <p>

                                Learn backend development, databases and build
                                complete full stack applications.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

`;
