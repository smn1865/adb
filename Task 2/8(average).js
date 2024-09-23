const arr1 = [3, 5, 2, 6, 8];

function computeAverage(arr){
    let average = 0;
    for(let i = 0; i < arr.length; i++){
        average += arr.length / arr.length;
    }
    return average;
}

console.log(computeAverage(arr1));