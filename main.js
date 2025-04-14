function toggleDark() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}, click, toggle: ${isDarkMode ? 'dark mode enabled' : 'dark mode disabled'}`);
}

function loadSection(file) {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}, view, section: ${file}`);
  
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;
      initializeTrackingForNewContent();
    })
    .catch(err => {
      console.error("Error loading file:", err);
      document.getElementById("content").innerHTML = "<p>Error loading section.</p>";
    });
}

function initializeTrackingForNewContent() {
  const newContent = document.getElementById("content");
  
  newContent.querySelectorAll('a, button, .img-wrapper, .card').forEach(element => {
    if (!element.getAttribute('data-tracking-initialized')) {
      element.setAttribute('data-tracking-initialized', 'true');
      
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

window.onload = () => {
  loadSection('home.html');
  
};

