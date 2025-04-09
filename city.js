// Location descriptions with improved formatting
const descriptions = [
  `<div class="location-info">
    <div class="location-header">
      <i class="fas fa-mountain"></i>
      <h2>Belum Caves</h2>
    </div>
    <div class="location-content">
      <p>Belum Caves are the second-longest natural caves in India, famous for their mesmerizing stalactite and stalagmite formations. These caves stretch over 3 kilometers underground.</p>
      <div class="location-details">
        <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> Kolimigundla Mandal (~110 km from Kurnool)</p>
        <p><i class="fas fa-compass"></i> <strong>Famous for:</strong> Underground passages, rock formations, and natural air shafts</p>
      </div>
    </div>
  </div>`,

  `<div class="location-info">
    <div class="location-header">
      <i class="fas fa-temple"></i>
      <h2>Ahobilam Temple</h2>
    </div>
    <div class="location-content">
      <p>Located in the Nallamala Hills, this sacred site is dedicated to Lord Narasimha. It has nine shrines, each representing a different avatar of Narasimha.</p>
      <div class="location-details">
        <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> ~140 km from Kurnool</p>
        <p><i class="fas fa-compass"></i> <strong>Famous for:</strong> Mythological heritage, scenic trekking, and ancient architecture</p>
      </div>
    </div>
  </div>`,

  `<div class="location-info">
    <div class="location-header">
      <i class="fas fa-fort-awesome"></i>
      <h2>Konda Reddy Fort</h2>
    </div>
    <div class="location-content">
      <p>A 16th-century fort right in the heart of Kurnool. It offers a glimpse into the region's history and a great view of the city from the top.</p>
      <div class="location-details">
        <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> Kurnool city center</p>
        <p><i class="fas fa-compass"></i> <strong>Famous for:</strong> Historic importance, ancient tunnels, and city views</p>
      </div>
    </div>
  </div>`,

  `<div class="location-info">
    <div class="location-header">
      <i class="fas fa-om"></i>
      <h2>Mahanandi Temple</h2>
    </div>
    <div class="location-content">
      <p>Surrounded by lush forests, this temple village is home to a Shiva temple with a spring-fed pond where devotees can take a holy dip.</p>
      <div class="location-details">
        <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> Near Nandyal (~15 km)</p>
        <p><i class="fas fa-compass"></i> <strong>Famous for:</strong> Peaceful vibes, natural springs, and spiritual significance</p>
      </div>
    </div>
  </div>`,

  `<div class="location-info">
    <div class="location-header">
      <i class="fas fa-feather-alt"></i>
      <h2>Rollapadu Bird Sanctuary</h2>
    </div>
    <div class="location-content">
      <p>A peaceful haven for bird lovers and home to the endangered Great Indian Bustard, along with many native and migratory species.</p>
      <div class="location-details">
        <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> Near Nandikotkur (~60 km from Kurnool)</p>
        <p><i class="fas fa-compass"></i> <strong>Famous for:</strong> Birdwatching, nature walks, and wildlife photography</p>
      </div>
    </div>
  </div>`,

  `<div class="location-info">
    <div class="location-header">
      <i class="fas fa-tree"></i>
      <h2>Oravakallu Rock Garden</h2>
    </div>
    <div class="location-content">
      <p>A scenic landscape featuring natural rock formations and a peaceful lake, perfect for picnics and short hikes.</p>
      <div class="location-details">
        <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> ~20 km from Kurnool</p>
        <p><i class="fas fa-compass"></i> <strong>Famous for:</strong> Rock sculptures, film shootings, and lake views</p>
      </div>
    </div>
  </div>`,

  `<div class="location-info">
    <div class="location-header">
      <i class="fas fa-water"></i>
      <h2>Srisailam Dam & Temple</h2>
    </div>
    <div class="location-content">
      <p>A spiritual and engineering marvel on the Krishna River. You can visit both the Shiva temple and enjoy scenic boat rides near the dam.</p>
      <div class="location-details">
        <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> ~180 km from Kurnool</p>
        <p><i class="fas fa-compass"></i> <strong>Famous for:</strong> Spiritual tourism, river valley, and boating</p>
      </div>
    </div>
  </div>`,

  `<div class="location-info">
    <div class="location-header">
      <i class="fas fa-flag"></i>
      <h2>Adoni Fort</h2>
    </div>
    <div class="location-content">
      <p>Spread across a group of hills, Adoni Fort is an architectural wonder from the 17th century. It gives you panoramic views of the surrounding town and has multiple gates and bastions that reflect its strategic significance.</p>
      <div class="location-details">
        <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> Adoni, ~120 km from Kurnool</p>
        <p><i class="fas fa-compass"></i> <strong>Famous for:</strong> Historic ruins, massive structure, hilltop views</p>
      </div>
    </div>
  </div>`,

  `<div class="location-info">
    <div class="location-header">
      <i class="fas fa-pray"></i>
      <h2>Tungabhadra River Ghat</h2>
    </div>
    <div class="location-content">
      <p>Kurnool lies on the banks of the Tungabhadra River. The riverfront areas, especially near Sangameswaram, are peaceful and spiritually significant. Ideal for evening strolls and photography.</p>
      <div class="location-details">
        <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> Various ghats in and around Kurnool</p>
        <p><i class="fas fa-compass"></i> <strong>Famous for:</strong> River views, calm atmosphere, religious significance</p>
      </div>
    </div>
  </div>`
];

