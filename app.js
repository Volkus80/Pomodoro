const watch = document.querySelector('.round');

for (let i = 1; i <= 60; i++) {
    let span = document.createElement('span');
    span.dataset.num = i;
    span.className = 'watchItem';
    span.style.transform = `rotate(calc(360deg/60*${span.dataset.num}))`; 
    watch.append(span);
}

// Кнопка меню

const settingButton = document.querySelector('.setting');//кнопка меню
const menu = document.querySelector('.setting_menu');

settingButton.addEventListener('click', function() {
    menu.classList.toggle('hidden');
    
});

// Настройки меню

const pluses = menu.querySelectorAll('.plus');
const minuses = menu.querySelectorAll('.minus');

for (let plus of pluses) {
    plus.addEventListener('click', increase);
}

for (let minus of minuses) {
    minus.addEventListener('click', decrease);
}
function increase() {
    let input = this.parentElement.querySelector('input');
    input.value = +input.value + 1;
    if (input.value == input.dataset.max) {
        this.removeEventListener('click', increase);
    }
    this.parentElement.querySelector('.minus').addEventListener('click', decrease);
}

function decrease() {
    let input = this.parentElement.querySelector('input');
    input.value = +input.value - 1;
    if (input.value == input.dataset.min) {
        this.removeEventListener('click', decrease);
    }
    this.parentElement.querySelector('.plus').addEventListener('click', increase);
}

// Основной функционал
// Кнопка
const main = document.querySelector('.main');
const startButton = main.querySelector('.button span');
const jump = main.querySelector('.jump');
const reset = main.querySelector('.reset');
const minutes = main.querySelector('.minutes');
const seconds = main.querySelector('.seconds');
const mark = main.querySelector('.mark');



let timerId;
startButton.addEventListener('click', function() {
    this.classList.toggle('pause');
    this.classList.toggle('start');
    let i = 0, j = 0, k = 0;
    if (this.classList.contains('pause')){
        timerId = setInterval(function() {
            seconds.innerHTML = normNum(i);
            mark.style.transform = `rotate(calc(6*${i}deg))`;
            i++;
            j++;
            if (i == 60) {
                i = 0;
            }
            if (j > 60)  {
                j=i;
                k++;
                minutes.innerHTML = normNum(k);
            }  
        }, 1000);
    }
    if (this.classList.contains('start')) {
        clearInterval(timerId);
    }
});

function normNum(num) {
    if (String(num).length == 1) {
        return '0'+num
    } else {
        return num;
    }
}






