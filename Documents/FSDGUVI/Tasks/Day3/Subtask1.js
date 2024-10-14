// 1. Here the below programs in anonymous function & IIFE:

//a) Print odd numbers in an array:

(function(array){
    for(var x = 0 ; x< array.length ; x++){
        if(array[x]%2!=0){
            console.log(array[x])
               } 
          }
    })([1,2,3,4,5,6,7,8,9])

//b) Convert all the strings to title caps in a string array:

(function(array) {
    let titleCase = array.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
    console.log(titleCase);
})(['my', 'dog', 'name', 'is', 'sheero']);

//c) Sum of all numbers in an array:

(function(array) {
    let sum = 0;
    for(x=0;x<array.length;x++){
        sum +=array[x];
    }
    console.log(sum);
})([1, 2, 3, 4, 5, 6, 7, 8]);

//d) Return all the prime numbers in an array:

(function(array) {
    let Prime = num => {
        if (num <= 1) return false;
        for (let x = 2; x <num; x++) {
            if (num % x === 0) return false;
        }
        return true;
    };
    let output = array.filter(Prime);
    console.log(output);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//e) Return all the palindromes in an array:

(function(array) {
    let Palindrome = str => str === str.split('').reverse().join('');
    let output = array.filter(Palindrome);
    console.log(output);
})(['civic', 'how', 'racecar', 'noon', 'level']);

//f) Return median of two sorted arrays of the same size:

(function(array1, array2) {
    let combine = array1.concat(array2).sort((a, b) => a - b);
    const midvalue = combine.length / 2;
    const median = (combine[midvalue - 1] + combine[midvalue]) / 2;
    console.log(median);
})([1, 2, 3], [4, 5, 6]);

//g) Remove duplicates from an array:

(function(array) {
    const uniquevalues = [...new Set(array)];
    console.log(uniquevalues);
})([1, 2, 3, 3, 4, 5, 5]);

//h) Rotate an array by k times:

(function(nums, k) {
    for (let x = 0; x < k; x++) {
      nums.unshift(nums.pop());
  }
    console.log(nums);
})([1, 2, 3, 4, 5], 6);


