// ==========================
// CONTACT PAGE
// ==========================

const contact = document.getElementById("contact");

contact.innerHTML = `
<div class="container">

    <h1>Contact Me</h1>

    <form id="contactForm">

        <input
        type="text"
        id="name"
        placeholder="Full Name"
        required>

        <input
        type="email"
        id="email"
        placeholder="Email Address"
        required>

        <textarea
        id="message"
        placeholder="Your Message"
        required></textarea>

        <button
        class="btn btn-primary"
        type="submit">

            Send Message

        </button>

    </form>

</div>
`;

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const data={

        name:document.getElementById("name").value,

        email:document.getElementById("email").value,

        message:document.getElementById("message").value

    };

    console.log(data);

    // Backend API will be connected later

});
