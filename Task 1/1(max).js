const arr1 = [3, 6, 8, 18, 4];

function maxArr(arr){
    max = arr[0];
    for(i = 1; i < arr.length; i++){
        if(arr[0] < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxArr(arr1));
