function toggleDark() {
  document.body.classList.toggle("dark-mode");
  // Log the dark mode toggle in our analytics
  const isDarkMode = document.body.classList.contains("dark-mode");
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}, click, toggle: ${isDarkMode ? 'dark mode enabled' : 'dark mode disabled'}`);
}

// Load content dynamically without refreshing the whole page
function loadSection(file) {
  // Log the section change
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}, view, section: ${file}`);
  
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;
      // After loading content, initialize tracking for the new elements
      initializeTrackingForNewContent();
    })
    .catch(err => {
      console.error("Error loading file:", err);
      document.getElementById("content").innerHTML = "<p>Error loading section.</p>";
    });
}

// Function to initialize tracking for newly loaded content
function initializeTrackingForNewContent() {
  // Find all important elements in the newly loaded content
  const newContent = document.getElementById("content");
  
  // Track clicks on any clickable elements in the new content
  newContent.querySelectorAll('a, button, .img-wrapper, .card').forEach(element => {
    if (!element.getAttribute('data-tracking-initialized')) {
      element.setAttribute('data-tracking-initialized', 'true');
      
      // Add specific tracking for images
      if (element.classList.contains('img-wrapper')) {
        const img = element.querySelector('img');
        if (img) {
          img.addEventListener('load', function() {
            const timestamp = new Date().toISOString();
            console.log(`${timestamp}, view, image: ${img.alt || img.src.split('/').pop() || 'unnamed'}`);
          });
        }
      }
    }
  });
}

// Optionally, load Home section on page load
window.onload = () => {
  loadSection('home.html');
  
  // Log initial page view
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}, view, page: ${document.title || window.location.pathname}`);
  
  // Track all link/button clicks on the page
  document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('click', function(event) {
      const elementDesc = this.innerText || this.className || this.id || this.tagName.toLowerCase();
      const timestamp = new Date().toISOString();
      console.log(`${timestamp}, click, ${elementDesc}`);
    });
  });
};

