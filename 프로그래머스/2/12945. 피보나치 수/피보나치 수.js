function solution(n) {
    const num=1234567;
    let a=0;
    let b=1;

    for (let i=2; i<=n; i++) {
        let temp = (a + b)%num;
        a=b;
        b=temp;
    }

    return b;
}
