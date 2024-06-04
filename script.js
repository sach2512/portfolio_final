document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.fa-bars');
    const closeIcon = document.querySelector('.fa-times');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('mobile-menu');
        if (navbar.classList.contains('mobile-menu')) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });

    closeIcon.addEventListener('click', function() {
        navbar.classList.remove('mobile-menu');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    });
});


document.addEventListener("DOMContentLoaded", function() {

    // Sticky header
    window.addEventListener("scroll", function() {
        var headerArea = document.querySelector(".header-area");
        if (window.scrollY > 1) {
            headerArea.classList.add("sticky");
        } else {
            headerArea.classList.remove("sticky");
        }

        // Update the active section in the header
        updateActiveSection();
    });

    // Handle click on header links
    var headerLinks = document.querySelectorAll(".header ul li a");
    headerLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            var target = this.getAttribute("href");

            if (document.querySelector(target).classList.contains("active-section")) {
                return;
            }

            if (target === "#home") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                var offset = document.querySelector(target).getBoundingClientRect().top + window.scrollY - 40;
                window.scrollTo({
                    top: offset,
                    behavior: "smooth"
                });
            }

            headerLinks.forEach(function(link) {
                link.classList.remove("active");
            });
            this.classList.add("active");
        });
    });

    // Initial content revealing
    ScrollReveal({
        distance: "100px",
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", {
        origin: "left"
    });
    ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", {
        origin: "right"
    });
    ScrollReveal().reveal(".project-title, .contact-title", {
        origin: "top"
    });
    ScrollReveal().reveal(".projects, .contact", {
        origin: "bottom"
    });

});

function updateActiveSection() {
    // Add your logic to update the active section in the header
}
