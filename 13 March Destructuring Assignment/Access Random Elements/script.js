// function extract(arr) {
//     const [first, second, , , , last] = arr;
//     return [first, second, last];
//   }
  
//   const array = [1, 2, 3, 4, 5, 6];
//   console.log(extract(array));
  

function extractElement (array) {
    const first = array[0]
    const second = array[1]
    const last = array[array.length -1]
    return{
        first,
        second, 
        last
    }
}

// example usage
const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
const result = extractElement(myArray);
console.log(result.first, result.second, result.last); // output: 1 2 8