// -----------------Declire Variables------------------
const menuIcon = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".sidebar");
const largeContainer = document.querySelector(".container");

// -------------------------Handle Listener---------------------------
menuIcon.addEventListener("click", () => {
    sideBar.classList.toggle("small-sidebar");
    largeContainer.classList.toggle("large-container");
});