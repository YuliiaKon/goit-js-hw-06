const input = document.querySelector(`#font-size-control`)
const spanText = document.querySelector(`#text`)

input.addEventListener(`input`, sizeFunc)

spanText.style.fontSize = `${input.value}px`;

function sizeFunc() {
    spanText.style.fontSize = `${this.value}px`;
}
