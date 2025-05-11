const locations = [
  "Go", "Mediterranean Avenue", "Community Chest", "Baltic Avenue", "Income Tax",
  "Reading Railroad", "Oriental Avenue", "Chance", "Vermont Avenue", "Connecticut Avenue",
  "Jail / Just Visiting", "St. Charles Place", "Electric Company", "States Avenue", "Virginia Avenue",
  "Pennsylvania Railroad", "St. James Place", "Community Chest", "Tennessee Avenue", "New York Avenue",
  "Free Parking", "Kentucky Avenue", "Chance", "Indiana Avenue", "Illinois Avenue",
  "B&O Railroad", "Atlantic Avenue", "Ventnor Avenue", "Water Works", "Marvin Gardens",
  "Go to Jail", "Pacific Avenue", "North Carolina Avenue", "Community Chest", "Pennsylvania Avenue",
  "Short Line Railroad", "Chance", "Park Place", "Luxury Tax", "Boardwalk"
];

const questions = [
  { q: "Solve for x: 3x + 5 = 20", a: "x = 5" },
  { q: "Factor: x² - 9", a: "(x - 3)(x + 3)" },
  { q: "Solve: 2(x - 4) = 10", a: "x = 9" },
  { q: "Simplify: (x²)(x³)", a: "x⁵" },
  { q: "What is the slope of the line y = 2x + 7?", a: "2" },
  { q: "Solve for x: x² = 49", a: "x = ±7" },
  { q: "Expand: (x + 2)²", a: "x² + 4x + 4" },
  { q: "Solve: 5x - 3 = 2x + 6", a: "x = 3" },
  { q: "Factor: x² + 5x + 6", a: "(x + 2)(x + 3)" }
];

function showLocation() {
  const input = document.getElementById("spaceInput").value;
  const result = document.getElementById("result");
  const questionBox = document.getElementById("question");
  const answerBox = document.getElementById("answer");
  const revealBtn = document.getElementById("revealBtn");

  const index = parseInt(input) - 1;

  if (index >= 0 && index < locations.length) {
    result.textContent = `You landed on: ${locations[index]}`;

    // Random question
    const rand = Math.floor(Math.random() * questions.length);
    questionBox.textContent = `Question: ${questions[rand].q}`;
    answerBox.textContent = "";
    revealBtn.style.display = "inline-block";
    revealBtn.setAttribute("data-answer", questions[rand].a);
  } else {
    result.textContent = "Please enter a number from 1 to 40.";
    questionBox.textContent = "";
    answerBox.textContent = "";
    revealBtn.style.display = "none";
  }
}

function revealAnswer() {
  const answer = document.getElementById("revealBtn").getAttribute("data-answer");
  document.getElementById("answer").textContent = `Answer: ${answer}`;
}
