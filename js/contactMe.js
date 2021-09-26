(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init("user_bFRWWvQ1pmSB10ZlxSJWf");
})();

function sendMail() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm("contact_service", "contact_form", this)
        .then(function() {
            console.log("SUCCESS");
        });
        document.getElementById("contact-form").reset();
        window.alert("Email sent!");
    });

}