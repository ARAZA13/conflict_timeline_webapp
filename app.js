<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>India–Pakistan Conflict Timeline</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Leaflet CSS -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
    }
    #controls {
      padding: 1em;
      background: #f0f0f0;
    }
    #map {
      height: 400px;
    }
    #timeline {
      padding: 1em;
    }
    .conflict {
      border-bottom: 1px solid #ccc;
      padding: 1em 0;
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
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<!-- Main Script -->
<script>
  const conflicts = [
    {
      year: "1947–1948",
      title: "First Kashmir War 🇮🇳 vs 🇵🇰",
      context: "Triggered by Pakistan-backed tribal invasions into Kashmir after Partition. India intervened militarily after the Maharaja's accession. The UN brokered a ceasefire in 1949 leading to the Line of Control. The World Bank began efforts toward water-sharing that led to the Indus Waters Treaty.",
      decade: "1940s",
      location: [34.2, 74.3],
      details: [
        "Pakistan: Muslim League",
        "India: Indian National Congress",
        "UN: Ceasefire mediation",
        "World Bank: Early water conflict involvement"
      ]
    },
    {
      year: "1965",
      title: "Second Kashmir War 🇮🇳 vs 🇵🇰",
      context: "Sparked by Pakistan’s Operation Gibraltar to infiltrate Kashmir. India retaliated with full-scale war. Ended in stalemate. USSR mediated Tashkent Agreement. UN observers were deployed. The World Bank supported development, not military efforts.",
      decade: "1960s",
      location: [33.7, 74.9],
      details: [
        "Pakistan: Ayub Khan",
        "India: Lal Bahadur Shastri",
        "USSR: Tashkent Agreement",
        "UN: Ceasefire supervision"
      ]
    },
    {
      year: "1971",
      title: "Bangladesh Liberation War 🇮🇳 vs 🇵🇰",
      context: "Pakistan's crackdown in East Pakistan led to refugee influx into India. India intervened militarily, resulting in creation of Bangladesh. The UN called for humanitarian aid. The World Bank and IMF focused aid on Bangladesh's rebuilding.",
      decade: "1970s",
      location: [23.8, 90.4],
      details: [
        "Pakistan: Yahya Khan",
        "India: Indira Gandhi",
        "UN: Humanitarian relief",
        "World Bank & IMF: Post-war aid to Bangladesh"
      ]
    },
    {
      year: "1999",
      title: "Kargil War 🇮🇳 vs 🇵🇰",
      context: "Pakistani troops and militants occupied Indian posts in Kargil. India responded militarily. US diplomacy helped resolve the conflict. The UN stayed neutral. World Bank focused on non-political development.",
      decade: "1990s",
      location: [34.55, 76.13],
      details: [
        "Pakistan: Nawaz Sharif",
        "India: Atal Bihari Vajpayee",
        "US: Diplomatic pressure",
        "World Bank: Neutral development role"
      ]
    },
    {
      year: "2019",
      title: "Pulwama Attack & Balakot Strikes 🇮🇳 vs 🇵🇰",
      context: "Terrorist attack killed Indian soldiers in Pulwama. India conducted airstrikes in Balakot. UN urged de-escalation. IMF considered regional stability before bailout negotiations with Pakistan.",
      decade: "2010s",
      location: [33.88, 75.17],
      details: [
        "Pakistan: Imran Khan",
        "India: Narendra Modi",
        "UN: Diplomatic calls for restraint",
        "IMF: Linked stability to aid"
      ]
    }
  ];

  const timeline = document.getElementById("timeline");
  const select = document.getElementById("decadeFilter");

  const decades = [...new Set(conflicts.map(c => c.decade))];
  decades.forEach(d => {
    const option = document.createElement("option");
    option.value = d;
    option.textContent = d;
    select.appendChild(option);
  });

  const map = L.map("map").setView([32, 74], 5);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const markers = [];

  function renderConflicts(decade = "All") {
    timeline.innerHTML = "";
    markers.forEach(m => map.removeLayer(m));
    markers.length = 0;

    conflicts
      .filter(c => decade === "All" || c.decade === decade)
      .forEach(conflict => {
        const div = document.createElement("div");
        div.className = "conflict";
        div.innerHTML = `<h3>${conflict.year} - ${conflict.title}</h3>
                         <p><strong>Context:</strong> ${conflict.context}</p>
                         <ul>${conflict.details.map(d => `<li>${d}</li>`).join("")}</ul>`;
        timeline.appendChild(div);

        if (conflict.location) {
          const marker = L.marker(conflict.location)
            .addTo(map)
            .bindPopup(`<b>${conflict.title}</b><br>${conflict.year}`);
          markers.push(marker);
        }
      });
  }

  select.addEventListener("change", e => {
    renderConflicts(e.target.value);
  });

  renderConflicts();
</script>

</body>
</html>
