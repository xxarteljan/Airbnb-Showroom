// Function to show selected property details
function showDetails(propertyId) {
    // Hide the main property list
    document.getElementById("propertyList").style.display = "none";
    
    // Display the selected property details
    document.getElementById(propertyId).style.display = "block";
}

// Function to go back to the main property list
function hideDetails() {
    // Show the main property list
    document.getElementById("propertyList").style.display = "flex";

    // Hide all property details
    const details = document.getElementsByClassName("property-details");
    for (let i = 0; i < details.length; i++) {
        details[i].style.display = "none";
    }
}
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} // Reset to first slide
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

// Add functions for the next and previous buttons
function changeSlide(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
}
