const arr1 = [4, -5, 3, 0, 6, -1];

function negative(arr){
    negativeArr = [];
    for(i = 0; i < arr.length ; i++){
        if(arr[i] < 0){
            negativeArr.push(arr[i])
        }
    }
    return negativeArr;
}

console.log(negative(arr1));