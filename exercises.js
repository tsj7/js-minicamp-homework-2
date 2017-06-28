//Do not change any of the function names

/*1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.

  * for loop - a for loop is a block of code that can be ran repeatedly.
  A for loop starts by assigning a variable, then it sets a condition or numeric value
  that the loop should run and finally it concludes with a statment that runs
  each time the code block is executed until it is complete.  A common use for a for loop
  would be to run a block of code to count up until a numeric value has been reached.
  EG: "Allow [x] amount of candidates to sign up for lambda school, keep allowing candidates
  to sign up until the number of candidates is greater than or equal to the assinged argument."


  * && || !

  &&: means that the 2 items in comparison must be exactly equal in every way, not mostly equal
  but verbatim equal in syntax, spelling, grammer, etc.

  ||: means or. It means that only one of the 2 items in comparison must be true to return true,
  if both of the items in comparison are false then it will return false.

  !: returns the opposite of the value of the item. EG: if var feelSick = true; and we return !feelSick,
  then we have gathered that the user does not feel sick.

  * Array: is a variable that can hold multiple values.

  * git: a program that allows for multiple users to be working simultaneously on the same project,
  each saving their own copy, requesting that it be added to the master. If an error occurs one can
  default back to a previous version.

  * GitHub: the program that git projects are stored in. One can take a public block of code (forking)
  and add it to their github area (repository). Cloning will download the code to ones personal computer
  allowing for multiple users to edit and work on the same code simultaneously.*/



function getBiggest(x, y) {
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
  if (x === y){
    return x;
  }
  else if (x > y){
    return x;
  }
  else {
    return y;
  }
}

function greeting(language) {
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'

  if (language === 'German') {
      return 'Guten Tag!';
  }
  else if (language === 'English') {
      return 'Hello!';
  }
  else if (language === 'Spanish') {
      return 'Hola!';
  }
      return 'Hello!';
  }



  function isTenOrFive(num) {
    //return true if num is 10 or 5
    //otherwise return false
      if (num === 10 || num === 5) {
          return true;
      }
          return false;
  }

function isInRange(num) {
  //return true if num is less than 50 and greater than 20
  if (num < 50 && num > 20) {
    return true;
  }
    return false;
}

function isInteger(num) {
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
  if (num === Math.floor(num)) {
    return true;
  }
    return false;
}

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num

  if ((num % 3 === 0) && (num % 5 === 0)) {
        return 'fizzbuzz';
    }
    else if (num % 3 === 0) {
        return 'fizz';
    }
    else if (num % 5 === 0) {
        return 'buzz';
    }
    return num;
}

function isPrime(num) {
if (num === 0 || num === 1){
    return false;
}
else {
  for (var i=2; i<num; i++){
    if (num % i === 0){
        return false;
    }
  }
    return true;
}

  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
}

function returnFirst(arr) {
  //return the first item from the array
return arr.shift();
}

function returnLast(arr) {
return arr.pop();
  //return the last item of the array
}

function getArrayLength(arr) {
  return arr.length;
  //return the length of the array
}

function incrementByOne(arr) {
  for (var i = 0; i < arr.length; i++) {
       arr[i] += 1;
   }
  return arr;
  //arr is an array of integers
  //increase each integer by one
  //return the array
}

function addItemToArray(arr, item) {
  //add the item to the end of the array
  //return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  var string = words.join(' ');
  return string;

  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'

}

function contains(arr, item){

for (var i = 0; i < arr.length; i++){
    if (arr[i] === item){
      return true;
    }
  }
  return false;
}
  //check to see if item is inside of arr
  //return true if it is, otherwise return false


function addNumbers(numbers) {
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
    return (sum);
}



  //numbers is an array of integers.
  //add all of the integers and return the value

function averageTestScore(testScores) {
  var average = 0;
  for (var i = 0; i < testScores.length; i++) {
      average += testScores[i];
  }
    return (average / (testScores.length));
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
}

function largestNumber(numbers) {
  var largest = 0;
  for (var i = 0; i < numbers.length; i++){
  if (numbers['i'] > largest) {
    largest = numbers [i];
  }
}
  return largest;

  //numbers is an array of integers
  //return the largest integer





//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
