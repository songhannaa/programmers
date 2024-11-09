function solution(absolutes, signs) {
    let arr = signs.map(i=> i?1:-1);
    return absolutes.map((v,i)=>v*arr[i]).reduce((a,b)=>a+b,0);
}