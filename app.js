// Timeline Events
const events = [
  { year: "1947-48", event: "First Kashmir War", details: "Military conflict over Kashmir. World Bank mediated early water rights discussion." },
  { year: "1965", event: "Second Kashmir War", details: "Full-scale war. World Bank focused on Indus Water implementation." },
  { year: "1971", event: "Bangladesh Liberation War", details: "India intervened; Pakistan broke into two. WBG paused development aid temporarily." },
  { year: "1984", event: "Siachen Conflict", details: "Operation Meghdoot. World Bank promoted neutral humanitarian aid." },
  { year: "1998", event: "Nuclear Tests", details: "Nuclear threat escalated. World Bank promoted regional trade projects." },
  { year: "1999", event: "Kargil War", details: "Limited war; IMF/World Bank temporarily froze some funds to Pakistan." },
  { year: "2001-02", event: "Parliament Attack", details: "Troop mobilizations. WBG encouraged educational reforms." },
  { year: "2008", event: "Mumbai Attacks", details: "Diplomatic crises. WBG pushed for anti-corruption measures." },
  { year: "2016", event: "Surgical Strikes", details: "Cross-border strikes. World Bank focused on water security." },
  { year: "2019", event: "Balakot Airstrikes", details: "Aerial bombings. World Bank advocated for education over militarization." },
  { year: "2019", event: "Removal of Article 370", details: "Kashmir autonomy revoked. Focus on regional development." },
  { year: "2023", event: "G20 in Kashmir Tensions", details: "Diplomatic tensions. World Bank pushed environmental projects." },
  { year: "2024", event: "Indus Waters Treaty Review", details: "India seeks treaty review. World Bank stressed dialogue." },
  { year: "2025", event: "Indus Treaty Suspension", details: "Major escalation predicted. WBG likely to intervene to broker new water deals." }
];

// Render Timeline
const timeline = document.getElementById('timeline');
events.forEach(e => {
  const div = document.createElement('div');
  div.className = 'event';
  div.innerHTML = `<h3>${e.year} - ${e.event}</h3><p>${e.details}</p>`;
  timeline.appendChild(div);
});

// Education Chart
const educationCtx = document.getElementById('educationChart').getContext('2d');
new Chart(educationCtx, {
  type: 'line',
  data: {
    labels: ['1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020', '2025'],
    datasets: [
      {
        label: 'India (%)',
        data: [8, 10, 20, 30, 45, 55, 70, 85, 90],
        borderColor: '#00ff00',
        backgroundColor: 'transparent',
        borderWidth: 2
      },
      {
        label: 'Pakistan (%)',
        data: [5, 7, 12, 20, 28, 35, 45, 55, 60],
        borderColor: '#ff0000',
        backgroundColor: 'transparent',
        borderWidth: 2
      }
    ]
  },
  options: {
    scales: { y: { beginAtZero: true } },
    plugins: {
      legend: { labels: { color: '#FEE715' } }
    }
  }
});

// Corruption Chart
const corruptionCtx = document.getElementById('corruptionChart').getContext('2d');
new Chart(corruptionCtx, {
  type: 'line',
  data: {
    labels: ['2000', '2010', '2020', '2025'],
    datasets: [
      {
        label: 'India',
        data: [-0.3, -0.2, -0.1, 0.0],
        borderColor: '#00bfff',
        backgroundColor: 'transparent',
        borderWidth: 2
      },
      {
        label: 'Pakistan',
        data: [-0.8, -0.7, -0.5, -0.4],
        borderColor: '#ff6347',
        backgroundColor: 'transparent',
        borderWidth: 2
      }
    ]
  },
  options: {
    scales: { y: { min: -1, max: 1 } },
    plugins: {
      legend: { labels: { color: '#FEE715' } }
    }
  }
});
