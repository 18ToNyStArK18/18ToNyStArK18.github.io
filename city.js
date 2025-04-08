const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const closeBtn = document.getElementById("close");

const descriptions = [
  `🌄 <strong>1. Belum Caves</strong><br><br>
  Belum Caves are the second-longest natural caves in India, famous for their mesmerizing stalactite and stalagmite formations. These caves stretch over 3 kilometers underground.<br><br>
  📍 <em>Kolimigundla Mandal (~110 km from Kurnool)</em><br>
  🧭 <em>Famous for:</em> Underground passages, rock formations, and natural air shafts.`,

  `🙏 <strong>2. Ahobilam Temple</strong><br><br>
  Located in the Nallamala Hills, this sacred site is dedicated to Lord Narasimha. It has nine shrines, each representing a different avatar of Narasimha.<br><br>
  📍 <em>~140 km from Kurnool</em><br>
  🧭 <em>Famous for:</em> Mythological heritage, scenic trekking, and ancient architecture.`,

  `🏰 <strong>3. Konda Reddy Fort</strong><br><br>
  A 16th-century fort right in the heart of Kurnool. It offers a glimpse into the region’s history and a great view of the city from the top.<br><br>
  📍 <em>Kurnool city center</em><br>
  🧭 <em>Famous for:</em> Historic importance, ancient tunnels, and city views.`,

  `🕉️ <strong>4. Mahanandi Temple</strong><br><br>
  Surrounded by lush forests, this temple village is home to a Shiva temple with a spring-fed pond where devotees can take a holy dip.<br><br>
  📍 <em>Near Nandyal (~15 km)</em><br>
  🧭 <em>Famous for:</em> Peaceful vibes, natural springs, and spiritual significance.`,

  `🦜 <strong>5. Rollapadu Bird Sanctuary</strong><br><br>
  A peaceful haven for bird lovers and home to the endangered Great Indian Bustard, along with many native and migratory species.<br><br>
  📍 <em>Near Nandikotkur (~60 km from Kurnool)</em><br>
  🧭 <em>Famous for:</em> Birdwatching, nature walks, and wildlife photography.`,

  `🌿 <strong>6. Oravakallu Rock Garden</strong><br><br>
  A scenic landscape featuring natural rock formations and a peaceful lake, perfect for picnics and short hikes.<br><br>
  📍 <em>~20 km from Kurnool</em><br>
  🧭 <em>Famous for:</em> Rock sculptures, film shootings, and lake views.`,

  `🌉 <strong>7. Srisailam Dam & Temple</strong><br><br>
  A spiritual and engineering marvel on the Krishna River. You can visit both the Shiva temple and enjoy scenic boat rides near the dam.<br><br>
  📍 <em>~180 km from Kurnool</em><br>
  🧭 <em>Famous for:</em> Spiritual tourism, river valley, and boating.`,

  `🔱 <strong>8. Adoni Fort</strong><br><br>
  Spread across a group of hills, Adoni Fort is an architectural wonder from the 17th century. It gives you panoramic views of the surrounding town and has multiple gates and bastions that reflect its strategic significance.<br><br>
  📍 <em>Location:</em> Adoni, ~120 km from Kurnool</em><br>
  🧭 <em>Famous for:</em> Historic ruins, massive structure, hilltop views`,

  `🕍 <strong>9. Tungabhadra River Ghat</strong><br><br>
  Kurnool lies on the banks of the Tungabhadra River. The riverfront areas, especially near Sangameswaram, are peaceful and spiritually significant. Ideal for evening strolls and photography.<br><br>
  📍 <em>Location:</em> Various ghats in and around Kurnool<br>
  🧭 <em>Famous for:</em> River views, calm atmosphere, religious significance`
];

document.querySelectorAll(".img-wrapper img").forEach((img, index) => {
  img.addEventListener("click", () => {
    popupText.innerHTML = descriptions[index];
    popup.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
