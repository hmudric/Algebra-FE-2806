var character = {
  name: "Eleven",
  show: "Stranger Things",
  portrayedBy: "Millie Bobby Brown",
};

const quotes = [
  "I'm going to my friends. I'm going home.",
  "Pure fuel! PURE FUEL! WOO!",
  "See? Zoomer.",
  "Bitchin.",
];
//1. Nadite prototip objekta "character" (naputak: koristite metode globalnog Object objekta).
// Nadite prototip tog prototipa. Ispisite ih.

var proto1 = Object.getPrototypeOf(character);
console.log(proto1);

var proto2 = Object.getPrototypeOf(proto1);
console.log(proto2);

//2. Dodajte prototipu objekta "character"
//funkciju koja vraća jedan (slucajno odabran) citat iz niz "quotes".
//2a
proto1.getQuote = function () {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
console.log(character.getQuote());
//2b

character.__protp__.getQuote2 = function () {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
onsole.log(character.getQuote2());
