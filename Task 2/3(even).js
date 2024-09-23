const arr1 = [2, 5, 6, 8, 10, 1];

function even(arr){
    evenArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenArr.push(arr[i]);
        }
    }
    return evenArr;
}

console.log(even(arr1))