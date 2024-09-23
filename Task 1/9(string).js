const arr = [3, 1, 4, 5, 6, 2];

function convertToStrings(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = String(arr[i]);
    }
    return arr;
}

console.log(convertToStrings(arr));