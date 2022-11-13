
const form = document.querySelector('.login-form');

    form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);

    if (formData.get('email') === '' || formData.get('password') === '') {
        return alert('Не всі поля заповнені.');
    } else {
        const newClient = {
            email: formData.get('email'),
            password: formData.get('password'),
        };
        event.currentTarget.reset();
        console.log(newClient);
        return newClient;
    }
}

