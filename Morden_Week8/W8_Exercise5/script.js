const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const button = document.getElementById('newQuoteBtn');

function fetchQuote() {
    quoteElement.textContent = 'Loading quote...';
    authorElement.textContent = '';

    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.type === "single") {
            quoteElement.textContent = `"${data.joke}"`;
            authorElement.textContent = "- JokeAPI";
        } else if (data.type === "twopart") {
            quoteElement.textContent = `"${data.setup}"`;
            authorElement.textContent = ` ${data.delivery}`;
        }
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
        quoteElement.textContent = 'Failed to load joke. Please try again.';
        authorElement.textContent = '';
    });
}

button.addEventListener('click', fetchQuote);
fetchQuote();