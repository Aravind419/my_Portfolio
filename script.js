const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Show the custom alert message in the center of the screen
      const customAlert = document.getElementById("customAlert");
      customAlert.style.display = "block";

      // Hide the alert after 3 seconds
      setTimeout(function () {
        customAlert.style.display = "none";
      }, 3000);
    });