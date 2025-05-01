// This script implements smooth scrolling for navigation links on the page.

// Select all anchor (<a>) elements within the <nav> element.
const navLinks = document.querySelectorAll('nav a');

// Iterate over each navigation link.
navLinks.forEach(anchor => {
    // Add a click event listener to the current anchor element.
    anchor.addEventListener('click', function (event) {
        // 'event' is the click event object.

        // Prevent the default behavior of the anchor tag.
        // The default behavior is to immediately jump to the target section.
        event.preventDefault();

        // 'this' refers to the specific anchor element that was clicked.
        // Get the value of the 'href' attribute of the clicked anchor.
        // The 'href' attribute contains the ID of the target section (e.g., "#about").
        const targetId = this.getAttribute('href');

        // Use document.querySelector() to find the HTML element with the matching ID.
        const targetElement = document.querySelector(targetId);

        // Check if the target element exists on the page.
        if (targetElement) {
            // Use the 'scrollIntoView()' method to smoothly scroll the target element into the viewport.
            // The 'behavior: 'smooth'' option enables smooth scrolling animation.
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            // If the target element is not found (e.g., a broken link),
            // you might want to add some error handling or logging here.
            console.error(`Target element with ID '${targetId}' not found.`);
        }
    });
});

 // Show the button when user scrolls down 100px
 window.onscroll = function () {
    const btn = document.getElementById("backToTopBtn");
    btn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
      ? "block" : "none";
};

  // Scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}