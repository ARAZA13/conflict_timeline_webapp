<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>India-Pakistan Conflicts Timeline</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Leaflet CSS -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />

  <style>
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 0;
    }
    #controls {
      padding: 1em;
      background: #f4f4f4;
      position: sticky;
      top: 0;
      z-index: 10;
    }
    #timeline {
      padding: 1em;
    }
    .conflict {
      border-bottom: 1px solid #ccc;
      margin-bottom: 1em;
      padding-bottom: 1em;
    }
    #map {
      height: 500px;
      margin: 1em;
    }
  </style>
</head>
<body>

<div id="controls">
  <label for="decadeFilter">Filter by Decade:</label>
  <select id="decadeFilter">
    <option value="All">All</option>
  </select>
</div>

<div id="map"></div>
<div id="timeline"></div>

<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

<script>
  const conflicts = [
    {
      year: "1947–1948",
      title: "First Kashmir War 🇮🇳 vs 🇵🇰",
      context: "Triggered by Pakistan-backed tribal invasions into the princely state of Jammu and Kashmir after Partition. The Maharaja's accession to India prompted Indian military intervention. The UN mediated a ceasefire in 1949, leading to the creation of the Line of Control but no final resolution. The World Bank began engaging with water-sharing issues, eventually laying groundwork for the Indus Waters Treaty.",
      decade: "1940s",
      location: [34.2, 74.3], // Kashmir
      details: [ "Pakistan: Muslim League (Governor-General Muhammad Ali Jinnah)", "Economic Outlook - Pakistan: Newly formed state facing fiscal and logistical challenges.", "GDP and GDP per capita - Pakistan: GDP ~$10 billion, GDP per capita ~$100.", "India: Indian National Congress (PM Jawaharlal Nehru)", "Economic Outlook - India: Nation-building phase with agrarian base.", "GDP and GDP per capita - India: GDP ~$30 billion, GDP per capita ~$90.", "World Bank: Early involvement, helped mediate water sharing that laid the foundation for the Indus Waters Treaty." ]
    },
    {
      year: "1965",
      title: "Second Kashmir War 🇮🇳 vs 🇵🇰",
      context: "Sparked by Pakistan’s Operation Gibraltar to infiltrate forces into Kashmir and incite insurgency. India retaliated with a full-scale counterattack. The war ended in a stalemate after 17 days of fighting. The USSR brokered peace via the Tashkent Agreement. The World Bank continued regional development financing, while the UN monitored ceasefire violations.",
      decade: "1960s",
      location: [33.7, 74.9],
      details: [ "Pakistan: Military regime under President Ayub Khan", "Economic Outlook - Pakistan: Fast-growing economy due to US aid and agricultural reforms.", "GDP and GDP per capita - Pakistan: GDP ~$12 billion, GDP per capita ~$120.", "India: Indian National Congress (PM Lal Bahadur Shastri)", "Economic Outlook - India: Focused on industrialization under Five-Year Plans.", "GDP and GDP per capita - India: GDP ~$60 billion, GDP per capita ~$110.", "World Bank: Actively supported development projects and post-conflict stabilization." ]
    },
    {
      year: "1971",
      title: "Bangladesh Liberation War 🇮🇳 vs 🇵🇰",
      context: "Triggered by political repression and military crackdown in East Pakistan following the 1970 elections. Millions of refugees fled to India, which intervened militarily. The war led to the creation of Bangladesh. The UN called for ceasefire and humanitarian aid. The World Bank and IMF later focused aid on rebuilding Bangladesh.",
      decade: "1970s",
      location: [23.8, 90.4], // Dhaka
      details: [ "Pakistan: Military regime under President Yahya Khan", "Economic Outlook - Pakistan: Severely disrupted by civil war.", "GDP and GDP per capita - Pakistan: GDP ~$11 billion, GDP per capita ~$130.", "India: Indian National Congress (PM Indira Gandhi)", "Economic Outlook - India: Strained due to refugee crisis and inflation.", "GDP and GDP per capita - India: GDP ~$90 billion, GDP per capita ~$150.", "World Bank: Major aid and development support post-conflict, especially to Bangladesh." ]
    },
    {
      year: "1999",
      title: "Kargil War 🇮🇳 vs 🇵🇰",
      context: "Pakistan-backed militants and soldiers occupied Indian positions in Kargil along the Line of Control. India launched a counter-offensive. The war ended after US diplomatic pressure on Pakistan and restoration of the status quo. The UN avoided direct involvement, while the World Bank maintained non-political development activities.",
      decade: "1990s",
      location: [34.55, 76.13], // Kargil
      details: [ "Pakistan: Pakistan Muslim League (PM Nawaz Sharif)", "Economic Outlook - Pakistan: Hit by sanctions and instability.", "GDP and GDP per capita - Pakistan: GDP ~$75 billion, GDP per capita ~$500.", "India: Bharatiya Janata Party (PM Atal Bihari Vajpayee)", "Economic Outlook - India: Liberalized economy gaining momentum.", "GDP and GDP per capita - India: GDP ~$470 billion, GDP per capita ~$440.", "World Bank: Continued infrastructure development; encouraged conflict de-escalation." ]
    },
    {
      year: "2019",
      title: "Pulwama Attack & Balakot Strikes 🇮🇳 vs 🇵🇰",
      context: "A suicide bombing in Pulwama killed 40 Indian paramilitary personnel. India retaliated with airstrikes in Balakot, Pakistan. The UN urged de-escalation while the US, China, and Russia intervened diplomatically. The IMF conditioned financial support to Pakistan on regional stability.",
      decade: "2010s",
      location: [33.88, 75.17], // Pulwama
      details: [ "Pakistan: Pakistan Tehreek-e-Insaf (PM Imran Khan)", "Economic Outlook - Pakistan: Crisis-led IMF bailout sought.", "GDP and GDP per capita - Pakistan: GDP ~$280 billion, GDP per capita ~$1,400.", "India: Bharatiya Janata Party (PM Narendra Modi)", "Economic Outlook - India: Growth slowing due to global headwinds.", "GDP and GDP per capita - India: GDP ~$2.9 trillion, GDP per capita ~$2,100.", "World Bank: Emphasized regional cooperation for sustainable growth." ]
    }
  ];

  const timeline = document.getElementById("timeline");
  const decadeFilter = document.getElementById("decadeFilter");

  // Build decade list
  const decades = [...new Set(conflicts.map(c => c.decade))];
  decades.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    decadeFilter.appendChild(opt);
  });

  // Initialize map
  const map = L.map('map').setView([32.5, 74.2], 5);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const markers = [];

  function renderConflicts(filter = "All") {
    timeline.innerHTML = "";
    markers.forEach(m => m.remove());
    markers.length = 0;

    conflicts
      .filter(c => filter === "All" || c.decade === filter)
      .forEach(conflict => {
        const div = document.createElement("div");
        div.className = "conflict";
        div.innerHTML = `
          <h2>${conflict.year} - ${conflict.title}</h2>
          <p><strong>Context:</strong> ${conflict.context}</p>
          <ul>${conflict.details.map(d => `<li>${d}</li>`).join("")}</ul>
        `;
        timeline.appendChild(div);

        if (conflict.location) {
          const marker = L.marker(conflict.location)
            .addTo(map)
            .bindPopup(`<strong>${conflict.title}</strong><br>${conflict.year}`);
          markers.push(marker);
        }
      });
  }

  decadeFilter.addEventListener("change", e => renderConflicts(e.target.value));

  renderConflicts();
</script>

</body>
</html>
