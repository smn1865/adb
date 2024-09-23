const arr1 = [2, 5, 3, 12, 8];

function secondMax(arr){
    max = arr[0];
    for(i = 1; i < arr.length; i++){
        if(arr[0] < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

console.log(secondMax(arr1));