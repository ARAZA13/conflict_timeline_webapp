const data = [
  { year: "1947-48", threat: "Military conflict over Kashmir", india: "Indian National Congress (INC)", pakistan: "Muslim League" },
  { year: "1965", threat: "Full-scale war over Kashmir", india: "INC", pakistan: "Ayub Khan's Military Govt" },
  { year: "1971", threat: "Military intervention leading to Pakistan's breakup", india: "INC (Indira Gandhi)", pakistan: "Yahya Khan's Military Govt" },
  { year: "1984", threat: "Military occupation of Siachen Glacier", india: "INC (Indira Gandhi)", pakistan: "Zia-ul-Haq's Military Govt" },
  { year: "1998", threat: "Strategic threat; nuclear capability demonstrated", india: "BJP", pakistan: "Nawaz Sharif (PML-N)" },
  { year: "1999", threat: "Limited war in Kashmir region", india: "BJP (Atal Bihari Vajpayee)", pakistan: "Musharraf's Military Govt" },
  { year: "2001-02", threat: "Military mobilization; threat of war", india: "BJP (Atal Bihari Vajpayee)", pakistan: "Musharraf's Military Govt" },
  { year: "2008", threat: "Diplomatic threats; isolation efforts", india: "INC (Manmohan Singh)", pakistan: "Pakistan People's Party (PPP)" },
  { year: "2016", threat: "Cross-border military operations", india: "BJP (Narendra Modi)", pakistan: "PML-N (Nawaz Sharif)" },
  { year: "2019", threat: "Air strikes in Pakistani territory", india: "BJP (Narendra Modi)", pakistan: "PTI (Imran Khan)" },
  { year: "2019", threat: "Weakening Pakistan’s Kashmir narrative", india: "BJP (Narendra Modi)", pakistan: "PTI (Imran Khan)" },
  { year: "2023", threat: "Diplomatic isolation threats", india: "BJP (Narendra Modi)", pakistan: "Caretaker Govt" },
  { year: "2024", threat: "Strategic water treaty pressure", india: "BJP (Narendra Modi)", pakistan: "Caretaker Govt" },
  { year: "2025", threat: "Formal suspension; escalation", india: "BJP (Narendra Modi)", pakistan: "PML-N Coalition (expected)" }
];

const timeline = document.getElementById('timeline');
const searchInput = document.getElementById('searchInput');

function renderTimeline(filteredData) {
  timeline.innerHTML = '';
  filteredData.forEach(item => {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    div.innerHTML = `<div class='timeline-year'>${item.year}</div>
                     <div class='timeline-desc'>${item.threat}<br><b>India:</b> ${item.india} | <b>Pakistan:</b> ${item.pakistan}</div>`;
    timeline.appendChild(div);
  });
}

searchInput.addEventListener('input', function() {
  const keyword = this.value.toLowerCase();
  const filtered = data.filter(item => 
    item.year.toLowerCase().includes(keyword) ||
    item.threat.toLowerCase().includes(keyword) ||
    item.india.toLowerCase().includes(keyword) ||
    item.pakistan.toLowerCase().includes(keyword)
  );
  renderTimeline(filtered);
});

renderTimeline(data);
