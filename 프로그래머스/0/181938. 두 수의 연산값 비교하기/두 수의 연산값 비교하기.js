function solution(a, b) {
    let ab = parseInt([a,b].join(""));
    let ab2 = 2*a*b;
    return ab>=ab2?ab:ab2;
}