// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().

const ingridientsList = document.querySelector('#ingredients');

 
const createElements = (ingredients) => {
  return ingredients.map((ingridient, index) => {
    const ingridientsListItem = document.createElement('li');
    ingridientsListItem.textContent = ingredients[index];
    return ingridientsListItem;
  });

};


const items = createElements(ingredients);
ingridientsList.append(...items);
console.log(ingridientsList);