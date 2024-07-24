// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Get the sidebar element
  const sidebar = document.getElementById("sidebar");

  // Add a click event listener to the sidebar
  sidebar.addEventListener("click", function (event) {
    // Check if the clicked element is a product header
    const header = event.target.closest(".product-header");
    if (header) {
      // Get the submenu and icon elements
      const submenu = header.nextElementSibling;
      const icon = header.querySelector(".arrow-icon");

      // Toggle the submenu visibility
      if (submenu.style.display === "none" || submenu.style.display === "") {
        // Show the submenu
        submenu.style.display = "block";
        // Change the icon to a down arrow
        icon.classList.remove("fa-chevron-right");
        icon.classList.add("fa-chevron-down");
      } else {
        // Hide the submenu
        submenu.style.display = "none";
        // Change the icon to a right arrow
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-right");
      }

      // Prevent the click from bubbling up to parent elements
      event.stopPropagation();
    }
  });

  // Initially hide all submenus
  const submenus = sidebar.querySelectorAll(".collapse");
  submenus.forEach((submenu) => {
    submenu.style.display = "none";
  });
});

// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", (event) => {
  // Get the offcanvas element
  const offcanvasElement = document.querySelector(".offcanvas");

  // Add event listener for when the offcanvas is shown
  offcanvasElement.addEventListener("show.bs.offcanvas", function () {
    // Add the 'offcanvas-open' class to the body
    document.body.classList.add("offcanvas-open");
  });

  // Add event listener for when the offcanvas is hidden
  offcanvasElement.addEventListener("hide.bs.offcanvas", function () {
    // Remove the 'offcanvas-open' class from the body
    document.body.classList.remove("offcanvas-open");
  });
});
