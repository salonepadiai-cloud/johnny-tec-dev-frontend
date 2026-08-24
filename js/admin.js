// ==========================================
// ADMIN SIDEBAR
// ==========================================

const admin = document.createElement("div");

admin.id = "admin";

admin.innerHTML = `

<div id="adminOverlay"></div>

<div id="adminSidebar">

    <div class="admin-header">

        <h2>JOHNNY TEC. Dev</h2>

        <p>Admin Dashboard</p>

    </div>

    <div class="admin-menu">

        <button class="admin-btn" id="editProfileBtn">

            👤 Edit Profile

        </button>

        <button class="admin-btn" id="newPostBtn">

            📝 New Post

        </button>

        <button class="admin-btn" id="projectsBtn">

            💻 Projects

        </button>

        <button class="admin-btn" id="messagesBtn">

            📩 Messages

        </button>

        <button class="admin-btn" id="settingsBtn">

            ⚙ Settings

        </button>

        <button class="admin-btn logout">

            🚪 Logout

        </button>

    </div>

</div>

<button id="adminToggle">

🔒

</button>

`;

document.body.appendChild(admin);
