const arr1 = [3, 5, 6, 2, 4];


function mergeArr(arr){
    let newArr = [];
    const arr2 = [7, 1, 0, 3, 5];
    for(i = 0; i < arr.length; i++){
        newArr.push(arr[i]);
    }
    for(j = 0; j < arr2.length; j++){
        newArr.push(arr2[j]);
    }
    return newArr;
}

console.log(mergeArr(arr1));