function solution(brown, yellow) {
    let total = brown + yellow;

    for (let i=3; i<= Math.sqrt(total); i++) {
        if (total % i === 0) {
            let width = total / i;
            if ((width - 2) * (i - 2) === yellow) {
                return [width, i];
            }
        }
    }
}
