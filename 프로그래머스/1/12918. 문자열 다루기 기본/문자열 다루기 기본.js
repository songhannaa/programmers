function solution(s) {
    let length = s.length;
    if ( length === 4 || length === 6 ){
        return s.split("").every(v=>!isNaN(v));
    }else{
        return false;
    }
}