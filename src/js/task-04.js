// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue

const counterValue = 0;

const btnDecrement = document.querySelector("[data-action='decrement']");
const btnIncrement = document.querySelector("[data-action='increment']");


btnDecrement.addEventListener('click', event => {
    console.log(event);
});

btnIncrement.addEventListener('click', () => {

});
