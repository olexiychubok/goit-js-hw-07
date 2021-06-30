// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
    input: document.querySelector('input'),
    btnRender: document.querySelector('[data-action="render"]'),
    btnDestroy: document.querySelector('[data-action="destroy"]'),
    divContainer: document.querySelector('#boxes'),
};

refs.btnRender.addEventListener('click', getAmount);
refs.btnDestroy.addEventListener('click', destroyOnClick);

function getAmount() {
    const amount = Number(refs.input.value);

    
 createBoxes(amount);
};


function createBoxes(amount) {

    let defaultSize = 30;
   
    new Array(amount).fill(0).map(( value,index) => {
        
        let size = defaultSize + index * 10;
        const divEl = document.createElement('div');
        divEl.style.cssText = `width:${size}px;height:${size}px;background-color:rgb(${randomRgb(0, 255)},${randomRgb(0, 255)},${randomRgb(0, 255)});`
       console.log(divEl);
        refs.divContainer.append(divEl);
     
    }
    );
};



function destroyOnClick(){
    refs.input.value = '';
    refs.divContainer.innerHTML = '';
};

function randomRgb(min,max) {
   return Math.round(Math.random() * (max - min) + min);
};
