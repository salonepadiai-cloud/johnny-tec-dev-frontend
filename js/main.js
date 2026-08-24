// ===================================
// JOHNNY TEC. Dev
// Main App
// ===================================

// -------------------------------
// PAGE NAVIGATION
// -------------------------------

const pages = document.querySelectorAll(".page");
const navItems = document.querySelectorAll(".nav-item");

function showPage(pageId) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    navItems.forEach(item => {
        item.classList.remove("active");
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active");
    }

    const activeNav = document.querySelector(
        `.nav-item[data-page="${pageId}"]`
    );

    if (activeNav) {
        activeNav.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

navItems.forEach(item => {

    item.addEventListener("click", () => {

        showPage(item.dataset.page);

    });

});

showPage("home");

// -------------------------------
// ADMIN SIDEBAR
// -------------------------------

const adminToggle = document.getElementById("adminToggle");
const adminSidebar = document.getElementById("adminSidebar");
const adminOverlay = document.getElementById("adminOverlay");

// Open Sidebar
if (adminToggle) {

    adminToggle.addEventListener("click", () => {

        adminSidebar.classList.add("active");
        adminOverlay.classList.add("active");

    });

}

// Close Sidebar
if (adminOverlay) {

    adminOverlay.addEventListener("click", () => {

        adminSidebar.classList.remove("active");
        adminOverlay.classList.remove("active");

    });

}

// -------------------------------
// ADMIN BUTTONS
// -------------------------------

const editProfileBtn = document.getElementById("editProfileBtn");
const newPostBtn = document.getElementById("newPostBtn");
const projectsBtn = document.getElementById("projectsBtn");
const messagesBtn = document.getElementById("messagesBtn");
const settingsBtn = document.getElementById("settingsBtn");

if (editProfileBtn) {

    editProfileBtn.addEventListener("click", () => {

        alert("Edit Profile Panel (Coming Soon)");

    });

}

if (newPostBtn) {

    newPostBtn.addEventListener("click", () => {

        alert("New Post Panel (Coming Soon)");

    });

}

if (projectsBtn) {

    projectsBtn.addEventListener("click", () => {

        showPage("projects");

        adminSidebar.classList.remove("active");
        adminOverlay.classList.remove("active");

    });

}

if (messagesBtn) {

    messagesBtn.addEventListener("click", () => {

        alert("Messages Panel (Coming Soon)");

    });

}

if (settingsBtn) {

    settingsBtn.addEventListener("click", () => {

        alert("Settings Panel (Coming Soon)");

    });
}
