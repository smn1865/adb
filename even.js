let arr1 = [3, 6, 8, 4, 5, 13];

function even(arr){
    return arr.filter(number => number % 2 === 0);
}

console.log(even(arr1))