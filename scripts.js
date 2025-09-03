document.addEventListener("DOMContentLoaded", () => {
  const lastModified = document.getElementById("lastModified");
  if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
  }
});
