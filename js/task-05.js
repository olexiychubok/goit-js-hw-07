// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs={
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};


refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (refs.input.value === '') {
       
       refs.output.innerHTML = 'незнакомец';
    }
    else {

        refs.output.innerHTML = refs.input.value;
    }

};