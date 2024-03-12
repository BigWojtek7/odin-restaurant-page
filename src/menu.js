
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

  divDescription.appendChild(newList);
  content.appendChild(divDescription);

}

export {createMenuHtml}