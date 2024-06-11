window.addEventListener("load", (e) => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    //   Page Loader
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
      document.querySelector(".page-loader").style.display = "none";
    }, 600);
  });
  
  // Toggle Navbar
  const navToggler = document.querySelector(".nav-toggler");
  navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
  });
  function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
  }
  function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
  }
  
  // Active Section
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
      //   Activate the overlay to prevent multiple clicks
      document.querySelector(".overlay").classList.add("active");
      navToggler.classList.add("hide");
      if (e.target.classList.contains("nav-item")) {
        toggleNavbar();
      } else {
        hideSection();
        document.body.classList.add("hide-scrolling");
      }
      setTimeout(() => {
        document
          .querySelector("section.active")
          .classList.remove("active", "fade-out");
        document.querySelector(e.target.hash).classList.add("active");
        window.scrollTo(0, 0);
        document.body.classList.remove("hide-scrolling");
        navToggler.classList.remove("hide");
        document.querySelector(".overlay").classList.remove("active");
      }, 500);
    }
  });
  
  // About Tabs
  const tabsContainer = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector(".about-section");
  
  tabsContainer.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("tab-item") &&
      !e.target.classList.contains("active")
    ) {
      tabsContainer.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      const target = e.target.getAttribute("data-target");
      aboutSection
        .querySelector(".tab-content.active")
        .classList.remove("active");
      aboutSection.querySelector(target).classList.add("active");
    }
  });
  
  // Portfolio Item Details
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
      togglePortfolioPopup();
      document.querySelector(".portfolio-popup").scrollTo(0, 0);
      portfolioItemDetails(e.target.parentElement);
    }
  });
  function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
  }
  document
    .querySelector(".pp-close")
    .addEventListener("click", togglePortfolioPopup);
  
  // Hide popup when click outside of it
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
      togglePortfolioPopup();
    }
  });
  
  function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
      ".portfolio-item-thumbnail img"
    ).src;
  
    document.querySelector(".pp-header h3").innerHTML =
      portfolioItem.querySelector(".portfolio-item-title").innerHTML;
  
    document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
      ".portfolio-item-details"
    ).innerHTML;
  }
  

//

// document.addEventListener("DOMContentLoaded", () => {
//     const circlesContainer = document.querySelector(".animated-circles");
//     const numberOfCircles = 10; // Adjust the number of circles
//     const circles = [];

//     for (let i = 0; i < numberOfCircles; i++) {
//         const circle = document.createElement("div");
//         circle.classList.add("circle");
        
//         // Randomly set the size and position
//         const size = Math.random() * 50 + 20; // Size between 20px and 70px
//         const left = Math.random() * 100; // Position between 0% and 100%
//         const top = Math.random() * 100; // Position between 0% and 100%
        
//         circle.style.width = `${size}px`;
//         circle.style.height = `${size}px`;
//         circle.style.left = `${left}%`;
//         circle.style.top = `${top}%`;
        
//         // Set random animation direction
//         const dx = (Math.random() - 0.5) * 200; // Random value between -100 and 100
//         const dy = (Math.random() - 0.5) * 200; // Random value between -100 and 100
//         circle.style.setProperty('--dx', dx);
//         circle.style.setProperty('--dy', dy);

//         circle.style.animation = `move ${Math.random() * 5 + 3}s infinite alternate`;

//         // Store initial position
//         circle.dataset.initialLeft = left;
//         circle.dataset.initialTop = top;

//         circlesContainer.appendChild(circle);
//         circles.push(circle);
//     }

//     // Add event listener for user click
//     document.addEventListener('click', (e) => {
//         interactWithCircles(e.clientX, e.clientY);
//     });

//     function interactWithCircles(clickX, clickY) {
//         circles.forEach(circle => {
//             // Calculate distance and direction to click point
//             const rect = circle.getBoundingClientRect();
//             const circleCenterX = rect.left + rect.width / 2;
//             const circleCenterY = rect.top + rect.height / 2;
            
//             const deltaX = clickX - circleCenterX;
//             const deltaY = clickY - circleCenterY;

//             // Move circle to click point
//             circle.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.2)`;
//             circle.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.2)`;
            
//             // Return to initial position after a delay
//             setTimeout(() => {
//                 circle.style.transform = ``;
//                 circle.style.backgroundColor = `rgba(255, 255, 255, 0.2)`;
//             }, 1000);
//         });
//     }
// });


document.addEventListener("DOMContentLoaded", () => {
    const circlesContainer = document.querySelector(".animated-circles");
    const numberOfCircles = 10; // Adjust the number of circles
    const circles = [];

    for (let i = 0; i < numberOfCircles; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        
        // Randomly set the size and position
        const size = Math.random() * 30 + 20; // Size between 20px and 50px
        const left = Math.random() * 100; // Position between 0% and 100%
        const top = Math.random() * 100; // Position between 0% and 100%
        
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${left}%`;
        circle.style.top = `${top}%`;
        
        // Set random animation direction
        const dx = (Math.random() - 0.5) * 200; // Random value between -100 and 100
        const dy = (Math.random() - 0.5) * 200; // Random value between -100 and 100
        circle.style.setProperty('--dx', dx);
        circle.style.setProperty('--dy', dy);

        circle.style.animation = `move ${Math.random() * 5 + 3}s infinite alternate, blob ${Math.random() * 6 + 4}s infinite`;

        // Store initial position
        circle.dataset.initialLeft = left;
        circle.dataset.initialTop = top;

        circlesContainer.appendChild(circle);
        circles.push(circle);
    }

    // Add event listener for user click
    document.addEventListener('click', (e) => {
        interactWithCircles(e.clientX, e.clientY);
    });

    function interactWithCircles(clickX, clickY) {
        circles.forEach(circle => {
            // Calculate distance and direction to click point
            const rect = circle.getBoundingClientRect();
            const circleCenterX = rect.left + rect.width / 2;
            const circleCenterY = rect.top + rect.height / 2;
            
            const deltaX = clickX - circleCenterX;
            const deltaY = clickY - circleCenterY;

            // Move circle to click point
            circle.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.2)`;
            circle.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.2)`;
            
            // Return to initial position after a delay
            setTimeout(() => {
                circle.style.transform = ``;
                circle.style.backgroundColor = `rgba(255, 255, 255, 0.2)`;
            }, 1000);
        });
    }
});
