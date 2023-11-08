import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form')
const DATA_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onSubmitForm);

let dataForm = JSON.parse(localStorage.getItem(DATA_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(e) {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(DATA_KEY, JSON.stringify(dataForm));
};

function reloadPage() {
    if (dataForm) {
        email.value = dataForm.value || '';
        message.value = dataForm.value || '';
    };
};

function onSubmitForm(e) {
    e.preventDefault();
    console.log({ email: email.value, message: message.value });
    
    if (email.value === '' || message.value === '') {
        return alert('Please fill in all required fields!');
    };

    localStorage.removeItem(DATA_KEY);
    e.currentTarget.reset();
    dataForm = {};
};


