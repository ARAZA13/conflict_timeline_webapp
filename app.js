
async function loadTimeline() {
  const response = await fetch('data.json');
  const events = await response.json();
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';

  events.forEach(event => {
    const card = document.createElement('div');
    card.className = 'timeline-card';
    card.innerHTML = `
      <h3>${event.year_event}</h3>
      <p><strong>Nature:</strong> ${event.nature_of_threat}</p>
      <p><strong>India's Policy:</strong> ${event.india_policy_focus}</p>
      <p><strong>Pakistan's Policy:</strong> ${event.pakistan_policy_focus}</p>
      <p><strong>Conflict Highlight:</strong> ${event.conflict_highlight}</p>
      <p><strong>World Bank Role:</strong> ${event.world_bank_role}</p>
    `;
    timeline.appendChild(card);
  });

  document.getElementById('searchBox').addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = events.filter(event => 
      event.year_event.toLowerCase().includes(keyword) ||
      event.nature_of_threat.toLowerCase().includes(keyword) ||
      event.india_policy_focus.toLowerCase().includes(keyword) ||
      event.pakistan_policy_focus.toLowerCase().includes(keyword) ||
      event.conflict_highlight.toLowerCase().includes(keyword) ||
      event.world_bank_role.toLowerCase().includes(keyword)
    );
    timeline.innerHTML = '';
    filtered.forEach(event => {
      const card = document.createElement('div');
      card.className = 'timeline-card';
      card.innerHTML = `
        <h3>${event.year_event}</h3>
        <p><strong>Nature:</strong> ${event.nature_of_threat}</p>
        <p><strong>India's Policy:</strong> ${event.india_policy_focus}</p>
        <p><strong>Pakistan's Policy:</strong> ${event.pakistan_policy_focus}</p>
        <p><strong>Conflict Highlight:</strong> ${event.conflict_highlight}</p>
        <p><strong>World Bank Role:</strong> ${event.world_bank_role}</p>
      `;
      timeline.appendChild(card);
    });
  });
}

loadTimeline();
