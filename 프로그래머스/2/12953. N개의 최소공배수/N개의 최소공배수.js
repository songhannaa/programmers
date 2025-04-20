function solution(arr) {
    return arr.reduce((a, b) => {
        let gcd = (x, y) => {
            while (y) {
                [x, y] = [y, x % y];
            }
            return x;
        };
        return (a * b) / gcd(a, b);
    });
}
