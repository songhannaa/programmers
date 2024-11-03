function solution(s) {
    let type = s.length % 2 ;
    let answer = '';
    if(type === 0){
        answer = s[s.length/2 -1] +s[s.length/2];
        return answer
    } else {
        let index = Math.floor(s.length/2);
        answer = s[index];
        return answer
    }
}