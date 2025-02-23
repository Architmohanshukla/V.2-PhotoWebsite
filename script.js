/* Reset default margin and padding */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, sans-serif;
    background-color: #000000; /* Black background */
    color: #fff; /* White text */
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
.house-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 80px;
    height: 80px;
    cursor: pointer;
    overflow: hidden; /* Hide overflow for smoke effect */
    z-index: 1000; /* Ensure house is above other content */
}

.house {
    width: 100%;
    height: auto;
}

.smoke {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    background-image: url('smoke.png'); /* Smoke effect */
    animation: smokeAnimation 5s linear infinite; /* Smoke animation */
}

@keyframes smokeAnimation {
    from { opacity: 0; transform: translateY(0) scale(0.8); }
    to { opacity: 1; transform: translateY(-50px) scale(1.2); }
}

.birds {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('birds.png'); /* Birds background image */
    animation: birdsAnimation 30s linear infinite; /* Birds animation */
}

@keyframes birdsAnimation {
    from { background-position: 0 0; }
    to { background-position: 100% 0; }
}
header {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative; /* Needed for stacking context */
}

h1 {
    font-family: Impact, Haettenschweiler, 'Franklin Gothic Bold', Charcoal, sans-serif;
    font-size: 200px;
    text-transform: uppercase;
    letter-spacing: 4px;
    background-image: url("https://wallpaperaccess.com/full/90977.jpg"); /* Replace with your image path */
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text; /* Clip the background to the text */
    color: transparent; /* Make text transparent */
    font-weight: bolder;
    position: relative;
}
h2{
    font-family: Impact, Haettenschweiler, 'Franklin Gothic Bold', Charcoal, sans-serif;
    font-size: 200px;
    text-transform: uppercase;
    letter-spacing: 4px;
    background-image: url("https://igdcofficial.com/wp-content/uploads/2016/08/Night-Light-Painting-Photography-Tips-2-1024x683.jpg"); /* Replace with your image path */
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text; /* Clip the background to the text */
    color: transparent; /* Make text transparent */
    font-weight: bolder;
    position: relative;
}
b{
    font-family: Impact, Haettenschweiler, 'Franklin Gothic Bold', Charcoal, sans-serif;
font-size: 200px;
text-transform: uppercase;
letter-spacing: 4px;
background-image: url("file:///Y:/WebsiteUpdate/portraits/portrait_dog.jpg"); /* Corrected file path */
background-size: cover;
background-clip: text;
-webkit-background-clip: text; /* Clip the background to the text */
color: transparent; /* Make text transparent */
font-weight: bolder;
position: relative;

}

h3 {
    font-size: 30px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    color: rgb(173, 143, 189);
    margin:  .5em;
    padding-block:  1.5em;
}

.gallery {
    margin-left: 200px;
    margin-top: 80px;
    display: flex;
    grid-template-columns: repeat(3, 1fr); /* Three photos in each column */
    gap: 1px; /* Gap between photos */
    justify-content: center; /* Center the grid horizontally */
}


.photo {
    position: relative;
    overflow: hidden;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    cursor: pointer; /* Add cursor pointer for interactive effect */
    grid-column-end: span 1; /* Ensure each photo spans only one column */
    width: 300px; /* Adjust the width as needed */
}


.photo img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
    object-fit: cover;
}

.photo:hover {
    transform: scale(1.05);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(186, 177, 202, 0.7);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.photo:hover .overlay {
    opacity: 1;
}

.overlay p {
    font-size: 1em;
    text-align: center;
    margin: 0;
}

/* Footer Styles */
footer {
    background-color: #000000; /* Dark background color */
    color: #fff; /* White text color */
    padding: 20px; /* Padding for content */
    text-align: center; /* Center-align text */
}

.footer-container {
    max-width: 1200px; /* Set max width for content */
    margin: 0 auto; /* Center content horizontally */
    display: flex; /* Use flexbox for layout */
    justify-content: space-between; /* Distribute items evenly */
    align-items: center; /* Center items vertically */
}

.footer-container .left-section p {
    margin: 0; /* Remove default margin for paragraphs */
    font-size: 14px; /* Adjust font size */
}

.footer-container .right-section {
    display: flex; /* Use flexbox for layout */
    align-items: center; /* Center items vertically */
}

.footer-container .right-section a {
    margin: 0 15px; /* Add space between links */
    text-decoration: none; /* Remove default underline */
    color: #ccc; /* Light text color */
    transition: color 0.3s ease-in-out; /* Smooth color transition */
}

.footer-container .right-section a:hover {
    color: #f39c12; /* Change color on hover */
}

.scroll-to-top {
    cursor: pointer; /* Change cursor to pointer on hover */
    padding: 10px; /* Add padding */
    color: #fff; /* White text color */
    border-radius: 5px; /* Add border radius */
    opacity: 0; /* Initially hide the button */
    transition: opacity 0.3s ease, transform 0.3s ease; /* Smooth transition */
}

.scroll-to-top:hover {
    transform: translateY(-5px); /* Move the button up on hover */
}

.footer-icon {
    display: inline-block; /* Display icons inline */
    margin-left: 20px; /* Add space between icons */
}

.footer-icon img {
    width: 30px; /* Set width for icons */
    height: auto; /* Maintain aspect ratio */
}


/* Add this style to create a slim scrollbar for WebKit browsers */
body::-webkit-scrollbar {
    width: 5px;
    transition: opacity 0.5s, transform 0.5s;
}

body::-webkit-scrollbar-thumb {
    background-color: #162630; /* Change the color as per your design */
    border-radius: 4px;
}

body::-webkit-scrollbar-track {
    background-color: #ecf0f1; /* Change the color as per your design */
}

/* Add this style for Firefox scrollbar (optional) */
body {
    scrollbar-width: thin;
    scrollbar-color: #3498db #ecf0f1; /* Change the colors as per your design */
}

/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: hidden; /* Remove scroll feature */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
    margin: auto;
    display: block;
    max-width: 80%; /* Limit the image size */
    max-height: 80%; /* Limit the image size */
    width: auto;
    height: auto;
    transition: transform 0.2s ease-in-out;
    cursor: zoom-in;
}

/* Centering the image vertically and horizontally */
.modal-content-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
}

/* Add Animation - Zoom in the Modal */
.modal-content, #caption { 
    animation-name: zoom;
    animation-duration: 0.6s;
}

@keyframes zoom {
    from {transform: scale(0)} 
    to {transform: scale(1)}
}

/* The Close Button */
.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Lazy load images
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
});

// Masonry layout for gallery
window.onload = () => {
    const grid = document.querySelector('.gallery-grid');
    const masonry = new Masonry(grid, {
        itemSelector: '.card',
        columnWidth: '.card',
        gutter: 20,
        fitWidth: true
    });
};
