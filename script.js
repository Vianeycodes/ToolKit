//js here 


console.log("site is connected ");

const funFacts = [
    {
      text: "First-gen students make up nearly 1/3 of all college students in the U.S. 🎓",
      img: "images/fact1.jpg",
      alt: "Happy student raising hand"
    },
    {
      text: "Joining a club your first year boosts your chance of staying in school by 60%! 💬",
      img: "images/fact2.jpg",
      alt: "Students in a club meeting"
    },
    {
      text: "You're not alone — over 4.5 million U.S. students are first-gen! 🌎",
      img: "images/fact3.jpg",
      alt: "Diverse group of college students"
    }
  ];
  
  const container = document.getElementById("fun-fact");
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];   2
  
  container.innerHTML = `
    <img src="${randomFact.img}" alt="${randomFact.alt}" />
    <div class="text">
      <h3>💡 Fun Fact</h3>
      <p>${randomFact.text}</p>
    </div>
  `;