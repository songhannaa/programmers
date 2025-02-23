function solution(k, tangerine) {
    const obj = {};
    for (let t of tangerine) {
        obj[t] = (obj[t]||0) + 1;
    }

    const sort = Object.values(obj).sort((a, b) => b - a);

    let count = 0;
    let total = 0;

    for (let v of sort) {
        total += v;
        count++;
        if (total >= k) {
            break;
        }
    }
    return count;
}
