// ===========================
// CONTACT
// ===========================

const contact = document.createElement("section");

contact.id = "contact";

contact.innerHTML = `
<div class="contact-container">

    <div class="contact-header">
        <p class="section-tag">CONTACT</p>
        <h2>Let's Work Together</h2>
        <p>Send me a message and I'll get back to you.</p>
    </div>

    <div class="contact-content">

        <div class="contact-info">

            <h3>Contact Information</h3>

            <div class="contact-item">
                <h4>Email</h4>
                <p>your@email.com</p>
            </div>

            <div class="contact-item">
                <h4>GitHub</h4>
                <a href="#" target="_blank">
                    github.com/yourusername
                </a>
            </div>

            <div class="contact-item">
                <h4>Location</h4>
                <p>Sierra Leone</p>
            </div>

        </div>

        <form id="contactForm" class="contact-form">

            <div class="form-group">
                <label>Full Name</label>
                <input
                    type="text"
                    id="name"
                    required>
            </div>

            <div class="form-group">
                <label>Email Address</label>
                <input
                    type="email"
                    id="email"
                    required>
            </div>

            <div class="form-group">
                <label>Subject</label>
                <input
                    type="text"
                    id="subject"
                    required>
            </div>

            <div class="form-group">
                <label>Message</label>
                <textarea
                    id="message"
                    required></textarea>
            </div>

            <button type="submit">
                Send Message
            </button>

            <p id="form-message"></p>

        </form>

    </div>

</div>
`;

document.getElementById("main-content").appendChild(contact);

// ===========================
// FORM SUBMIT
// ===========================

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const payload = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        subject: document.getElementById("subject").value.trim(),
        message: document.getElementById("message").value.trim()
    };

    const status = document.getElementById("form-message");

    status.textContent = "Sending...";

    try{

        const response = await fetch(
            "http://localhost:5000/api/contact",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(payload)
            }
        );

        const data = await response.json();

        if(response.ok){

            status.style.color="green";
            status.textContent=data.message;

            form.reset();

        }else{

            status.style.color="red";
            status.textContent=data.message;

        }

    }catch(error){

        status.style.color="red";
        status.textContent="Unable to connect to server.";

    }

});
