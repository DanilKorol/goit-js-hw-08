import throttle from 'lodash.throttle';

const formRefs = {
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
    form: document.querySelector('.feedback-form'),
};

const STORAGE_KEY = 'feedback-form-state';
const userData = {};

updateUserData();

formRefs.form.addEventListener('input', throttle(onFormInput, 500));
formRefs.form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
    const key = event.target.name;
    const value = event.target.value;
    userData[key] = value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
};

function onFormSubmit(event) {
    event.preventDefault();

    console.log(userData);

    event.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
};

function updateUserData() {
    const data = localStorage.getItem(STORAGE_KEY);
    const parseData = JSON.parse(data) || '';

    const email = parseData.email;
    const message = parseData.message;
    
    if (email) {
        formRefs.email.value = email;
    }
    if (message) {
        formRefs.message.value = message;
    }
};