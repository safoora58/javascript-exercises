//usual function 
console.log("usual function");
function a() {
    console.log("a");
}
a();

console.log("-------------------------------");


//eventlistener with a name of function
const btn = document.querySelector("#button");

function clickhandler() {
    console.log("clicked");
}

btn.addEventListener("click", clickhandler);

console.log("-------------------------------");


//eventlistener with a callback function
console.log("eventlistener with a callback function");

const btn2 = document.querySelector("#button2");

function clickhandler2() {
    console.log("clicked2");
}

btn.addEventListener("click", clickhandler2());

console.log("-------------------------------");



//using function as a callback function
console.log("using function as a callback function");

function logger(func) {
    console.log("logged1");
    func();

}

function logger2() {
    console.log("logged2");
}

logger(logger2);

console.log("-------------------------------");




//map with a callback function
console.log("map with a callback function");
let numbers = [1, 2, 3, 4, 5, 6, 7]

numbers.map(function (items) {
    console.log(items);
})


console.log("-------------------------------");




//usage of callback function
console.log("usage of callback function");

function firstfruits() {
    console.log("peach");
    console.log("orange");
}

function middlefruits(callback) {
    setTimeout(function () {
        console.log("banana");
        callback();
    }, 4000)
}


function lastfruits() {
    console.log("lemon");
    console.log("tangerine");
}


firstfruits();
middlefruits(lastfruits);


console.log("---------------------------------");

//usage of callback function 2
const books = [
    { id: 1, name: "Harry Potter and the Chamber of Secrets" , price: 100 },
    { id: 1, name: "hafez" , price: 110 },
    { id: 1, name: "molana" , price: 120 },
]

function addbook(name , price , callback) {
    let newbook = { id: books.length + 1, name: name, price: price
}

setTimeout(function () {
books.push(newbook);
callback();
} , 6000)

}

function logbooks() {
    console.log(books);
}


addbook("saadi" , 130 ,  logbooks);
