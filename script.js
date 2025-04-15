// js here 

console.log("site is connected ");

const funFacts = [
  {
    text: "First-gen students make up nearly 1/3 of all college students in the U.S. 🎓",
    img: "pic4.jpg",
    alt: "Colleges in the US"
  },
  {
    text: "Joining a club your first year boosts your chance of staying in school by 60%! 💬",
    img: "pic5.jpg",
    alt: "Working together to problem solve"
  },
  {
    text: "You're not alone — over 4.5 million U.S. students are first-gen! 🌎",
    img: "pic2.jpg",
    alt: "Students coming together to show they are proud to be first generation college students "
  }
];

const container = document.getElementById("fun-fact");

const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

container.innerHTML = `
  <img src="${randomFact.img}" alt="${randomFact.alt}" />
  <div class="text">
    <h3>💡 Fun Fact</h3>
    <p>${randomFact.text}</p>
  </div>
`;