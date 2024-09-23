const arr1 = [3, 5, 6, 8, 10, 11];

function sumEven(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            sum += arr[i];
        }
    }
    return sum;
}

console.log(sumEven(arr1));