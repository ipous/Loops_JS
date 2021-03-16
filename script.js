console.log('hello world');


var myVar = 5; 

console.log('myVar is: ', myVar); 

console.log('myVar plus 3: ', myVar + 3);

var myString = 'JavaScript is very cool.';
var myAddOn = 'This is the best language in the world. You guessed'

console.log(myString + ' ' + myAddOn + ' ' + myVar + 3);


function add(a, b) { 

let sum = a+b;
return sum;

}

let a = 1;
let b = 5;

console.log(a+b);

console.log(add(3,4)); 
console.log(add(10,12)); 
console.log(add(a,b)); 

console.log('hello')

let n = 0;

while ( n < 3 ) { 
  console.log(n);
  n++; 
}

console.log(n);


let str = '';

for (let i = 0; i <= 9; i++) { 
  console.log(str + ' at '+  i + ' iteration');
  str = str + i;
}

console.log(str);