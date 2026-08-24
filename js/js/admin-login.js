// ==========================================
// JOHNNY TEC. Dev
// Admin Login
// ==========================================

const ADMIN_PASSWORD = "Johnny@123"; // Change this later

const loginModal = document.createElement("div");

loginModal.id = "adminLogin";

loginModal.innerHTML = `

<div id="loginOverlay" class="login-overlay">

    <div class="login-box">

        <h2>Admin Login</h2>

        <p>Enter your password</p>

        <input
            type="password"
            id="adminPassword"
            placeholder="Password">

        <p id="loginError"></p>

        <div class="login-buttons">

            <button id="loginBtn">

                Login

            </button>

            <button id="cancelLogin">

                Cancel

            </button>

        </div>

    </div>

</div>

`;

document.body.appendChild(loginModal);

// Elements

const loginOverlay = document.getElementById("loginOverlay");

const passwordInput = document.getElementById("adminPassword");

const loginButton = document.getElementById("loginBtn");

const cancelButton = document.getElementById("cancelLogin");

const loginError = document.getElementById("loginError");

// Hide popup

loginOverlay.style.display = "none";

// Open Login

if (typeof adminToggle !== "undefined") {

    adminToggle.addEventListener("click", () => {

        loginOverlay.style.display = "flex";

        passwordInput.value = "";

        loginError.textContent = "";

        passwordInput.focus();

    });

}

// Login

function adminLogin() {

    if (passwordInput.value === ADMIN_PASSWORD) {

        loginOverlay.style.display = "none";

        adminSidebar.classList.add("active");

        adminOverlay.classList.add("active");

    } else {

        loginError.textContent = "Incorrect password.";

        passwordInput.value = "";

        passwordInput.focus();

    }

}

loginButton.addEventListener("click", adminLogin);

// Press Enter

passwordInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        adminLogin();

    }

});

// Cancel

cancelButton.addEventListener("click", () => {

    loginOverlay.style.display = "none";

});

// Close when clicking outside

loginOverlay.addEventListener("click", (event) => {

    if (event.target === loginOverlay) {

        loginOverlay.style.display = "none";

    }

});
