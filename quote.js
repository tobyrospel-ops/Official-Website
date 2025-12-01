const quotes = [
  {
    quote: "The unexamined life is not worth living.",
    philosopher: "Socrates",
  },
  {
    quote: "I think, therefore I am.",
    philosopher: "René Descartes",
  },
  {
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    philosopher: "Aristotle",
  },
  {
    quote: "Man is born free, and everywhere he is in chains.",
    philosopher: "Jean-Jacques Rousseau",
  },
  {
    quote: "That which does not kill us makes us stronger.",
    philosopher: "Friedrich Nietzsche",
  },
  {
    quote: "You have power over your mind—not outside events. Realize this, and you will find strength.",
    philosopher: "Marcus Aurelius",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    philosopher: "Socrates",
  },
  {
    quote: "Between stimulus and response, there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.",
    philosopher: "Viktor E. Frankl",
  },
  {
    quote: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
    philosopher: "Jean-Paul Sartre",
  },
  {
    quote: "Nothing endures but change.",
    philosopher: "Heraclitus",
  }
];

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");
  if (!quoteText || !quoteAuthor) {
    console.error("Error: Could not find HTML elements with IDs 'quote-text' or 'quote-author'.");
    return;
  }

  quoteText.classList.remove("fade");

  setTimeout(() => {
    quoteText.textContent = quotes[random].quote; 
    quoteAuthor.textContent = "— " + quotes[random].philosopher; 
    
    quoteText.classList.add("fade");
  }, 100);
}