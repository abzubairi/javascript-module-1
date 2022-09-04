// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
const mutipliedNumbers =numbers.map(numbers=>numbers*100)
function multiply100(element){
    return element * 100
}

console.log(numbers.map(multiply100));
console.log(mutipliedNumbers);