
function createMenuHtml() {
  const content = document.getElementById("content");

  const newHead1 = document.createElement("h1");
  newHead1.textContent = "Menu";

  content.appendChild(newHead1);

  const newHead2 = document.createElement("h2");
  newHead2.textContent = "Just try our best Pizzas's compositions:";

  content.appendChild(newHead2);

  const divDescription = document.createElement("div");

  divDescription.id = "description";

  const newList = document.createElement("ul");

  const myList = ["Margarita", "Prosciutto", "Pepperoni", "Hawaiian", "Supreme"]

  myList.forEach(element => {
    let li = document.createElement("li")
    li.innerHTML = element;
    newList.appendChild(li)
    
  });


  // newParagraph.id = "text-about";

  // newParagraph.textContent = `Our Chef is from Italy. He knows how to make it. Trust me !
  // You can choose whatever you want
  // Every Pizza is delicious and exceptional because Pizza is our life`

  divDescription.appendChild(newList);
  content.appendChild(divDescription);

  // content.appendChild(divDescription)

}

export {createMenuHtml}