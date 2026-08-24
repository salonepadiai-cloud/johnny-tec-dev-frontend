const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<div class="logo">
    JOHNNY TEC. Dev
</div>

<ul class="nav-links">
    <li><a href="#hero" class="active">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>

<button class="menu-btn">
    ☰
</button>
`;
