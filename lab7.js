
const array1 = [1, 2, 3];
const array2 = [true, false];
const array3 = ['a', 'b', 'c'];
const array4 = [{ name: 'Asia' }];
const array5 = [null, undefined];



for (let i = 0; i < arr2.length; i++) {
console.log(arr2[i]);
}

let i = 0;
while (i < arr3.length) {
console.log(arr3[i]);
i++;
}
let j = 0;
do {
console.log(arr1[j]);
j++;
} while (j < arr1.length);

function sum(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
if (typeof arr[i] === 'number') {
sum += arr[i];
}
}
return sum;
}

console.log(sum([1, 2, 3, '4', true])); 

function getSentence(words) {
let sentence = '';
for (let i = 0; i < words.length; i++) {
sentence += words[i] + ' ';
}
return sentence.trim() + '.';
}

console.log(getSentence(['This', 'is', 'a', 'sentence'])); 
function sumNumArrays(arr1, arr2) {
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
if (typeof arr1[i] === 'number') {
sum += arr1[i];
}
}
for (let j = 0; j < arr2.length; j++) {
if (typeof arr2[j] === 'number') {
sum += arr2[j];
}
}
return sum;
}

console.log(sumNumArrays([1, 2, 3], [4, 5, 6, '7'])); 
function welcomeUsers(users) {
const greetings = [];
for (let i = 0; i < users.length; i++) {
const name = users[i].name;
const age = users[i].age;
const greeting = Hello, my name is ${name} and I am ${age} years old.;
greetings.push(greeting);
}
return greetings;
}

console.log