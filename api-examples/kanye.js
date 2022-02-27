const loadQuotes = () => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = quotes => {
    const quoteELement = document.getElementById('quote');
    quoteELement.innerText = quotes.quote;
}