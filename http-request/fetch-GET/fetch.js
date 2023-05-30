

const btn = document.querySelector('.button')

btn.addEventListener('click', function (e) {
    //GET
    fetch('https://randomuser.me/api/')
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
            return new Error('Error :/')
        })
        .then(data => {
            console.log("data:", data.results[0]);
        })
        .catch(err => {
            console.log(err);
        })

})

