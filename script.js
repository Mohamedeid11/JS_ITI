
/*
// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 

Sample numbers: 3, -7, 2 

Output: 3, 2, -7
*/
/*
var num1 , num2 , num3;

num1 = prompt('Enter The First Number');
num2 = prompt('Enter The Second Number');
num3 = prompt('Enter The Thired Number');


if (num1 >= num2 && num1 >= num3) {

    if (num2 >= num3) {
        alert(num1 + "," + num2 + "," + num3);
    }else {
        alert(num1 + "," + num3 + "," + num2);
    }

}else if (num2 >= num1 && num2 >= num3) {

    if (num1 >= num3) {
        alert(num2 + "," + num1 + "," + num3);
    } else {
        alert(num2 + "," + num3 + "," + num1);
    }

}else if (num1 >= num2) {

    alert(num3 + "," + num1 + "," + num2);

}else {

    alert(num3 + "," + num2 + "," + num1);

}

*/
// optimize and clean

// ----------------------------------------------------------------------------------------------------------------------------------

// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". 
/*

for (var i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 ) {
        console.log("Fizz");
    } else {
      console.log(i);
    }
  }
  
*/
// ----------------------------------------------------------------------------------------------------------------------------------

// Write a JavaScript program to sum the multiples of 3 and 5 under 1000. 

/*
var sum = 0; 

for (var i = 0; i < 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    sum += i; 
  }
}

alert(sum);
*/

// ----------------------------------------------------------------------------------------------------------------------------------

// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message ‘ wrong guess, want to try again?’ if confirmed continue up to 3 times, if not stop the code, after 3 failed times, display message ‘game over’. 


// var randomNumber = Math.floor(Math.random() * 10) ; 
/*
var randomNumber =5 ; 

var i = 0 ; 

var flag = false;

while (i < 3) {
  var guess = prompt("Guess a number between 1 and 10: number of guesses " + i);

  if (guess == randomNumber) {
    alert("Good work!");

    flag = true;
    
    break;
  } else {
    i++;
      if (!confirm("Wrong guess, want to try again? number of guesses " + i)) 
        break;

  }
}

if(!flag)
    alert("Game over! number of guesses " + i);

*/

// (bonus) According to Wikipedia a happy number is defined by the following process : 

// "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)". 

// Write a JavaScript program to find and print the first 5 happy numbers. 


function happy_number(num) 
{
    var m, n ;
    var c = [] ;
 
    while(num != 1 && c[num] !== true) 
    {
        c[num] = true ;
        
        m = 0 ;

        while (num > 0) {
          
          n = num % 10 ;

          m += n * n ;

          num = Math.floor(num / 10) ;
        }

        num = m ;
    }
    return ( num == 1) ;
}

var count = 5;
var num = 45;
var first5numbers = ''; 

while(count-- > 0) 
{
    while(!happy_number(num)){

         num++ ;
    }

    first5numbers = first5numbers+(num + ", ") ;

    num++ ;
}
console.log('First 5 happy numbers are : '+ first5numbers);


