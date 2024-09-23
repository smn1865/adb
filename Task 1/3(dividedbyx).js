const arr1 = [2, 5, 9, 12, 3, 1];

function dividedByX(arr, x){
    dividedArr = [];
    for(i = 0; i < arr.length; i++){
        dividedArr.push(arr[i] % x === 0)
    }
    return dividedArr;
}

console.log(dividedByX(arr1, 5));