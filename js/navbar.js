const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<div class="logo">
    <a href="#">JOHNNY TEC<span>.</span>Dev</a>
</div>

<button class="menu-btn" id="menu-btn">
    ☰
</button>

<ul class="nav-links" id="nav-links">
    <li><a href="#hero" class="active">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>
`;

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");

        document
            .querySelectorAll(".nav-links a")
            .forEach(item => item.classList.remove("active"));

        link.classList.add("active");
    });
});

window.addEventListener("scroll", () => {
    const header = document.getElementById("header");

    if (window.scrollY > 20) {
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "none";
    }
});
