function countVowels(name) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let i = 0; i < name.length; i++) {
      const char = name[i].toLowerCase();
  
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(countVowels('John Doe'));
  