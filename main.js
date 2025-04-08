function toggleDark() {
    document.body.classList.toggle("dark-mode");
  }
  
  // Load content dynamically without refreshing the whole page
  function loadSection(file) {
    fetch(file)
      .then(res => res.text())
      .then(data => {
        document.getElementById("content").innerHTML = data;
      })
      .catch(err => {
        console.error("Error loading file:", err);
        document.getElementById("content").innerHTML = "<p>Error loading section.</p>";
      });
  }
  
  // Optionally, load Home section on page load
  window.onload = () => {
    loadSection('home.html');
  };
  