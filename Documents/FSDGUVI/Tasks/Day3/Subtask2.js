// Here the below programs in arrow functions:

//a) Print odd numbers in an array:

let printoddnumber = array => {
    for(var x = 0 ; x< array.length ; x++){
           if(array[x]%2!=0){
               console.log(array[x])
                  } 
    }
   }
   printoddnumber([1,2,3,4,5,6]);

//b) Convert all the strings to title caps in a string array:

let convert = array => {
    let titleCase = array.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
    console.log(titleCase);
};
convert(['my', 'dog', 'name', 'is', 'sheero']);

//c) Sum of all numbers in an array:

let sumOfNumbers = array => {
    let sum = 0;
   for(x=0;x<array.length;x++){
       sum +=array[x];
   }
   console.log(sum);
};
sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8]);

//d) Return all the prime numbers in an array:

let returnPrimeNumbers = array => {
    let Prime = num => {
       if (num <= 1) return false;
       for (let x = 2; x <num; x++) {
           if (num % x === 0) return false;
       }
       return true;
   };
   let output = array.filter(Prime);
   console.log(output);
};
returnPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//e) Return all the palindromes in an array:

let returnPalindromes = array => {
    let Palindrome = str => str === str.split('').reverse().join('');
   let output = array.filter(Palindrome);
   console.log(output);
};
returnPalindromes(['civic', 'how', 'racecar', 'noon', 'level']);


