// task 1

const categoriesEl = document.querySelector("#categories");
const categoiesList = categoriesEl.children;
console.log("Number of categoies:", categoiesList.length);

// task 2

let counter = 0;

[...categoiesList].forEach(category => {
  const titleEl = category.firstElementChild;
  const listEl = titleEl.nextElementSibling;

  const title = titleEl.textContent;
  const listCounter = listEl.childElementCount;
  console.log(`Category: ${title}\nElements: ${listCounter}`);
});
