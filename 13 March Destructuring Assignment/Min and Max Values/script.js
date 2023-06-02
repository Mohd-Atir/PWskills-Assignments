function maxMin () {
    return{
        max: Math.max(...array),
        min: Math.min(...array)
    }
}
const array = [4, 9, 3, 20, 5, 6];
console.log(maxMin(array))