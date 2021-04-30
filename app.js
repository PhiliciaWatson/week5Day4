//   18.Intermediate Algorithm Scripting: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(obj => obj[pre]);
  }
    
    truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  



//   19.Intermediate Algorvarithm Scripting: Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {
    var params = [].slice.call(arguments);

    if(!params.every(function(param){
      return typeof param === 'number';
    })){
      return undefined;
    }

    // checks to see if theres 2 values if they do them they are added together
    if(params.length[0] ==2 ){
      return params[0] + params[1];
    }else{
      // stores the first parameter
      var firstParam = params[0];
      // store a function but will take in the second parameter and using recursion call itself to add the values
      var addOneMore=function(secondParam){
        return addTogether(firstParam,second)
      };
    }
  }
  
  addTogether(2,3);


  //   20.Intermediate Algorithm Scripting: Make a Person
//   Fill in the object constructor with the following methods below:
  
//   getFirstName()
//   getLastName()
//   getFullName()
//   setFirstName(first)
//   setLastName(last)
//   setFullName(firstAndLast)
//   Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
var Person = function(firstAndLast) { 
    // Only change code below this line
    // Complete the method below and implement the others similarly
    var array = firstAndLast.split(' ');
    this.getFirstName = function(){
      return array[0];
    };
    this.getLastName = function(){
      return array[1];
    }
  
    this.getFullName = function(){
      return array[0]+ ' '+array[1];
    };
    this.setFirstName = function(first){
      array[0] = first;
    };
    this.setLastName = function(last){
      array[1] = last;
    };
    this.setFullName =function (firstAndLast){
      var arraySplit = firstAndLast.split(' ');
      this.setFirstName(arraySplit[0]);
      this.setLastName(arraySplit[1]);
    }
  };
     
  var bob = new Person('Bob Ross');

  //   21 Intermediate Algorithm Scripting: Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var newArray =[];

    for(var i = 0; i< arr.length; i++){
      var results = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+arr[0].avgAlt,3)/GM));

      newArray.push[{name:arr[i].name, obitalPeriod:results}];
    }
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);



  //   22 JavaScript Algorithms and Data Structures Projects: Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, "");
    for (var i = 0, len = str.length - 1; i < len / 2; i++) {
      if (str[i] !== str[len - i]) {
        return false;
      }
    }
    return true;
  }
  
    
    
    palindrome("eye");