function solution(s) {
    let num = s.replaceAll(" ",",");
    let arr = num.split(",").sort((a,b)=>a-b);
    let answer = arr[0] +" "+ arr[arr.length-1];
    return answer
}