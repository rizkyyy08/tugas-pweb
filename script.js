function toggleMenu() {
    var menuContent = document.getElementById("menuContent");
    if (menuContent.style.display === "block") {
        menuContent.style.display = "none";
    } else {
        menuContent.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("zoomed");
});
