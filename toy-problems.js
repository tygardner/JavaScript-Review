/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/

var addOne = function(plusOneSum){
  for (var i=0; i < plusOneSum.length; i++){
    var number = parseInt(plusOneSum[i]);
    plusOneSum[i] = number + 1;
  }
  return (eval(plusOneSum.join('+')));
};

/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/ //is this correct?

var squish = function(flatten){
	var myArr = [].concat.apply([],flatten);
  }
	console.log(myArr);
	};

/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/


/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/







Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

var longestWords1 = "You are just an old antidisestablishmentarian" // ["antidisestablishmentarian"]
var longestWords2 = "I gave a present to my parents" // ["present", "parents"]
var longestWords3 = "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo" // ["buffalo"] or ["Buffalo"]

function longWord = function(string) {
	var str = string.split(" ");
	var longest = 0;
	var word = null;
	for(var i = 0; i <str.length; i++){
		if(longest < str[i].length){
			longest = str[i].length;
			word = str[i];
		}
	}
	return word
}
 
//HOW TO RETURN MULTIPLE AND CASE SENSITIVE

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/
var calculation = function(){
    var result = 0;
    var maxNumber = 1000;
    var resultStr = "";

    for(var i = 0; i <= maxNumber; i++){
        if(i % 3 == 0 || i % 5 == 0){
            result = result + i;
            resultStr = resultStr + "," + i;
        }
    }
    alert("Your anwser is: " + result);
    alert("Your anwser is: " + resultStr.split(","));
}
/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/
    var removeDuplicates = function(string) {
      var result = [];
      for (i = 0; i < string.length; i++) {
          var current = string.charAt(i);
          if (result.indexOf(current) === -1) {
              result.push(current);
          }
      }

      return result.join("");
  }

  var str = "tree traversal";
  alert(removeDuplicates(str));

/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/
