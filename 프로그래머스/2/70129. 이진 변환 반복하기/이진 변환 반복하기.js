function solution(s) {
    let count = 0;
    let remove = 0;

    while (s !== "1") {
        const zero = s.split('0').length - 1;
        remove += zero;
        s = s.replace(/0/g, '').length.toString(2);
        count++;
    }

    return [count, remove];
}
