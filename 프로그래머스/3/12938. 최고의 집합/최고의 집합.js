function solution(n, s) {
    if (s < n) {
        return [-1];
    }else{
        let a = Math.floor(s/n);
        let b = s%n;
        let arr = Array(n).fill(a);
        for (let i=0; i<b; i++) {
            arr[n-1-i] += 1;
        }
        return arr;
    }
    
}
