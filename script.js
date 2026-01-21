function toggleContent(el) {
  const currentContent = el.nextElementSibling;
  
  // Close all other contents
  document.querySelectorAll('.content').forEach(c => {
    if (c !== currentContent) c.style.display = 'none';
  });
  
  // Toggle current
  currentContent.style.display = (currentContent.style.display === 'block') ? 'none' : 'block';
  
  // Scroll current card into view
  if (currentContent.style.display === 'block') {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function searchKrantikari() {
  const input = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".krantikari");
  
  cards.forEach(card => {
    const keywords = card.getAttribute("data-search").toLowerCase();
    card.style.display = keywords.includes(input) ? 'block' : 'none';
  });
}

