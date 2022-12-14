
const input = document.querySelector('input');

input.addEventListener('blur', checkLength);

function checkLength(event) {
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}
