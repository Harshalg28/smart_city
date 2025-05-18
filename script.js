const colleges = [
  {
    name: "BharatRatna Indira Gandhi College of Engineering Kegaon",
    location: "Solapur, Maharashtra",
    image: "AA.jpeg",
    url: "https://collegedunia.com/college/13049-bharatratna-indira-gandhi-college-of-engineering-bigce-solapurn"
  },
  {
    name: "N. K. Orchid College Of Engineering & Technology",
    location: "Solapur, Maharashtra",
    image: "BB.jpeg",
    url: "https://www.orchidengg.ac.in"
  },
  {
    name: "MIT Vishwaprayag University",
    location: "Solapur, Maharashtra",
    image: "CC.png",
    url: "https://mitjuniorcolleges.edu.in/solapur-home/n"
  },
  {
    name: "Walchand Institute of Technology",
    location: "Solapur, Maharashtra",
    image: "DD.jpeg",
    url: "https://www.witsolapur.org"
  },
  {
    name: "NB Navale Sinhgad College of Engineering, Kegaon",
    location: "Solapur, Maharashtra",
    image: "EE.jpeg",
    url: "http://sinhgadsolapur.org/Edsite/about-us/"
  }
];

const container = document.getElementById('college-container');

colleges.forEach(college => {
  const card = document.createElement('div');
  card.className = 'college-card';
  card.innerHTML = `
    <a href="${college.url}" target="_blank" style="text-decoration: none; color: inherit;">
      <img src="${college.image}" alt="${college.name}">
      <h2>${college.name}</h2>
      <p>${college.location}</p>
    </a>
  `;
  container.appendChild(card);
});
