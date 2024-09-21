$(function () {
  "use strict";

  $(".mobile-search-button").on("click", function () {
    $(".searchbar").addClass("full-search-bar");
  }),
    $(".search-close-icon").on("click", function () {
      $(".searchbar").removeClass("full-search-bar");
    });

  //Side nav

  $(function () {
    $("#sidenav").metisMenu();
  });

  // Acive Menu

  $(function () {
    for (
      var e = window.location,
        o = $(".metismenu li a")
          .filter(function () {
            return this.href == e;
          })
          .addClass("")
          .parent()
          .addClass("mm-active");
      o.is("li");

    )
      o = o.parent("").addClass("mm-show").parent("").addClass("mm-active");
  });
});

function toggleDetails(header) {
  const extraDetails = header.nextElementSibling.nextElementSibling; // Select the .extra-details div
  const dropdownIcon = header.querySelector(".dropdown-icon");

  if (extraDetails.style.display === "none") {
    extraDetails.style.display = "block";
    dropdownIcon.innerHTML = "&#9652;"; // Change icon to up arrow
    header.classList.add("active");
  } else {
    extraDetails.style.display = "none";
    dropdownIcon.innerHTML = "&#9662;"; // Change icon back to down arrow
    header.classList.remove("active");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.link-item');
  const sections = document.querySelectorAll('.section');

  links.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();

          const targetSection = this.getAttribute('data-section');
          
          if (targetSection === 'all') {
              // Show all sections
              sections.forEach(section => section.style.display = 'block');
          } else if (targetSection) {
              // Hide all sections first
              sections.forEach(section => section.style.display = 'none');
              // Show the clicked section
              document.getElementById(targetSection).style.display = 'block';
          }
      });
  });

  // Initially hide all sections except the first one (optional)
  sections.forEach(section => section.style.display = 'none');
});

