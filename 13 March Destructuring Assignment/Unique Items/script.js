const uniqueItems = (myArray) => {
    const mySet = new Set(myArray);
    return mySet
}
const newArray = [1, 2, 3, 4, 5, 1, 2];
console.log(uniqueItems(newArray));