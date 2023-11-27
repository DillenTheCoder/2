// Get all section and text elements
const sectionElements = document.querySelectorAll(".slide-in-section");
const textElements = document.querySelectorAll(".text-to-slide");
const logosSection = document.getElementById("logosSection");
const logosSlide = document.querySelector(".logos-slide");

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScroll() {
    sectionElements.forEach((section, index) => {
        const textElement = textElements[index];
        if (isElementInViewport(section)) {
            textElement.classList.add("show");
        } else {
            textElement.classList.remove("show");
        }
    });

    // Check if logos section is in the viewport
    if (isElementInViewport(logosSection)) {
        startLogosAnimation();
    } else {
        stopLogosAnimation();
    }
}

// Function to start the logos animation
function startLogosAnimation() {
    logosSlide.style.animationPlayState = "running";
}

// Function to stop the logos animation
function stopLogosAnimation() {
    logosSlide.style.animationPlayState = "paused";
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// Call the function on page load to handle the initial state
handleScroll();




