const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

placeIngridients(ingredients);

/**
 * * Adds ingredients as a list to the existing #ingredients <ul> element
 *
 * @param {string[]} ingredientsArr - the list of ingredients
 */
function placeIngridients(ingredientsArr) {
  const markup = ingredientsArr.map(ingredient => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("item");
    return li;
  });

  const ingredientsList = document.querySelector("#ingredients");
  ingredientsList.append(...markup);
}
