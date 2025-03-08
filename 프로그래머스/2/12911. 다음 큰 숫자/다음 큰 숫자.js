function solution(n) {
    const cnt = n.toString(2).split('1').length - 1;
    let next = n + 1;

    while (true) {
        if (next.toString(2).split('1').length - 1 === cnt) {
            return next;
        }
        next++;
    }
}
