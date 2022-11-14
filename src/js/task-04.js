// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue

const counterValue = 0;

const btnDecrement = document.querySelector("[data-action='decrement']");
const btnIncrement = document.querySelector("[data-action='increment']");
const value = document.querySelector('#value');


btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    return counterValue;
});

btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    return counterValue;
    console.log(counterValue)

});

