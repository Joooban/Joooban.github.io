const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const button = document.getElementById('newQuoteBtn');
const btn = document.getElementById('copyQuoteBtn');

// Function to fetch a random quote
function fetchQuote() {
    // Show loading message while fetching
    quoteElement.textContent = 'Loading quote...';
    authorElement.textContent = '';

    // Fetch all quotes from the DummyJSON API
    fetch('https://dummyjson.com/quotes')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Get a random quote from the list of quotes
            const randomIndex = Math.floor(Math.random() * data.quotes.length);
            const randomQuote = data.quotes[randomIndex];

            // Display the quote and author
            quoteElement.textContent = `"${randomQuote.quote}"`;
            authorElement.textContent = `- ${randomQuote.author}`;
        })
        .catch(error => {
            // Handle any errors that occur during the fetch
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to load quote. Please try again.';
            authorElement.textContent = '';
        });
}
function copyQuoteToClipboard() {
    const quoteText = quoteElement.textContent;
    navigator.clipboard.writeText(quoteText)
        .then(() => {
            alert('Quote copied to clipboard!');
        })
        .catch(error => {
            console.error('Error copying to clipboard:', error);
        });
}


// Fetch a quote when the button is clicked
button.addEventListener('click', fetchQuote);

btn.addEventListener('click',copyQuoteToClipboard);

// Fetch a quote when the page loads
fetchQuote();