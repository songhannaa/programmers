function solution(s) {
    const tuples = JSON.parse(
        s.replace(/{/g, "[").replace(/}/g, "]")
    );

    tuples.sort((a, b) => a.length - b.length);

    const result = [];
    const seen = new Set();

    for (let tuple of tuples) {
        for (let num of tuple) {
            if (!seen.has(num)) {
                seen.add(num);
                result.push(num);
            }
        }
    }

    return result;
}
