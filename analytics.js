// User interaction tracking
(function() {
    // Function to get a readable description of the clicked element
    function getElementDescription(element) {
      // Check for common element types
      if (element.tagName === 'BUTTON') {
        return `button: ${element.innerText || element.className || 'unnamed'}`;
      } else if (element.tagName === 'A') {
        return `link: ${element.innerText || element.href || 'unnamed'}`;
      } else if (element.tagName === 'IMG') {
        return `image: ${element.alt || element.src.split('/').pop() || 'unnamed'}`;
      } else if (element.tagName === 'LI') {
        return `list item: ${element.innerText || 'unnamed'}`;
      } else if (element.classList.contains('linkbutton')) {
        return `navigation button: ${element.innerText || 'unnamed'}`;
      } else if (element.tagName === 'DIV' && element.classList.contains('card')) {
        return `card: ${element.querySelector('h2')?.innerText || 'unnamed'}`;
      } else if (element.tagName === 'DIV' && element.classList.contains('img-wrapper')) {
        return `image wrapper: ${element.querySelector('img')?.alt || 'unnamed'}`;
      } else {
        // For other elements, try to provide meaningful description
        return `${element.tagName.toLowerCase()}: ${element.id || element.className || 'unnamed'}`;
      }
    }
  
    // Function to log the event to console
    function logEvent(eventType, elementDesc) {
      const timestamp = new Date().toISOString();
      console.log(`${timestamp}, ${eventType}, ${elementDesc}`);
    }
  
    // Track clicks on all elements
    document.addEventListener('click', function(event) {
      const target = event.target;
      const elementDesc = getElementDescription(target);
      logEvent('click', elementDesc);
    });
  
    // Track page views - log when page is loaded
    window.addEventListener('load', function() {
      const pageName = document.title || window.location.pathname;
      logEvent('view', `page: ${pageName}`);
    });
  
    // Track navigation between sections (for SPA behavior)
    const originalLoadSection = window.loadSection;
    if (typeof originalLoadSection === 'function') {
      window.loadSection = function(file) {
        logEvent('view', `section: ${file}`);
        return originalLoadSection(file);
      };
    }
  
    // Track when specific sections become visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elementDesc = getElementDescription(entry.target);
          logEvent('view', elementDesc);
        }
      });
    }, { threshold: 0.5 });
  
    // Observe important sections
    document.querySelectorAll('.body_block, .interests, .my_contact, .card').forEach(section => {
      observer.observe(section);
    });
  
    console.log("User interaction tracking initialized");
  })();