console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
let a = 20;
let b = 4
//let add = a + b;
let minus = a - b;
let dividing = a / b;
console.log();



// Exercise 2
let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

//Answers to questions
// - 1111
// - 11eleven
// - true
// - Frodo11
// - true11
// - FrodoBaggins
console.log("EXERCISE 2:\n==========\n");

//this is a faster way 
function answers(){
  let sum = num + str;
  console.log(sum);

  let sum2 = num + str2;
  console.log(sum2);

  let sum3 = num + isPresent;
  console.log(sum3);

  let sum4 = firstName + num;
  console.log(sum4);

  let sum5 =  isPresent + str;
  console.log(sum5);

  let sum6 = firstName + lastName;
  console.log(sum6);

}



// Exercise 3
console.log("EXERCISE 3:\n==========\n");
let val = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;

//using a function to group all the answers
function answers2() {
  let question1 = val == str3;
  console.log(question1);

  let question2 = val === str3;
  console.log(question2);

  let question3 = !isAwake;
  console.log(question3);

  let question4 = ('eleven' == str4 && val >= str3);
  console.log(question4);
   
  let question5 = (!isAwake || isAwake);
  console.log(question5);

  let question6 = 0 == false;
  console.log(question6);

  let question7 = 0 === false;
  console.log(question7);

  let question8 = 0 != false;
  console.log(question8);

  let question9 = 0 !== false;
  console.log(question9);

}
