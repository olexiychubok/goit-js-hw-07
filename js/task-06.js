// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const input = document.querySelector('#validation-input');
const inputAttribute = Number(input.getAttribute("data-length"));
console.log(inputAttribute)

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (input.value.length !== inputAttribute) {
    const  class1 = "invalid";
    const class2 = "valid";
    changeClasses(class1,class2)
    }

    else {
    const class2 = "invalid";
    const class1 = "valid";
    changeClasses(class1,class2)
       }
};


function changeClasses(class1,class2) {
    if(input.classList.contains(class2)){
    input.classList.remove(class2);
    }
     input.classList.add(class1);
}