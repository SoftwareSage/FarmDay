// script.js
function toggleNavList() {
    var navList = document.getElementById("navList");
    navList.classList.toggle("hidden");
}

// Add event listener to logo
document.querySelector(".logo").addEventListener("click", toggleNavList);
