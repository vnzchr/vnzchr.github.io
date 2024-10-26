// Array of compliments to display
const compliments = [
  "You’re a shining star!",
  "Your smile lights up the room!",
  "You make the world a better place.",
  "There’s magic in everything you do!",
  "You deserve all the hugs today!",
  "You're wonderfully unique!",
  "You're a joy to be around!",
  "You brighten even the gloomiest days!"
];

// List of background colors to rotate through
const bgColors = ["#ffebf0", "#e0f7fa", "#fff4e6", "#e8eaf6", "#e1bee7"];

// Function to generate a random compliment
function generateCompliment() {
  const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.querySelector('.compliment').textContent = randomCompliment;

  // Randomly change background color
  const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Event listener for the button click
document.querySelector('.button').addEventListener('click', generateCompliment);
