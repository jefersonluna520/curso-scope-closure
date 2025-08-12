// variables 

var a; // declarando 
var b = 'b'; // declarando / asignamos 
b = 'bb'; // reasignando
var a = 'aa'; // redeclarando

// Global Scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();


function countries() {
  country = 'Colombia'; // global
  console.log(country);
}

countries();
console.log(country);