const conflicts = [
  {
    year: "1947–1948",
    title: "First Kashmir War",
    details: [
      "India: Indian National Congress (PM Jawaharlal Nehru)",
      "Pakistan: Muslim League (Governor-General Muhammad Ali Jinnah)",
      "Economic Outlook - India: GDP ~$30 billion (USD 1947), GDP per capita ~$90. Nation-building phase with agrarian base.",
      "Economic Outlook - Pakistan: GDP ~$10 billion, GDP per capita ~$100. Newly formed state facing fiscal and logistical challenges.",
      "World Bank: Early involvement, helped mediate water sharing that laid the foundation for the Indus Waters Treaty."
    ]
  },
  {
    year: "1965",
    title: "Second Kashmir War",
    details: [
      "India: Indian National Congress (PM Lal Bahadur Shastri)",
      "Pakistan: Military regime under President Ayub Khan",
      "Economic Outlook - India: GDP ~$60 billion, GDP per capita ~$110. Focused on industrialization under Five-Year Plans.",
      "Economic Outlook - Pakistan: GDP ~$12 billion, GDP per capita ~$120. Fast-growing economy due to US aid and agricultural reforms.",
      "World Bank: Actively supported development projects and post-conflict stabilization."
    ]
  },
  {
    year: "1971",
    title: "Bangladesh Liberation War",
    details: [
      "India: Indian National Congress (PM Indira Gandhi)",
      "Pakistan: Military regime under President Yahya Khan",
      "Economic Outlook - India: GDP ~$90 billion, GDP per capita ~$150. Strained due to refugee crisis and inflation.",
      "Economic Outlook - Pakistan: GDP ~$11 billion, GDP per capita ~$130. Severely disrupted by civil war.",
      "World Bank: Major aid and development support post-conflict, especially to Bangladesh."
    ]
  },
  {
    year: "1999",
    title: "Kargil War",
    details: [
      "India: Bharatiya Janata Party (PM Atal Bihari Vajpayee)",
      "Pakistan: Pakistan Muslim League (PM Nawaz Sharif)",
      "Economic Outlook - India: GDP ~$470 billion, GDP per capita ~$440. Liberalized economy gaining momentum.",
      "Economic Outlook - Pakistan: GDP ~$75 billion, GDP per capita ~$500. Hit by sanctions and instability.",
      "World Bank: Continued infrastructure development; encouraged conflict de-escalation."
    ]
  },
  {
    year: "2001–2002",
    title: "India–Pakistan Standoff",
    details: [
      "India: Bharatiya Janata Party (PM Atal Bihari Vajpayee)",
      "Pakistan: Military regime under President Pervez Musharraf",
      "Economic Outlook - India: GDP ~$500 billion, GDP per capita ~$480. Economic reform continued despite military costs.",
      "Economic Outlook - Pakistan: GDP ~$75 billion, GDP per capita ~$520. Reliant on foreign aid and remittances.",
      "World Bank: Ongoing support in health, education, and power sectors; urged peace talks."
    ]
  },
  {
    year: "2008",
    title: "Mumbai Attacks",
    details: [
      "India: Indian National Congress (PM Manmohan Singh)",
      "Pakistan: Pakistan Peoples Party (PM Yousaf Raza Gillani)",
      "Economic Outlook - India: GDP ~$1.2 trillion, GDP per capita ~$1,000. Rapid growth temporarily shaken.",
      "Economic Outlook - Pakistan: GDP ~$170 billion, GDP per capita ~$1,000. Facing inflation and global financial pressures.",
      "World Bank: Continued development funding with caution amid security concerns."
    ]
  },
  {
    year: "2016",
    title: "Uri Attack and Surgical Strikes",
    details: [
      "India: Bharatiya Janata Party (PM Narendra Modi)",
      "Pakistan: Pakistan Muslim League (PM Nawaz Sharif)",
      "Economic Outlook - India: GDP ~$2.3 trillion, GDP per capita ~$1,700. Strong domestic growth with focus on infrastructure.",
      "Economic Outlook - Pakistan: GDP ~$280 billion, GDP per capita ~$1,500. Dependent on CPEC investments and external loans.",
      "World Bank: Supported development programs; called for restraint on both sides."
    ]
  },
  {
    year: "2019",
    title: "Pulwama Attack and Balakot Airstrikes",
    details: [
      "India: Bharatiya Janata Party (PM Narendra Modi)",
      "Pakistan: Pakistan Tehreek-e-Insaf (PM Imran Khan)",
      "Economic Outlook - India: GDP ~$2.9 trillion, GDP per capita ~$2,100. Growth slowing due to global headwinds.",
      "Economic Outlook - Pakistan: GDP ~$280 billion, GDP per capita ~$1,400. Crisis-led IMF bailout sought.",
      "World Bank: Emphasized regional cooperation for sustainable growth."
    ]
  },
  {
    year: "2025",
    title: "Pahalgam Massacre, Diplomatic Crisis, and Water Dispute",
    details: [
      "India: Bharatiya Janata Party (PM Narendra Modi)",
      "Pakistan: Pakistan Muslim League (PM Hanif Abbasi)",
      "Economic Outlook - India: GDP ~$3.9 trillion, GDP per capita ~$2,700. Slower growth amid geopolitical risks and inflation.",
      "Economic Outlook - Pakistan: GDP ~$340 billion, GDP per capita ~$1,300. In economic crisis with rising debt and falling reserves.",
      "Water Crisis - India threatened to revise water allocations under the Indus Waters Treaty.",
      "Water Crisis - Pakistan raised the issue at international forums, citing existential threat.",
      "World Bank: Urged treaty compliance and facilitated emergency negotiations between the two countries."
    ]
  }
];

const container = document.getElementById("timeline");

conflicts.forEach(conflict => {
  const div = document.createElement("div");
  div.className = "conflict";
  div.innerHTML = `<h2>${conflict.year} - ${conflict.title}</h2><ul>${conflict.details.map(item => `<li>${item}</li>`).join("")}</ul>`;
  container.appendChild(div);
});
