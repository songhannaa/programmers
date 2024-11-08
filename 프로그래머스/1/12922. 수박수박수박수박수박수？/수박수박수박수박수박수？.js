function solution(n) {
    let type = n % 2;
    let word = "수박"
    
    return type === 0 ? word.repeat(n/2) : word.repeat(Math.floor(n/2)) + "수"
}