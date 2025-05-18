const touristPlaces = [
  {
    name: "Siddheshwar Temple",
    Image: "tm1.jpeg",
    description: "An iconic temple dedicated to Lord Shiva, located by the lake in the heart of the city.",
    link: "https://en.wikipedia.org/wiki/Siddheshwar_Temple,_Solapur"
  },
  {
    name: "Solapur Fort (Bhuikot Killa)",
    Image: "tt2.avif",
    description: "A historical fort built during the Bahmani rule, showcasing architectural heritage.",
    link: "https://en.wikipedia.org/wiki/Bhuikot_Fort"
  },
  {
    name: "Great Indian Bustard Sanctuary",
    Image: "tt3.jpg",
    description: "Wildlife sanctuary near Solapur, home to the endangered Great Indian Bustard.",
    link: "https://en.wikipedia.org/wiki/Nannaj"
  },
  {
    name: "ISKCON Temple Solapur",
    Image: "tm4.jpg",
    description: "The temple complex features a beautiful shrine adorned with intricate carvings and statues of Lord Krishna and Radha, creating a divine atmosphere.",
    link: "https://www.samedayagratour.co.in/temple/iskcon-temple-solapur/#google_vignette"
  },
  {
    name: "Moti Baug Lake",
    Image: "tt5.jpg",
    description: "Scenic spot known for birdwatching and natural beauty.",
    link: "https://www.tripadvisor.in/Attraction_Review-g1156435-d13396368-Reviews-Moti_Baug_Lake-Solapur_Maharashtra.html"
  }
];

const container = document.getElementById("places-list");

touristPlaces.forEach(place => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${place.Image}" alt="${place.name}" class="place-image">
    <h3>${place.name}</h3>
    <p>${place.description}</p>
    <a href="${place.link}" target="_blank">More Info</a>
  `;
  container.appendChild(card);
});
