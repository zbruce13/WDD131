const temples = [
  { 
    name: "Baton Rouge Louisiana Temple", 
    location: "Baton Rouge, Louisiana", 
    dedicated: "2000-07-16", 
    area: 15000, 
    imageUrl: "https://raw.githubusercontent.com/zbruce13/wdd131/main/images/baton-rouge-temple.webp" 
  },
  { 
    name: "Cebu City Temple", 
    location: "Cebu City, Philippines", 
    dedicated: "2010-06-13", 
    area: 20000, 
    imageUrl: "https://raw.githubusercontent.com/zbruce13/wdd131/main/images/cebu-temple.jpg" 
  },
  { 
    name: "Nauvoo Temple", 
    location: "Nauvoo, Illinois", 
    dedicated: "2002-06-27", 
    area: 12000, 
    imageUrl: "https://raw.githubusercontent.com/zbruce13/wdd131/main/images/nauvoo-temple.jpg" 
  },
  { 
    name: "Alabama Temple", 
    location: "Birmingham, Alabama", 
    dedicated: "2000-05-04", 
    area: 10000, 
    imageUrl: "https://raw.githubusercontent.com/zbruce13/wdd131/main/images/alabama-temple.jpg" 
  },
  { 
    name: "Albuquerque New Mexico Temple", 
    location: "Albuquerque, New Mexico", 
    dedicated: "2000-03-05", 
    area: 13000, 
    imageUrl: "https://raw.githubusercontent.com/zbruce13/wdd131/main/images/albuquerque-temple.jpg" 
  },
  { 
    name: "Brigham City Utah Temple", 
    location: "Brigham City, Utah", 
    dedicated: "2012-09-23", 
    area: 20000, 
    imageUrl: "https://raw.githubusercontent.com/zbruce13/wdd131/main/images/brigham-temple.webp" 
  },
  { 
    name: "Rome Italy Temple", 
    location: "Rome, Italy", 
    dedicated: "2019-03-10", 
    area: 37000, 
    imageUrl: "https://raw.githubusercontent.com/zbruce13/wdd131/main/images/rome-temple.webp" 
  },
  { 
    name: "Houston Texas Temple", 
    location: "Houston, Texas", 
    dedicated: "2000-08-26", 
    area: 25000, 
    imageUrl: "https://raw.githubusercontent.com/zbruce13/wdd131/main/images/houston-temple.jpg" 
  },
  { 
    name: "Bountiful Temple", 
    location: "Bountiful, Utah", 
    dedicated: "2019-10-12", 
    area: 22000, 
    imageUrl: "https://raw.githubusercontent.com/zbruce13/wdd131/main/images/bountiful-temple.webp" 
  }
];

function createTempleCard(temple) {
  const card = document.createElement("figure");
  card.innerHTML = `
    <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
    <figcaption>
      <strong>${temple.name}</strong><br>
      ${temple.location}<br>
      Dedicated: ${temple.dedicated}<br>
      Area: ${temple.area.toLocaleString()} sq ft
    </figcaption>
  `;
  return card;
}

function displayTemples(array) {
  const container = document.getElementById("temple-cards");
  container.innerHTML = "";
  array.forEach(temple => container.appendChild(createTempleCard(temple)));
}

document.getElementById("filter-home").addEventListener("click", () => displayTemples(temples));
document.getElementById("filter-old").addEventListener("click", () =>
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900))
);
document.getElementById("filter-new").addEventListener("click", () =>
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000))
);
document.getElementById("filter-large").addEventListener("click", () =>
  displayTemples(temples.filter(t => t.area > 90000))
);
document.getElementById("filter-small").addEventListener("click", () =>
  displayTemples(temples.filter(t => t.area < 10000))
);

// Initial display
displayTemples(temples);
