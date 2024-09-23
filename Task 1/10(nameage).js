const arr1 = [18, 21, 16, 9];

function nameAge(arr){
    newArr = [];
    names = ['Valod', 'Tatev', 'Poxos', 'David'];
    for(let i = 0; i < arr.length ; i++){
        person = {
            age: arr[i % arr.length],
            name: names[i],
        }
        newArr.push(person);
    }
    return newArr;
}

console.log(nameAge(arr1));