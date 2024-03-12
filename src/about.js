
function createAboutHtml() {
  const content = document.getElementById("content");

  const newHead1 = document.createElement("h1");
  newHead1.textContent = "Where you find us:";

  content.appendChild(newHead1);

  const newHead2 = document.createElement("h2");
  newHead2.textContent = "NEAPOL";

  content.appendChild(newHead2);

  const divDescription = document.createElement("div");

  divDescription.id = "description";

  const newParagraph = document.createElement("p");
  newParagraph.id = "text-about";

  newParagraph.textContent = `Piazza Municipio (Palazzo San Giacomo) 80100 Naples (NA) Italia`

  divDescription.appendChild(newParagraph);
  content.appendChild(divDescription);

  content.appendChild(divDescription)

}

export {createAboutHtml}