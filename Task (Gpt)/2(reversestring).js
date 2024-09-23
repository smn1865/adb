const arr1 = ['tolik', 'andrey', 'lyoxa'];

function reverseString(arr){
    let reversed = [];
    for(let i = 0; i < arr.length; i++){
        
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log(reverseString(arr1));