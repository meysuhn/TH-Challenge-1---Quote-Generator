window.onload = printQuote; //this ensures a quote is displayed when page first loads.
var coloursArray = ['#304D6D','#36b55c','#4A9586','#5F4BB6', '#CE5374', '#4E3D42', '#86A5D9', '#E06D06']; //for some reason if the coloursArray is placed inside the random_col() varaible the //function doesn't behave properly. Haven't figured why...Ask the community later...

var displayedQuote = ''; //holds the HTML string to display to page.

var shownColours = []; //part of random_col function

var shownQuotes = []; // part of getRandomQuote function

var timer; //for the setInterval

function random_col() { //changes the background colour of the body
    var randomColour = Math.floor((Math.random() * (coloursArray.length)));
    var splicedColour = coloursArray.splice(randomColour, 1)[0];
    shownColours.push(splicedColour);

        if (coloursArray.length === 0) {
            // Once all colours have been spliced out of original array, reset coloursArray to //the shownColours array, and then reset shownColours to an empty array
            coloursArray = shownColours;
            shownColours = [];
        }
    document.body.style.backgroundColor = splicedColour;
    }

function getRandomQuote() { //function to return the randomly selected quote object
    var randomQuote = Math.floor((Math.random() * (quotesArray.length)));
    var splicedQuote = quotesArray.splice(randomQuote, 1)[0];
        shownQuotes.push(splicedQuote);

        if (quotesArray.length === 0) {
            // Once all quotes have been spliced out of original array, reset quotesArray to //the shownQuotes array, and then reset shownQuotes to an empty array
            quotesArray = shownQuotes;
            shownQuotes = [];
        }
        //console.log(shownQuotes); This is helpful to observe if arrays working properly
        return splicedQuote; //
    }

function printQuote() {
    var localVariable = getRandomQuote(); //this is holding the value of the splicedQuote
    displayedQuote = ''; //this empties the variable's value to stop it storing each new string one on top of the other as the code repeats.
    displayedQuote+= '<p class= "quote">' + localVariable.quote + '</p>';
    displayedQuote += '<p class= "source">' + localVariable.source;
    if ( localVariable.citation !== undefined ) {
        displayedQuote += '<span class="citation">' + localVariable.citation + '</span>';
    }
    if ( localVariable.year !== undefined ) {
        displayedQuote += '<span class= "year">' + localVariable.year + '</span>';
    }
    if ( localVariable.type !== undefined ) {
        displayedQuote += '<p class = "type">' + localVariable.type + '</p>'+ '</p>';
    }
    random_col(); // Executing here ensures it's executed at the same time as printQuote.

    document.getElementById("quote-box").innerHTML = displayedQuote;
}

document.getElementById('loadQuote').addEventListener("click", goGoGo, false); //starts code off once button is clicked.


function goGoGo(){
    if(timer) {
        clearInterval(timer);
        } //Checking if a timer exists. If it does, we want to clear it

    printQuote();

    timer = setInterval(printQuote, 10000); // Now we set a fresh timer and hold on to it as a global variable
}
