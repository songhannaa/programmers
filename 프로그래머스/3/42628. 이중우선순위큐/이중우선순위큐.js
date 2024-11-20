function solution(operations) {
    let answer = [];
    let arr=[];
    for (let i=0; i<operations.length; i++){
        arr.push(operations[i].split(" "));
        if(arr[i][0] === "I"){
            answer.push(Number(arr[i][1]));
        }else if(arr[i][0] === "D" && arr[i][1] === "1"){
            answer.sort((a,b)=>b-a);
            answer.shift();
        }else if(arr[i][0] === "D" && arr[i][1] === "-1"){
            answer.sort((a,b)=>a-b);
            answer.shift();
        } 
    }
    if(answer.length === 0){
        return [0,0];
    }else{
        answer.sort((a,b)=>b-a);
        return [answer[0],answer[answer.length-1]];
    }
}