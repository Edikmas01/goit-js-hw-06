const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsItem = ingredients.map((item) => {
  const elem = document.createElement('li')
  elem.textContent = item;
  return elem;
})
console.log(ingredientsItem);

console.log(document.querySelector("#ingredients"));
document.querySelector("#ingredients").append(...ingredientsItem);