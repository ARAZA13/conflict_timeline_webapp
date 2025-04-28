document.addEventListener("DOMContentLoaded", function () {
    const events = [
        {
            year: "1947-48",
            title: "First Kashmir War",
            description: "Military conflict over Kashmir. India: INC | Pakistan: Muslim League"
        },
        {
            year: "1965",
            title: "Second Kashmir War",
            description: "Full-scale war over Kashmir. India: INC | Pakistan: Ayub Khan's Military Govt"
        },
        {
            year: "1971",
            title: "Bangladesh Liberation War",
            description: "India intervenes, Pakistan splits. India: INC (Indira Gandhi) | Pakistan: Yahya Khan's Military Govt"
        },
        {
            year: "1984",
            title: "Operation Meghdoot",
            description: "India occupies Siachen Glacier. India: INC (Indira Gandhi) | Pakistan: Zia-ul-Haq's Military Govt"
        },
        {
            year: "1998",
            title: "Nuclear Tests",
            description: "Nuclear capability shown. India: BJP | Pakistan: Nawaz Sharif (PML-N)"
        },
        {
            year: "1999",
            title: "Kargil War",
            description: "Limited conflict in Kashmir. India: BJP (Vajpayee) | Pakistan: Musharraf's Military Govt"
        },
        {
            year: "2001-02",
            title: "Parliament Attack Crisis",
            description: "Massive military mobilization. India: BJP (Vajpayee) | Pakistan: Musharraf's Military Govt"
        },
        {
            year: "2008",
            title: "Mumbai Attacks",
            description: "Diplomatic isolation attempts. India: INC (Manmohan Singh) | Pakistan: PPP"
        },
        {
            year: "2016",
            title: "Surgical Strikes",
            description: "Cross-border strikes. India: BJP (Narendra Modi) | Pakistan: PML-N (Nawaz Sharif)"
        },
        {
            year: "2019",
            title: "Balakot Airstrike",
            description: "Aerial bombings inside Pakistan. India: BJP (Narendra Modi) | Pakistan: PTI (Imran Khan)"
        },
        {
            year: "2019",
            title: "Removal of Article 370",
            description: "Changed Kashmir's autonomy. India: BJP (Narendra Modi) | Pakistan: PTI (Imran Khan)"
        },
        {
            year: "2023",
            title: "G20 in Kashmir",
            description: "Diplomatic snubbing. India: BJP (Narendra Modi) | Pakistan: Caretaker Govt"
        },
        {
            year: "2024",
            title: "Indus Treaty Review",
            description: "Water pressure strategy. India: BJP (Narendra Modi) | Pakistan: Caretaker Govt"
        },
        {
            year: "2025",
            title: "Indus Treaty Suspension",
            description: "Formal suspension. India: BJP (Narendra Modi) | Pakistan: PML-N Coalition (expected)"
        }
    ];

    const timeline = document.getElementById("timeline");

    events.forEach((event, index) => {
        const div = document.createElement("div");
        div.className = `event ${index % 2 === 0 ? 'left' : 'right'}`;
        div.innerHTML = `<h3>${event.year}: ${event.title}</h3><p>${event.description}</p>`;
        timeline.appendChild(div);
    });

    const searchBar = document.getElementById("searchBar");
    searchBar.addEventListener("input", function () {
        const term = searchBar.value.toLowerCase();
        const eventDivs = document.querySelectorAll(".event");
        eventDivs.forEach(div => {
            if (div.textContent.toLowerCase().includes(term)) {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        });
    });
});
