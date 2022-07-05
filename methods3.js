//slice

let numbers = [2, 3, 5, 7, 11, 13, 17];

let newArray = numbers.slice(3,6);

console.log(newArray);

//array of method

let d = Array.of(1,2,3,4);

console.log(d);

//some()

let arr1 = [1,5,3,,5,9,11];

function isEven(element)
{
    return element %2 === 0;
}
console.log(arr1.some(isEven));

// every()

let arr2 = [18,45,65,78]

function age(number)
{
    return number > 18;

}

let z = arr2.every(age);

console.log(z)

//values()

let arr3 = ["java","is","fun"];

let z1 = arr.values();

for(let value of z1)
{
    console.log(value);
}

//array.form()

let newarr = Array.from("you");

console.log(newarr);

let set =["java","script","function"];

let result = Array.from(set)

console.log(result);

//constructor()

let arr = ["java","is"];

let constructor1 = arr.constructor();

console.log(constructor1);

//shift

let item = ["dog","my","you"];

 items.shift();

 console.log(items);

//unShift

 let items = ["dog","my","you"];

 items.unshift("love");

 console.log(items);

