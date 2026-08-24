// ===================================
// JOHNNY TEC. Dev
// Main App
// ===================================

const pages = document.querySelectorAll(".page");
const navItems = document.querySelectorAll(".nav-item");

// Show selected page
function showPage(pageId) {

    // Hide all pages
    pages.forEach(page => {
        page.classList.remove("active");
    });

    // Remove active nav
    navItems.forEach(item => {
        item.classList.remove("active");
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    // Activate selected nav
    const activeNav = document.querySelector(
        `.nav-item[data-page="${pageId}"]`
    );

    if (activeNav) {
        activeNav.classList.add("active");
    }

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// Navigation Events
navItems.forEach(item => {

    item.addEventListener("click", () => {

        const page = item.dataset.page;

        showPage(page);

    });

});

// Default Page
showPage("home");
