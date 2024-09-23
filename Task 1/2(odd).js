const arr1 = [2, 1, 5, 7, 6];

function oddNumbers(arr){
    oddArr = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1){
            oddArr.push(arr[i]);
        }
    }
    return oddArr;
}

console.log(oddNumbers(arr1));