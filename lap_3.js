/*
you are required to, given a string, replace every letter with its position in the alphabet 

If anything in the text isn't a letter, ignore it and don't return it."a" = 1, "b" = 2, etc. 

Example: alphabet_position("The sunset sets at twelve o' clock.") Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ) 


*/


// function alphabet_position(str) {
//    let text = str.toLowerCase();
    
//     var result = ' ';

//     for (var i = 0; i < text.length; i++) {

//         var j = text.charCodeAt(i);

//         if (text.charCodeAt(i) - 96 > 0 && text.charCodeAt(i) - 96 <= 26)
//              result +=  ' ' + (j - 'a'.charCodeAt(0) + 1)  ;
        
//     }
//     return result;
// }

// alert( alphabet_position("The sunset sets at twelve o' clock.") )

/*

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result. 

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0). 

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers. 

Examples 

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est" 

"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople" 

""  -->  "" 

*/


// function sortStringWithNumbers(input) {

//     var words = input.split(" ");

//     words.sort(function(a, b) {

//         return extractInt(a) - extractInt(b);

//     });

//     return words.join(" ");
// }

// function extractInt(str) {

//     return parseInt(str.match(/\d+/));

// }

// console.log(sortStringWithNumbers("is2 Thi1s T4est 3a"));

// console.log(sortStringWithNumbers("4of Fo1r pe6ople g3ood th5e the2"));

// console.log(sortStringWithNumbers(""));

