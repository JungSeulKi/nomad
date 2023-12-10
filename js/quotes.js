

const quotes = [
    {
        quote:"aaaaaaa",
        author:"AAAAAA"
    },
    {
        quote:"bbbbbbb",
        author:"BBBBBB"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(toDaysQuote);

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;