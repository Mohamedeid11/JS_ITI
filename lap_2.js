
/*Write a JavaScript program to sort the items of an array. 

Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]; 

Sample Output : -4,-3,1,2,3,5,6,7,8 
*/

/*
var arr1 = [-3,8,7,6,5,-4,3,2,1,-5];
var arr2 = [];
var min = arr1[0];
var pos;
var max = arr1[0];


for (var i=0;i<arr1.length;i++)
{
    if (max < arr1[i])
        max = arr1[i];

    for (var j=0;j<arr1.length;j++)
    {
        if (arr1[j]!="x")
        {
            if (min > arr1[j]) 
            {
                min = arr1[j];
                pos = j;
            }
        }
    }

    arr2[i] = min;
    arr1[pos]="x";
    min = max;
}
console.log(arr2);
*/

// ----------------------------------------------------------------------------------------------------------------------------------

/*
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 

Sample Data and output: 

Example string: 'Web Development Tutorial' 

Expected Output: 'Development' 
*/

/*
function findLongestWord(str) {
    var words = str.split(' '); // if there is no spaces between words he will read it as one word 
    var maxLength = 0;
    var result = '';
    

    
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        result = words[i];
      }
    }
    
    return result;
  }
  
  console.log(findLongestWord('Web Development Tutorial')); 
*/

// ----------------------------------------------------------------------------------------------------------------------------------
/*
Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 

Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. 
*/
/*
let x = prompt("Enter a number to check if it is a prim number or not")

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    
    for (var i = 2; i < num; i++) {
      if ( num % i === 0) {
        return false;
      }
    }
    
    return true;
}
  
  console.log('2 ' + isPrime(2)); 
  console.log('3 ' + isPrime(3)); 
  console.log('4 ' + isPrime(4)); 
  console.log('5 ' + isPrime(5)); 
  console.log('6 ' + isPrime(6)); 
  console.log('7 ' + isPrime(7)); 
  console.log('8 ' + isPrime(8)); 
  console.log('9 ' + isPrime(9)); 
  console.log('10 ' + isPrime(10)); 

if(isPrime(x)){
    alert( x + ' Is a Prim Number' )
}else{
    alert( x + ' Is not a Prim Number' )    
}
*/
// ----------------------------------------------------------------------------------------------------------------------------------
/*

Write a JavaScript function to convert an amount to coins. 

Sample function : amountTocoins(46, [25, 10, 5, 2, 1]) 

Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 

Output : 25, 10, 10, 1  

*/

/*
  function amountToCoins(amount, coins) {
    var str = '';
  
      for (var i = 0; i < coins.length; i++) {
        if (amount >= coins[i]) {
          amount = amount - coins[i];
          str = str + coins[i] + ',';
          i--;
        }
      }
      return str;
  }
  
  console.log(amountToCoins(46, [25, 10, 5, 2, 1])); 
*/

// ----------------------------------------------------------------------------------------------------------------------------------