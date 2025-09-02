// scripts.js

// Set copyright year
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Set last modified date
const lastModifiedSpan = document.getElementById("lastModified");
const lastModifiedDate = new Date(document.lastModified);
lastModifiedSpan.textContent = lastModifiedDate.toLocaleString();
