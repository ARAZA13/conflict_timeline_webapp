
const conflicts = [
  {
    year: "1947–1948",
    title: "First Kashmir War",
    context: "Triggered by Pakistan-backed tribal invasions into the princely state of Jammu and Kashmir after Partition. The Maharaja's accession to India prompted Indian military intervention. The UN mediated a ceasefire in 1949, leading to the creation of the Line of Control but no final resolution. The World Bank began engaging with water-sharing issues, eventually laying groundwork for the Indus Waters Treaty.",
    details: [
      "Pakistan: Muslim League (Governor-General Muhammad Ali Jinnah)",
      "Economic Outlook - Pakistan: Newly formed state facing fiscal and logistical challenges.",
      "GDP and GDP per capita - Pakistan: GDP ~$10 billion, GDP per capita ~$100.",
      "India: Indian National Congress (PM Jawaharlal Nehru)",
      "Economic Outlook - India: Nation-building phase with agrarian base.",
      "GDP and GDP per capita - India: GDP ~$30 billion, GDP per capita ~$90.",
      "World Bank: Early involvement, helped mediate water sharing that laid the foundation for the Indus Waters Treaty."
    ]
  },
  {
    year: "1965",
    title: "Second Kashmir War",
    details: [
      "Pakistan: Military regime under President Ayub Khan",
      "Economic Outlook - Pakistan: Fast-growing economy due to US aid and agricultural reforms.",
      "GDP and GDP per capita - Pakistan: GDP ~$12 billion, GDP per capita ~$120.",
      "India: Indian National Congress (PM Lal Bahadur Shastri)",
      "Economic Outlook - India: Focused on industrialization under Five-Year Plans.",
      "GDP and GDP per capita - India: GDP ~$60 billion, GDP per capita ~$110.",
      "World Bank: Actively supported development projects and post-conflict stabilization."
    ]
  },
  {
    year: "1971",
    title: "Bangladesh Liberation War",
    details: [
      "Pakistan: Military regime under President Yahya Khan",
      "Economic Outlook - Pakistan: Severely disrupted by civil war.",
      "GDP and GDP per capita - Pakistan: GDP ~$11 billion, GDP per capita ~$130.",
      "India: Indian National Congress (PM Indira Gandhi)",
      "Economic Outlook - India: Strained due to refugee crisis and inflation.",
      "GDP and GDP per capita - India: GDP ~$90 billion, GDP per capita ~$150.",
      "World Bank: Major aid and development support post-conflict, especially to Bangladesh."
    ]
  },
  {
    year: "1999",
    title: "Kargil War",
    details: [
      "Pakistan: Pakistan Muslim League (PM Nawaz Sharif)",
      "Economic Outlook - Pakistan: Hit by sanctions and instability.",
      "GDP and GDP per capita - Pakistan: GDP ~$75 billion, GDP per capita ~$500.",
      "India: Bharatiya Janata Party (PM Atal Bihari Vajpayee)",
      "Economic Outlook - India: Liberalized economy gaining momentum.",
      "GDP and GDP per capita - India: GDP ~$470 billion, GDP per capita ~$440.",
      "World Bank: Continued infrastructure development; encouraged conflict de-escalation."
    ]
  },
  {
    year: "2001–2002",
    title: "India–Pakistan Standoff",
    details: [
      "Pakistan: Military regime under President Pervez Musharraf",
      "Economic Outlook - Pakistan: Reliant on foreign aid and remittances.",
      "GDP and GDP per capita - Pakistan: GDP ~$75 billion, GDP per capita ~$520.",
      "India: Bharatiya Janata Party (PM Atal Bihari Vajpayee)",
      "Economic Outlook - India: Economic reform continued despite military costs.",
      "GDP and GDP per capita - India: GDP ~$500 billion, GDP per capita ~$480.",
      "World Bank: Ongoing support in health, education, and power sectors; urged peace talks."
    ]
  },
  {
    year: "2008",
    title: "Mumbai Attacks",
    details: [
      "Pakistan: Pakistan Peoples Party (PM Yousaf Raza Gillani)",
      "Economic Outlook - Pakistan: Facing inflation and global financial pressures.",
      "GDP and GDP per capita - Pakistan: GDP ~$170 billion, GDP per capita ~$1,000.",
      "India: Indian National Congress (PM Manmohan Singh)",
      "Economic Outlook - India: Rapid growth temporarily shaken.",
      "GDP and GDP per capita - India: GDP ~$1.2 trillion, GDP per capita ~$1,000.",
      "World Bank: Continued development funding with caution amid security concerns."
    ]
  },
  {
    year: "2016",
    title: "Uri Attack and Surgical Strikes",
    details: [
      "Pakistan: Pakistan Muslim League (PM Nawaz Sharif)",
      "Economic Outlook - Pakistan: Dependent on CPEC investments and external loans.",
      "GDP and GDP per capita - Pakistan: GDP ~$280 billion, GDP per capita ~$1,500.",
      "India: Bharatiya Janata Party (PM Narendra Modi)",
      "Economic Outlook - India: Strong domestic growth with focus on infrastructure.",
      "GDP and GDP per capita - India: GDP ~$2.3 trillion, GDP per capita ~$1,700.",
      "World Bank: Supported development programs; called for restraint on both sides."
    ]
  },
  {
    year: "2019",
    title: "Pulwama Attack and Balakot Airstrikes",
    details: [
      "Pakistan: Pakistan Tehreek-e-Insaf (PM Imran Khan)",
      "Economic Outlook - Pakistan: Crisis-led IMF bailout sought.",
      "GDP and GDP per capita - Pakistan: GDP ~$280 billion, GDP per capita ~$1,400.",
      "India: Bharatiya Janata Party (PM Narendra Modi)",
      "Economic Outlook - India: Growth slowing due to global headwinds.",
      "GDP and GDP per capita - India: GDP ~$2.9 trillion, GDP per capita ~$2,100.",
      "World Bank: Emphasized regional cooperation for sustainable growth."
    ]
  },
  {
    year: "2025",
    title: "Pahalgam Massacre, Diplomatic Crisis, and Water Dispute",
    details: [
      "Pakistan: Pakistan Muslim League (PM Hanif Abbasi)",
      "Economic Outlook - Pakistan: In economic crisis with rising debt and falling reserves.",
      "GDP and GDP per capita - Pakistan: GDP ~$340 billion, GDP per capita ~$1,300.",
      "India: Bharatiya Janata Party (PM Narendra Modi)",
      "Economic Outlook - India: Slower growth amid geopolitical risks and inflation.",
      "GDP and GDP per capita - India: GDP ~$3.9 trillion, GDP per capita ~$2,700.",
      "Water Crisis - Pakistan raised the issue at international forums, citing existential threat.",
      "Water Crisis - India threatened to revise water allocations under the Indus Waters Treaty.",
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
