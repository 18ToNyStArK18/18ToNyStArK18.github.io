(function() {
    function getElementDescription(element) {
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
        return `${element.tagName.toLowerCase()}: ${element.id || element.className || 'unnamed'}`;
      }
    }
  
    function logEvent(eventType, elementDesc) {
      const timestamp = new Date().toISOString();
      console.log(`${timestamp}, ${eventType}, ${elementDesc}`);
    }
  
    document.addEventListener('click', function(event) {
      const target = event.target;
      const elementDesc = getElementDescription(target);
      logEvent('click', elementDesc);
    });
  
    window.addEventListener('load', function() {
      const pageName = document.title || window.location.pathname;
      logEvent('view', `page: ${pageName}`);
    });
  
    const originalLoadSection = window.loadSection;
    if (typeof originalLoadSection === 'function') {
      window.loadSection = function(file) {
        logEvent('view', `section: ${file}`);
        return originalLoadSection(file);
      };
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elementDesc = getElementDescription(entry.target);
          logEvent('view', elementDesc);
        }
      });
    }, { threshold: 0.5 });
  
    document.querySelectorAll('.body_block, .interests, .my_contact, .card').forEach(section => {
      observer.observe(section);
    });
  
    console.log("User interaction tracking initialized");
  })();