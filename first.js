// let arr1 = [0, 2, 4, 3, 10, 1]; // creating the array

// function max(arr) { // starting a function
//     let max = arr[0]; // setting the max
//     let i = 1; // setting the index
//     while (i < arr.length) { // the while loop
//         if (arr[i] > max) { // if statement
//             max = arr[i];  // setting the max
//         }
//         i++; // increasing the index by 1
//     }
//     return max; // ending the function
// }

// console.log(max(arr1)); // printing the result

// let arr = [0, 2, 4, 3, 10, 1]; // creating the array

// function even(arr) {
//     let evenNumbers = []; // creating new array
//     let i = 0;
//     while (i < arr.length) {
//         if (arr[i] % 2 === 0) { // checking if the number is even
//             evenNumbers.push(arr[i]); // adding to new array
//         }
//         i++; // increasing the index by 1
//     }
//     console.log(evenNumbers); // printing the even numbers array
// }

// even(arr); // calling the function

// let arr = [0, 3, 9, 5, 12]

// function div(arr) {
//     let dividedBy3 = []; // creating new array
//     let i = 0;
//     while (i < arr.length) {
//         if (arr[i] % 3 === 0) { // checking if the number is even
//             dividedBy3.push(arr[i]); // adding to new array
//         }
//         i++; // increasing the index by 1
//     }
//     console.log(dividedBy3); // printing the even numbers array
// }

// div(arr); // calling the function



// const numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// let i = 0;

// while (i < numbers.length) {
//     sum += numbers[i];
//     i++;
// }

// console.log(sum);




// const numbers = [15, -3, 22, -8, 3, -10, 14];

// const negativeNumbers = [];
// let i = 0;

// while (i < numbers.length) {
//     if (numbers[i] < 0) {
//         negativeNumbers.push(numbers[i]);
//     }
//     i++;
// }

// console.log("Array with only negative numbers:", negativeNumbers);



// const numbers = [0, 11, -19, 6, -8, 3, -10, 14];
// const transformedNumbers = [];
// let i = 0;

// while (i < numbers.length) {
//     const transformedValue = numbers[i] * 2 + 1;
//     transformedNumbers.push(transformedValue);
//     i++;
// }

// console.log("Transformed array:", transformedNumbers);

// const numbers = [15, -3, 22, -8, 3, -10, 14];

// const sumPairs = [];
// let i = 0;

// while (i < numbers.length - 1) {
//     sumPairs.push(numbers[i] + numbers[i + 1]);
//     i++;
// }

// console.log("Sum Pairs:", sumPairs);

// const numbers = [15, 22, -7, 9, 30, -19, 6, 14];

// let largest = numbers[0];
// let secondLargest = numbers[0];
// let i = 1;

// while (i < numbers.length) {
//     if (numbers[i] > largest) {
//         secondLargest = largest;
//         largest = numbers[i];
//     } else if (numbers[i] > secondLargest && numbers[i] < largest) {
//         secondLargest = numbers[i];
//     }
//     i++;
// }

// console.log("The second largest number is:", secondLargest);

// const numbers = [15, -3, 22, -8, 3, -10, 14]; //1st method

// const stringNumbers = [];
// let i = 0;

// while (i < numbers.length) {
//     stringNumbers.push(numbers[i].toString());
//     i++;
// }

// console.log("Array of string numbers:", stringNumbers);

// const numbers = [15, -3, 22, -8, 3, -10, 14]; //2nd

// const stringNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     stringNumbers.push(numbers[i].toString());
// }

// console.log("Array of string numbers:", stringNumbers);


// const numbers = [15, -3, 22, -8, 3, -10, 14]; //3rd method

// const stringNumbers = [];
// for (const number of numbers) {
//     stringNumbers.push(String(number));
// }

// console.log("Array of string numbers:", stringNumbers);


// const numbers = [25, 32, 47];s

// const people = [];
// let i = 0;

// while (i < numbers.length) {
//     people.push({
//         name: "Valodik",
//         age: numbers[i].toString()
//     });
//     i++;
// }

// console.log(people);
