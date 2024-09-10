let arr = [3, 5, 6, 8, 9, 12];

function divdedby(arr, x){
    let divisable = [];
    let i = 0;

    while (i < arr.lenght){
        if (arr[i] % x === 0){
            divisable.push(arr[i])
        }
        i++;
    }
    return divisable;
}

console.log(dividedby(arr, 3));
console.log(dividedby(arr, 4));
console.log(dividedby(arr, 5));
console.log(dividedby(arr, 2));

 