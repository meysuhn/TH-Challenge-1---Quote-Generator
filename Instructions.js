/*
1. Create an array of JavaScript objects to hold the data for your quotes - DONE. Joined up too HTML too.

2. Each quote object should have the following properties:
- A quote property which contains a string: the text of the quote to display on the page
- A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb"
- An optional citation property which contains a string identifying the publication the quote appears in. For example, "Famous Anonymous Jokes". If there is no known publication, then do not include this property on the object.
- An optional year property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object. - DONE.

3. Create a function named getRandomQuote which:
- selects a random quote object from the quotes array
- returns the randomly selected quote object

4. Create a function named printQuote which follows these rules:
- printQuote calls the getRandomQuote function and stores the returned quote object in a variable
- printQuote constructs a string using the different properties of the quote object using the following HTML template: <p class="quote"> [quote here] </p> <p class="source"> [source here] <span class="citation"> [citation here] </span> <span class="year"> [year here] </span> </p>
- printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing
- printQuote displays the final HTML string to the page. You can use the following JS snippet to accomplish that: document.getElementById('quote-box').innerHTML

5. Make sure you add code comments to document how your functions work

6. Use JSHint (see the link in the Project Resources section) to analyze your JavaScript and identify any errors or code-style problems.

7. Make sure your program is free of syntax errors. You can monitor any errors by looking at the Developer Tools console in your browser.

8. Before you submit your project for review, make sure you can check off all of the items on the Student Project Submission Checklist. The checklist is designed to help you make sure you’ve met the grading requirements and that your project is complete and ready to be submitted!

*/

