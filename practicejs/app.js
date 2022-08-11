/ // mutable block scoped) <- Good!
// let mage;

// // old way, also mutable but global/funtion scoped)(Hoisting) Bad! <- not really
// var page;

// // Constant
// const age = 10; 

// //DATA TYPES

// // NUMBER
// const age2 = 10;

// // STRINGS
// const name = 'Shakespeare: "to be or not to be" '

// // BOOLEAN
// const employed = true;

// // UNDEFINED
// const example = undefined;

// // NULL
// const example2 = null;

// // STRING OPERATOR
// let firstName = "Bob"
// let lastName = "The Builder"

// // CONCATENATION
// let fullName = firstName + lastName
// let concatenation = "con" + "cat" + "ena" + "nation"

// //console.log(concatenation)

// // CAMEL CASE
// // myFavoriteDesert




//camelcase
// myFavoriteDesert

//Pascel case
//MyFavoriteDesert

//kebab case
//my-favorite-desert

//logical  operators
//AND      &&
//OR       ||
//NOT      !


//shorthands

let fire = 0;

fire -=1

//only for increamenting or by 1
fire-- //increamenting by 1
fire++ //decrementing by 1

fire = fire -10

console.log(fire)

// loose comnparison
// == (2 equal sign)

//strict comparison(uses Type Coercion)
//===(3 equal sign)

//Assignment Operator
//=(1 equal sign)

x=6
y=3

console.log(x==5 || y == 5)

//exercise 1
 
let num1 = 3;
let num2 = 2;
let result = num1 + num2
console.log(result)

//exercise 2
let number1 = 9;
let number2 = 3;
let myResult = number1 - number2
console.log(myResult)



//
const number = 0;
if (number > 0) {
    console.log("Number is Positve")
}
else if (number < 0) {
        console.log("Number is Negative")
}



let age =15

if (age > 18) {
  console.log("Welcome")
}
else {
  console.log("Access Denied")
}

//exercise
 let num = 


//exercise else if

let grade = 76 

if (grade >= 55) {
    if (grade >= 90) {
        console.log('A');
    } else if (grade >= 80) {
        console.log('B');
    } else if (grade >= 70) {
        console.log('C');
    } else {
        console.log('D');
    }
} else {
    console.log('F');
}

//outter if statemet

if (true) {
    
  let blockScoped = "block"
  let number = 1

    // inner(nested)
    if (true) {


}

///switch statement
let number = 2;


switch (number) {
  case 1:
    console.log("inside of case 1")
    break;
  case 2:
    console.log("inside of case 2")
    break;
  case 3:
    console.log("inside of case 3")
    break;
  default:
    console.log("Do something else")
    break;
} 


// ternary operator


let lighting = "dark"

lighting === "dark" ? "night time" : "daytime"/

// ex1 (Switch Statements)

let letter = "B"

switch(letter){
  case "":
  case "":
  case "":
  case "":
  case "":
    console.log()
}










//ex2 (ternary operators)

let number = 3;
oddEven = number %2 ===0 "its even" ; "its odd"
console.log(its even)
