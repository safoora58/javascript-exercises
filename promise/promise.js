
//promise

let myPromise = new Promise((resolve, reject) => {

    const loginckeck = false;

    setTimeout(() => {
        console.log("login check !!");
        if (loginckeck) {
            resolve();
        } else {
            reject();
        }

    }, 3000);
})


myPromise
    .then(() => {
        console.log("success");
    })
    .catch(() => {
        console.log("error");
    })






//usage of promise
const books = [
    { id: 1, name: "Harry Potter and the Chamber of Secrets", price: 100 },
    { id: 2, name: "hafez", price: 110 },
    { id: 3, name: "molana", price: 120 },
]

function addbook(name, price) {
    let newbook = {
        id: books.length + 1,
        name,
        price
    }

    return new Promise((resolve, reject) => {

        setTimeout(function () {
            if (books.push(newbook)) {
                resolve();
            }
            else {
                reject();
            }
        }, 7000)
    })
}


addbook("saadi", 130).then(() => {
    console.log(books);
})




//send Entrance for handlers of promise

let myPromise2 = new Promise((resolve, reject) => {

    const loginckeck2 = false;

    setTimeout(() => {
        console.log("login check !!");
        if (loginckeck2) {
            resolve("می توانید وارد پنل کاربری شوید");
        } else {
            reject(new Error("You are not logged in  !!"));
        }

    }, 5000);
})


myPromise2
    .then((success) => {
        console.log(success);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("promise is done");
    })




//chaining handlers of promise
let wordPromise = new Promise((resolve, reject) => {

    let text = "learning";

    if (text) {
        resolve(text);
    } else {
        reject(text);
    }
})

wordPromise
  .then((response) => {
        console.log(response);
        return response.split("");
    })
    .then((response2) => {
        console.log(response2); 
        return response2.reverse();
    })
    .then((response3) => {
        console.log(response3);
        return response3.join("");
    })
    .then((response4) => {
        console.log(response4);
    })
    .catch((err) => {
        console.log(err);
    })


   


