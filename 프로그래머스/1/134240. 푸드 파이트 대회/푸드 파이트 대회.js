function solution(food) {
    let result = '';
    
    for (let i = 1; i < food.length; i++) {
        let count = Math.floor(food[i] / 2);
        result += i.toString().repeat(count);
    }
    
    result += '0' + result.split('').reverse().join('');
    return result;
}
