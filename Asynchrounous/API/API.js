
// POST method
const firstname = document.querySelector('.firstname');
const lastname = document.querySelector('.lastname');
const password = document.querySelector('.password');
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const userData = {
        firstname: firstname.value,
        lastname: lastname.value,
        password: password.value,
    };

    fetch('https://randomuser.me/api/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then((res) => console.log(res))


});






//GET method
window.addEventListener('load', (e) => {
    fetch('https://randomuser.me/api/')
       .then(res=> res.json())
       .then((data) => console.log(data));
}) 