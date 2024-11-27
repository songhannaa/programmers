function solution(n, m) {
    let gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };
    
    let d = gcd(n, m);
    let c = (n * m) / d;
    
    return [d, c];
}
