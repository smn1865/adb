const arr1 = [3, 5, 7, 2, 1];

function removeAndMerge(arr){
    let duplicatedArr = [];
    let mergedArr = [];
    const arr2 = [4, 6, 8, 2, 0];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr[i] === arr2[j]){
                duplicatedArr.push(arr[i]);
            }else{
                mergedArr.push();
            }
        }
    }
    return mergedArr;
}

console.log(removeAndMerge(arr1)); //?