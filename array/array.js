
//syntax 1
let numbers = [2, 5, 80, 46, 22];
console.log(numbers);

//syntax 2
let x = new Array(2, 5, 6, 66);
console.log(x);

//method 1 - numbers
let number = new Array(4, 55, 78, 90);
let result = number.length;
console.log(result);

//method 2 - index
let number1 = new Array(4, 55, 78, 90);
let result1 = number1.indexOf(78);
console.log(result1);

//method 3 - push
let number2 = new Array(4, 55, 78, 90);
let result2 = number2.push("reza");
console.log(result2);
console.log(number2);

//method 4 - push
let number3 = new Array(4, 55, 78, 90);
let result3 = number3.unshift("mahdi");
console.log(result3);
console.log(number3);

//method 5 - pop
let number4 = new Array(4, 55, 78, 90);
let result4 = number4.pop();
console.log(result4);
console.log(number4);

//method 6 - shift
let number5 = new Array(4, 55, 78, 90);
let result5 = number5.shift();
console.log(result5);
console.log(number5);

//method 7 - splice.ommit
let number6 = new Array(4, 55, 78, 90);
let result6 = number6.splice(2, 1);
console.log(result6);
console.log(number6);

//method 8 - splice.add
let number7 = new Array(4, 55, 78, 90);
let result7 = number7.splice(2, 0, "hii");
console.log(result7);
console.log(number7);

//method 9 - splice.ommit
let number8 = new Array(4, 55, 78, 90);
let result8 = number8.splice(1, 2);
console.log(result8);
console.log(number8);

//method 10 - concat
let number9 = new Array(4, 55, 78, 90);
let temp = [3, 3]
let result9 = number9.concat(temp);
console.log(result9);
console.log(number9);

//method 11 - sort
let number10 = new Array(4, 55, 78, 90);
let result10 = number10.sort(function(x , y){ return y - x ;});
console.log(result10);
console.log(number10);




 