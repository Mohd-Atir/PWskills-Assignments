function divisibleBy3ButNotBy2(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 3 !== 0 || arr[i] % 2 === 0){
            continue;
        }
        console.log(arr[i]);
    }
}

const nums = [7, 9, 21, 6, 27];
divisibleBy3ButNotBy2(nums);