// ===================================
// JOHNNY TEC. Dev
// Bottom Navigation
// ===================================

const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<div class="bottom-nav">

    <div class="nav-item active" data-page="home">
        <div class="nav-icon">🏠</div>
        <div class="nav-label">Home</div>
    </div>

    <div class="nav-item" data-page="about">
        <div class="nav-icon">👤</div>
        <div class="nav-label">About</div>
    </div>

    <div class="nav-item" data-page="projects">
        <div class="nav-icon">💻</div>
        <div class="nav-label">Projects</div>
    </div>

    <div class="nav-item" data-page="contact">
        <div class="nav-icon">📩</div>
        <div class="nav-label">Contact</div>
    </div>

</div>
`;
