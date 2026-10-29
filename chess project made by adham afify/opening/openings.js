// ==============================
// 1. Mobile navigation menu
// ==============================

// Get the menu button and the navigation links from HTML.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open or close the menu when the button is clicked.
menuToggle.addEventListener("click", function () {
    // Add the "open" class if the menu is closed,
    // or remove it if the menu is already open.
    const isOpen = navLinks.classList.toggle("open");

    // Update the accessibility attribute to reflect the menu state.
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Change the button symbol depending on the menu state.
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after clicking a navigation link.
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// ==============================
// 2. Automatic copyright year
// ==============================

// Find the element reserved for the year in the footer.
const currentYear = document.getElementById("currentYear");

// Display the current year automatically instead of typing it manually.
currentYear.textContent = new Date().getFullYear();