// Language toggle functionality
document.getElementById("language-toggle").addEventListener("click", function() {
    const isTamil = this.textContent === "தமிழ்";
    const elements = document.querySelectorAll("[data-en], [data-ta]");

    elements.forEach(element => {
        if (element.hasAttribute("data-en")) {
            if (isTamil) {
                element.textContent = element.getAttribute("data-ta");
            } else {
                element.textContent = element.getAttribute("data-en");
            }
        }
        
        if (element.hasAttribute("placeholder")) {
            if (isTamil) {
                element.setAttribute("placeholder", element.getAttribute("data-ta"));
            } else {
                element.setAttribute("placeholder", element.getAttribute("data-en"));
            }
        }
    });

    this.textContent = isTamil ? "English" : "தமிழ்";
});

// Toggle menu functionality
function toggleMenu() {
    const navList = document.getElementById("navList");
    if (navList.classList.contains("hidden")) {
        navList.classList.remove("hidden");
        navList.classList.add("slide-from-logo");
    } else {
        navList.classList.add("hidden");
        navList.classList.remove("slide-from-logo");
    }
}

// Ensure nav list is visible on page load
document.addEventListener("DOMContentLoaded", () => {
    const navList = document.getElementById("navList");
    navList.classList.remove("hidden"); // Remove hidden class initially
    navList.classList.add("slide-from-logo"); // Add animation class
});

// Add event listener to logo for toggling menu
document.querySelector(".logo").addEventListener("click", toggleMenu);

