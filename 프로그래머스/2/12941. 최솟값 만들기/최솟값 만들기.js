function solution(A,B){
    let arr1 = A.sort((a,b)=>a-b);
    let arr2 = B.sort((a,b)=>b-a);
    let answer = [];
    for (let i=0; i < arr1.length; i++){
        answer.push(arr1[i]*arr2[i]);
    }
    return answer.reduce((a,b)=>a+b,0);
}