// Add dynamic styles for location info
const style = document.createElement('style');
style.textContent = `
  .location-info {
    font-family: 'Poppins', sans-serif;
  }
  
  .location-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    border-bottom: 2px solid #045de9;
    padding-bottom: 10px;
  }
  
  .location-header i {
    font-size: 24px;
    margin-right: 12px;
    color: #045de9;
  }
  
  .location-header h2 {
    font-size: 22px;
    margin: 0;
    color: #045de9;
  }
  
  .location-content p {
    margin-bottom: 15px;
    line-height: 1.6;
  }
  
  .location-details {
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 8px;
    margin-top: 15px;
  }
  
  .location-details p {
    margin: 8px 0;
  }
  
  .location-details i {
    color: #045de9;
    width: 20px;
    text-align: center;
    margin-right: 8px;
  }
`;
document.head.appendChild(style);

// DOM Elements
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const closeBtn = document.getElementById("close");
const imgWrappers = document.querySelectorAll(".img-wrapper");

// Enhanced image click handler with animation
imgWrappers.forEach((wrapper, index) => {
  const img = wrapper.querySelector("img");
  
  img.addEventListener("click", () => {
    // Set the content before showing popup
    popupText.innerHTML = descriptions[index];
    
    // Show popup with animation
    popup.style.display = "flex";
    setTimeout(() => {
      popup.classList.add("active");
    }, 10);
  });
});

// Close popup with animation
function closePopup() {
  popup.classList.remove("active");
  setTimeout(() => {
    popup.style.display = "none";
  }, 300);
}

closeBtn.addEventListener("click", closePopup);

// Close popup when clicking outside
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    closePopup();
  }
});

// Close popup with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && popup.style.display === "flex") {
    closePopup();
  }
});

// Add parallax effect on scroll
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  
  imgWrappers.forEach((wrapper) => {
    const img = wrapper.querySelector("img");
    const speed = 0.05;
    const yPos = -(scrollPosition * speed);
    
    if (isElementInViewport(wrapper)) {
      img.style.transform = `translateY(${yPos}px)`;
    }
  });
});

// Helper function to check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0 &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
    rect.right >= 0
  );
}

// Add loading animation
document.addEventListener("DOMContentLoaded", () => {
  // Simulate loading images
  const images = document.querySelectorAll('img');
  let loadedCount = 0;
  
  images.forEach((img) => {
    if (img.complete) {
      imageLoaded();
    } else {
      img.addEventListener('load', imageLoaded);
      img.addEventListener('error', imageLoaded);
    }
  });
  
  function imageLoaded() {
    loadedCount++;
    if (loadedCount === images.length) {
      // All images loaded
      document.body.classList.add('loaded');
    }
  }
});

// Enhance hover effects with randomized animations
imgWrappers.forEach((wrapper) => {
  wrapper.addEventListener("mouseenter", () => {
    const imgCard = wrapper.querySelector(".img-card");
    const randomEffect = Math.floor(Math.random() * 3);
    
    switch (randomEffect) {
      case 0:
        imgCard.style.transform = "scale(1.05) rotate(1deg)";
        break;
      case 1:
        imgCard.style.transform = "scale(1.05) rotate(-1deg)";
        break;
      case 2:
        imgCard.style.transform = "scale(1.05) translateY(-5px)";
        break;
    }
  });
  
  wrapper.addEventListener("mouseleave", () => {
    const imgCard = wrapper.querySelector(".img-card");
    imgCard.style.transform = "";
  });
});