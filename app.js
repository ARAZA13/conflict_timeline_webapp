const timelineData = [
  {
    year: "1947-48",
    event: "First Kashmir War",
    indiaGovt: "Indian National Congress (INC)",
    pakistanGovt: "Muslim League",
    educationStats: {
      india: { literacy: "18%", schoolEnrollment: "N/A" },
      pakistan: { literacy: "16%", schoolEnrollment: "N/A" }
    },
    analysis: "Post-partition upheaval; minimal focus on education due to nation-building priorities."
  },
  {
    year: "1965",
    event: "Second Kashmir War",
    indiaGovt: "INC",
    pakistanGovt: "Ayub Khan's Military Govt",
    educationStats: {
      india: { literacy: "28%", schoolEnrollment: "45%" },
      pakistan: { literacy: "21%", schoolEnrollment: "32%" }
    },
    analysis: "Military spending surged; education reforms in both countries stagnated."
  },
  {
    year: "1971",
    event: "Bangladesh Liberation War",
    indiaGovt: "INC (Indira Gandhi)",
    pakistanGovt: "Yahya Khan's Military Govt",
    educationStats: {
      india: { literacy: "34%", schoolEnrollment: "50%" },
      pakistan: { literacy: "24%", schoolEnrollment: "35%" }
    },
    analysis: "India’s focus on stabilizing borders and internal insurgencies; Pakistan’s education severely disrupted post-separation."
  },
  {
    year: "1984",
    event: "Operation Meghdoot (Siachen)",
    indiaGovt: "INC (Indira Gandhi)",
    pakistanGovt: "Zia-ul-Haq's Military Govt",
    educationStats: {
      india: { literacy: "43%", schoolEnrollment: "56%" },
      pakistan: { literacy: "26%", schoolEnrollment: "38%" }
    },
    analysis: "India slowly increasing education access; Pakistan's heavy militarization detracted from education investment."
  },
  {
    year: "1998",
    event: "Nuclear Tests (Pokhran-II)",
    indiaGovt: "BJP",
    pakistanGovt: "Nawaz Sharif (PML-N)",
    educationStats: {
      india: { literacy: "61%", schoolEnrollment: "65%" },
      pakistan: { literacy: "43%", schoolEnrollment: "45%" }
    },
    analysis: "Strategic competition prioritized over human development; World Bank warned of social investment decline."
  },
  {
    year: "1999",
    event: "Kargil War",
    indiaGovt: "BJP (Atal Bihari Vajpayee)",
    pakistanGovt: "Military Government (Musharraf)",
    educationStats: {
      india: { literacy: "62%", schoolEnrollment: "66%" },
      pakistan: { literacy: "45%", schoolEnrollment: "46%" }
    },
    analysis: "Short-term conflict slowed education funding increases, especially in Pakistan."
  },
  {
    year: "2001-02",
    event: "Parliament Attack Crisis",
    indiaGovt: "BJP (Atal Bihari Vajpayee)",
    pakistanGovt: "Military Government (Musharraf)",
    educationStats: {
      india: { literacy: "65%", schoolEnrollment: "69%" },
      pakistan: { literacy: "47%", schoolEnrollment: "48%" }
    },
    analysis: "Increased defense budgets; Pakistan education reforms slowed amid international tensions."
  },
  {
    year: "2008",
    event: "Mumbai Attacks",
    indiaGovt: "INC (Manmohan Singh)",
    pakistanGovt: "Pakistan People's Party (PPP)",
    educationStats: {
      india: { literacy: "70%", schoolEnrollment: "75%" },
      pakistan: { literacy: "55%", schoolEnrollment: "55%" }
    },
    analysis: "India retained education growth despite tensions; Pakistan’s external pressures hampered education budgets."
  },
  {
    year: "2016",
    event: "Surgical Strikes (Post-Uri)",
    indiaGovt: "BJP (Narendra Modi)",
    pakistanGovt: "PML-N (Nawaz Sharif)",
    educationStats: {
      india: { literacy: "74%", schoolEnrollment: "78%" },
      pakistan: { literacy: "58%", schoolEnrollment: "57%" }
    },
    analysis: "Security prioritization in Pakistan; India emphasized 'Skill India' while balancing security demands."
  },
  {
    year: "2019",
    event: "Balakot Airstrike + Removal of Article 370",
    indiaGovt: "BJP (Narendra Modi)",
    pakistanGovt: "PTI (Imran Khan)",
    educationStats: {
      india: { literacy: "77%", schoolEnrollment: "82%" },
      pakistan: { literacy: "60%", schoolEnrollment: "58%" }
    },
    analysis: "Education innovation vs political tensions: India's reforms continued, Pakistan saw rising extremism pressures."
  },
  {
    year: "2023",
    event: "G20 Kashmir Dispute",
    indiaGovt: "BJP (Narendra Modi)",
    pakistanGovt: "Caretaker Govt",
    educationStats: {
      india: { literacy: "79%", schoolEnrollment: "85%" },
      pakistan: { literacy: "61%", schoolEnrollment: "59%" }
    },
    analysis: "India globally projecting Kashmir normalcy; Pakistan grappling with internal instability impacting schooling."
  },
  {
    year: "2024",
    event: "Indus Treaty Review",
    indiaGovt: "BJP (Narendra Modi)",
    pakistanGovt: "Caretaker Govt",
    educationStats: {
      india: { literacy: "80%", schoolEnrollment: "87%" },
      pakistan: { literacy: "62%", schoolEnrollment: "60%" }
    },
    analysis: "Water tensions raising broader sustainability concerns; indirect impacts on rural education likely."
  },
  {
    year: "2025",
    event: "Suspension of Indus Treaty",
    indiaGovt: "BJP (Narendra Modi)",
    pakistanGovt: "PML-N Coalition (expected)",
    educationStats: {
      india: { literacy: "81%", schoolEnrollment: "89%" },
      pakistan: { literacy: "63%", schoolEnrollment: "62%" }
    },
    analysis: "Potential for major development disruption in Pakistan if water crisis escalates; education systems vulnerable."
  }
];

// Code to render timeline dynamically here...
