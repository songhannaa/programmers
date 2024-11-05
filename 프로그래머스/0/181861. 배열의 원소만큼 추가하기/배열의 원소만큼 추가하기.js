function solution(arr) {
    let new_arr = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j<=arr[i]; j++){
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}