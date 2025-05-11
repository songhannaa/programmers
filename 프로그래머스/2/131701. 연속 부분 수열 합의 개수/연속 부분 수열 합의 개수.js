function solution(elements) {
    const n = elements.length;
    const extended = elements.concat(elements); 
    const sums = new Set();

    for (let length = 1; length <= n; length++) {
        for (let start = 0; start < n; start++) {
            let sum = 0;
            for (let i = 0; i < length; i++) {
                sum += extended[start + i];
            }
            sums.add(sum);
        }
    }

    return sums.size;
}
