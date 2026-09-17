/* =========================================
   PAW HAVEN PET SHOP
   JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("open");

        if (navLinks.classList.contains("open")) {

            menuBtn.textContent = "✕";
            menuBtn.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

        } else {

            menuBtn.textContent = "☰";
            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });


    /* Close menu when a link is clicked */

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeBtn = document.getElementById("themeBtn");


function updateThemeButton() {

    if (!themeBtn) {
        return;
    }

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.textContent = "☀️";

        themeBtn.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    } else {

        themeBtn.textContent = "🌙";

        themeBtn.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    }

}


/* Load saved theme */

const savedTheme = localStorage.getItem("pawHavenTheme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

}


updateThemeButton();


/* Change theme */

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");


        if (
            document.body.classList.contains("dark-mode")
        ) {

            localStorage.setItem(
                "pawHavenTheme",
                "dark"
            );

        } else {

            localStorage.setItem(
                "pawHavenTheme",
                "light"
            );

        }


        updateThemeButton();

    });

}


/* =========================================
   CONTACT FORM VALIDATION
========================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* Get fields */

            const name =
                document.getElementById("name");

            const email =
                document.getElementById("email");

            const message =
                document.getElementById("message");


            /* Get error elements */

            const nameError =
                document.getElementById("nameError");

            const emailError =
                document.getElementById("emailError");

            const messageError =
                document.getElementById("messageError");


            /* Success message */

            const successMessage =
                document.getElementById(
                    "successMessage"
                );


            /* Reset errors */

            nameError.textContent = "";
            emailError.textContent = "";
            messageError.textContent = "";

            name.parentElement.classList.remove("error");
            email.parentElement.classList.remove("error");
            message.parentElement.classList.remove("error");

            successMessage.classList.remove("show");


            let isValid = true;


            /* =====================================
               NAME VALIDATION
            ===================================== */

            const nameValue =
                name.value.trim();


            if (nameValue === "") {

                nameError.textContent =
                    "Name is required.";

                name.parentElement.classList.add(
                    "error"
                );

                isValid = false;

            } else if (nameValue.length < 3) {

                nameError.textContent =
                    "Name must be at least 3 characters.";

                name.parentElement.classList.add(
                    "error"
                );

                isValid = false;

            }


            /* =====================================
               EMAIL VALIDATION
            ===================================== */

            const emailValue =
                email.value.trim();


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (emailValue === "") {

                emailError.textContent =
                    "Email is required.";

                email.parentElement.classList.add(
                    "error"
                );

                isValid = false;

            } else if (
                !emailPattern.test(emailValue)
            ) {

                emailError.textContent =
                    "Please enter a valid email address.";

                email.parentElement.classList.add(
                    "error"
                );

                isValid = false;

            }


            /* =====================================
               MESSAGE VALIDATION
            ===================================== */

            const messageValue =
                message.value.trim();


            if (messageValue === "") {

                messageError.textContent =
                    "Message is required.";

                message.parentElement.classList.add(
                    "error"
                );

                isValid = false;

            } else if (messageValue.length < 10) {

                messageError.textContent =
                    "Message must be at least 10 characters.";

                message.parentElement.classList.add(
                    "error"
                );

                isValid = false;

            }


            /* =====================================
               SUCCESS
            ===================================== */

            if (isValid) {

                successMessage.classList.add("show");

                contactForm.reset();


                /* Automatically hide after 5 seconds */

                setTimeout(function () {

                    successMessage.classList.remove(
                        "show"
                    );

                }, 5000);

            }

        }
    );

}


/* =========================================
   REMOVE ERROR WHEN USER STARTS TYPING
========================================= */

const formInputs =
    document.querySelectorAll(
        "#contactForm input, #contactForm textarea"
    );


formInputs.forEach(function (input) {

    input.addEventListener("input", function () {

        input.parentElement.classList.remove(
            "error"
        );

        const errorElement =
            input.parentElement.querySelector(
                ".error-message"
            );

        if (errorElement) {

            errorElement.textContent = "";

        }

    });

});


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}