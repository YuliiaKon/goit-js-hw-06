const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const totalIngredients = document.querySelector('#ingredients');

const items = ingredients.map(el => {
  const ingrEl = document.createElement('li');
  ingrEl.textContent = el;
  ingrEl.classList.add('item');
  return ingrEl;
})

totalIngredients.append(...items);

console.log(totalIngredients)