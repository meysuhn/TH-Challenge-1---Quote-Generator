//array of objects containing the quotes
var quotesArray = [
  {
    quote: "Never fire a laser at a mirror.",
    source: "Larry Niven",
    type: "Category: Humour",
  },

  {
    quote: "The gods do not protect fools. Fools are protected by more capable fools.",
    source: "Larry Niven",
    citation: "Ringworld",
    year: "1970",
    type: "Category: Science Fiction",
  },
  {
    quote: "If you want me to treat your ideas with more respect, get some better ideas.",
    source: "John Scalzi",
    citation: "Your Hate Mail Will Be Graded: A Decade of Whatever, 1998-2008",
    year: "2008",
    type: "Category: Humour",
  },
  {
    quote: "Those who believe in telekinetics, raise my hand.",
    source: "Kurt Vonnegut",
    type: "Category: Humour",
  },
  {
    quote: "The ships hung in the sky, much the way that bricks don't",
    source: "Douglas Adams",
    citation: "The Hitchhikers Guide To The Galaxy",
    year: "1978",
    type: "Category: Science Fiction",
  },
  {
    quote: "Time is an illusion. Lunchtime doubly so.",
    source: "Douglas Adams",
    citation: "The Hitchhikers Guide To The Galaxy",
    year: "1978",
    type: "Category: Science Fiction",
  },
  {
    quote: "Frak!",
    source: "Various Characters",
    citation: "Battlestar Galactica",
    year: "1978-2010",
    type: "Category: Science Fiction Expletive",
  },
  {
    quote: prompt("Please say something original, profound and preferably humerous"),
    source: prompt("What is your name?"),
    year: new Date().getFullYear(),
    type: "Category: This quote may not stand the test of time...",
  },

];
