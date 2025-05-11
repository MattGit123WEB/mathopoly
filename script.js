function showMessage() {
  const facts = [
    "Zero is the only number that can't be represented in Roman numerals.",
    "A googol is 1 followed by 100 zeros!",
    "Pi never ends and never repeats.",
    "A triangle’s angles always add up to 180°."
  ];
  const fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("fact").textContent = fact;
}
