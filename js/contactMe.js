(function () {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init("user_bFRWWvQ1pmSB10ZlxSJWf");
})();

function sendMail() {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateFname() && validateLname() && validateEmail() && validatePhone() && validateMessage()) {
            emailjs.sendForm("contact_service", "contact_form", this)
                .then(function () {
                    console.log("SUCCESS");
                });
            document.getElementById("contact-form").reset();
            window.alert("Email sent!");
        }
        else if (!validateFname()) {
            alert("Your first name cannot be blank!")
        }
        else if (!validateLname()) {
            alert("Your last name cannot be blank!")
        }
        else if (!validateEmail()) {
            alert("You have entered an invalid email!")
        }
        else if (!validatePhone()) {
            alert("Your have entered an invalid phone number!")
        }
        else if (!validateMessage()) {
            alert("Your message cannot be blank!")
        }
    });

}
function validateFname() {
    if (document.getElementById("user_fname").value != "") {
        return true;
    }
    return false;
}

function validateLname() {
    if (document.getElementById("user_lname").value != "") {
        return true;
    }
    return false;
}

function validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("user_email").value)) {
        return true;
    }
    return false;
}

function validatePhone() {
    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("user_phone").value)) {
        return true;
    }
    return false;
}

function validateMessage() {
    if (document.getElementById("user_message").value != "") {
        return true;
    }
    return false;
}
