const quoteContainer = document.querySelector("#quote-container");
const quoteElement = document.createElement("p");

function fetchQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => response.json())
    .then((jsonData) => {
      const quoteText = jsonData.quote;
      const author = jsonData.author;

      quoteElement.textContent = `"${quoteText}" 
       ${author}`;
      quoteContainer.appendChild(quoteElement);
    });
}

const quoteButton = document.createElement("button");
quoteButton.innerText = "Get Random Quote";
quoteButton.addEventListener("click", fetchQuote);

quoteContainer.appendChild(quoteButton);
