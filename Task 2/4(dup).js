const arr1 = [2, 5, 6, 8, 9];

function dup(arr){
    const arr2 = [1, 5, 0, 13, 18];
    for(let i = 0; i < arr.length; i++){
        let duplicate = false;
        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr2[j]){
                duplicate = true;
                break;
            }
        }
        if (duplicate){
            console.log("There is a dup");
        }
    }
    return arr;
}

dup(arr1)