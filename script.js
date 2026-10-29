const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll("#navMenu a");

// Open and close the mobile menu
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    const isOpen = navMenu.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu after clicking a navigation link
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});