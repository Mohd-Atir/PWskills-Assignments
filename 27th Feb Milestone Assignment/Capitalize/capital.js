function capitalizeLetter(name){
    let firstLetter = name.charAt(0);
    let capitalFirstLetter = firstLetter.toUpperCase();
    return firstLetter === capitalFirstLetter 
    ? name : capitalFirstLetter + name.slice(1);
}

console.log(capitalizeLetter("atir"));