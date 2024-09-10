const arr1 = [1, 2, 3, 8, 9, 1];

function hasDuplicates(arr) {
    let elementCount = {};

    for (let i = 0; i < arr.length; i++) {
        if (elementCount[arr[i]]) {
            return true;
        }
        elementCount[arr[i]] = true;
    }

    return false;
}       

console.log(hasDuplicates(arr1));
