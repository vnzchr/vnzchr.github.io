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

// Function to create a typewriter effect
function typeWriter(text, element, speed = 50) {
  let i = 0;
  element.textContent = ""; // Clear previous text

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Main function to generate a compliment with the typewriter effect
function generateCompliment() {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  const compliment = compliments[randomIndex];
  const complimentElement = document.querySelector('.compliment');

  // Trigger typewriter animation with the selected compliment
  typeWriter(compliment, complimentElement);
}

// Add event listener to the button
document.querySelector('.button').addEventListener('click', generateCompliment);
