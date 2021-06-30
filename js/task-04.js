// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterValueRef = document.querySelector('span#value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const handleClick = event => {
    switch (event.currentTarget.dataset.action) {
      case 'increment':
        counterValue += 1;
        break;
  
      case 'decrement':
        counterValue -= 1;
        break;
    }
    updateInterface();
    logMessage(event);
  };
  
  const logMessage = event => {
    console.log(
      `${capitalize(event.currentTarget.dataset.action)} ${
        event.currentTarget.type
      } generates ${event.type} event. Current counter value = ${counterValue}`,
    );
  };
  
  const capitalize = word =>
    word
      .split('')
      .map((letter, index) =>
        index ? letter.toLowerCase() : letter.toUpperCase(),
      )
      .join('');
  
  const updateInterface = () => (counterValueRef.textContent = counterValue);
  
  decrementButton.addEventListener('click', handleClick);
  incrementButton.addEventListener('click', handleClick);