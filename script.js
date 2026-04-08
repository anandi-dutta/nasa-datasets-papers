// Function to generate the cards safely
function renderCards(data) {
  const dashboard = document.getElementById('dashboard');
  dashboard.innerHTML = '';
  
  if (!data || data.length === 0) {
      dashboard.innerHTML = '<p class="no-results">No datasets or papers matched your search.</p>';
      return;
  }

  data.forEach(item => {
    // Safely generate the list of papers
    let papersHtml = "";
    if (item.papers && item.papers.length > 0) {
      papersHtml = item.papers.map(p => {
        let paperLink = (p.url && p.url !== "#") ? `<a href="${p.url}" target="_blank">${p.title}</a>` : p.title;
        return `<li>${paperLink}</li>`;
      }).join('');
    } else {
      papersHtml = "<li><em>No specific papers listed.</em></li>";
    }
    
    // Assign correct tag color class based on the planet safely
    let safePlanet = item.planet ? item.planet.toLowerCase() : 'unknown';
    let planetClass = safePlanet === 'mars' ? 'mars' : (safePlanet === 'moon' ? 'moon' : '');

    // Set Dataset link safely
    let datasetLink = (item.link && item.link !== "#") ? `<a href="${item.link}" target="_blank">${item.dataset}</a>` : item.dataset;

    // Create the card element
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <span class="tag ${planetClass}">${item.planet || 'Dataset'}</span>
      <h2>${datasetLink}</h2>
      <h3>Published Papers</h3>
      <ul>${papersHtml}</ul>
    `;
    dashboard.appendChild(card);
  });
}

// CRASH-PROOF event listener for the live-search bar
document.getElementById('searchInput').addEventListener('input', function(e) {
  // .trim() handles accidental spaces at the end of the input (like "mars ")
  const term = e.target.value.toLowerCase().trim(); 
  
  const filtered = nasaData.filter(item => {
    // Safely check dataset and planet names (fallback to empty string if missing)
    const safeDataset = (item.dataset || "").toLowerCase();
    const safePlanet = (item.planet || "").toLowerCase();
    
    const matchDataset = safeDataset.includes(term);
    const matchPlanet = safePlanet.includes(term);
    
    // Safely check papers array and titles
    const safePapers = item.papers || [];
    const matchPaper = safePapers.some(p => 
      (p.title || "").toLowerCase().includes(term)
    );
    
    return matchDataset || matchPlanet || matchPaper;
  });
  
  renderCards(filtered);
});

// Initial render to show everything when the page loads
renderCards(nasaData);