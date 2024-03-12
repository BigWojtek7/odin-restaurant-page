
function createHomeHtml() {
  const content = document.getElementById("content");

  const newHead1 = document.createElement("h1");
  newHead1.textContent = "Italian Restaurant";

  content.appendChild(newHead1);

  const newHead2 = document.createElement("h2");
  newHead2.textContent = "We are specialize at making Pizzas";

  content.appendChild(newHead2);

  const divDescription = document.createElement("div");

  divDescription.id = "description";

  const newParagraph = document.createElement("p");
  newParagraph.id = "text-about";

  newParagraph.textContent = `Our Chef is from Italy. He knows how to make it. Trust me !
  You can choose whatever you want
  Every Pizza is delicious and exceptional because Pizza is our life`

  divDescription.appendChild(newParagraph);
  content.appendChild(divDescription);

  content.appendChild(divDescription)

}

export {createHomeHtml}