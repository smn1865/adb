let arr1 = [2, 5, 7, 1, 3];

function previous(arr, x, y) {
    let newarr = [];
    let i = 0;
    while (i < arr.length) {
        newarr.push(arr[i] * x + y);
        i++;
    }
    return newarr;
}

console.log(previous(arr1, 1, 2));
console.log(previous(arr1, 3, 4));
console.log(previous(arr1, 2, 1));


