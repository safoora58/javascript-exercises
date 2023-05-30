let users = [
    {
        id: 1,
        username: 'amin',
        password: 1010,
    },

    {
        id: 2,
        username: 'shayan',
        password: 2536,
    },

    {
        id: 3,
        username: 'ava',
        password: 8579,
    },
]

let jsonData = '[{"id":1,"username":"amin","password":1010},{"id":2,"username":"shayan","password":2536},{"id":3,"username":"ava","password":8579}]'

console.log(JSON.parse(jsonData));
 