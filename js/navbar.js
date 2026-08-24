// ===========================
// BOTTOM NAVIGATION
// File: js/navbar.js
// ===========================

const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<div class="bottom-nav">

    <a href="index.html" class="nav-item active">
        <span class="icon">🏠</span>
        <span class="label">Home</span>
    </a>

    <a href="pages/about.html" class="nav-item">
        <span class="icon">👤</span>
        <span class="label">About</span>
    </a>

    <a href="pages/projects.html" class="nav-item">
        <span class="icon">💻</span>
        <span class="label">Projects</span>
    </a>

    <a href="pages/contact.html" class="nav-item">
        <span class="icon">📩</span>
        <span class="label">Contact</span>
    </a>

    <a href="pages/settings.html" class="nav-item">
        <span class="icon">⚙️</span>
        <span class="label">Settings</span>
    </a>

</div>
`;
