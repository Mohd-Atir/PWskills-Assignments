const reverseStr = (str) => {
    setTimeout(() => {
        const reversed = str.split("").reverse().join("");
        console.log(reversed);
    }, 2000)
}
reverseStr("Atir");