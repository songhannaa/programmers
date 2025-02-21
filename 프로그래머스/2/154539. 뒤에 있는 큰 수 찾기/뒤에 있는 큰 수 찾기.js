function solution(numbers) {
    let arr = new Array(numbers.length).fill(-1);
    let answer = [];
    
    for (let i=numbers.length-1; i>=0; i--) {
        while (answer.length > 0 && answer[answer.length - 1] <= numbers[i]) {
            answer.pop();
        }
        if (answer.length > 0) {
            arr[i] = answer[answer.length -1];
        }
        answer.push(numbers[i]);
    }

    return arr;
}
