const arr1 = [2, 5, 8, 3, 2, 5];

function removeDup(arr){
    let removedDup = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i]){
            removedDup.splice(arr[i])
        }else{
            removedDup.push(arr[i]);
        }
    }
    return removedDup;
}

console.log(removeDup(arr1)); //?