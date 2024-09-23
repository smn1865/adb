let start = 1;
let end = 20;

function generateNum(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

console.log(generateNum(start, end));
