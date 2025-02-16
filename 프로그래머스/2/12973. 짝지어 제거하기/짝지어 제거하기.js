function solution(s) {
    let arr=[];

    for (let data of s) {
        if(arr.length > 0 && arr[arr.length - 1] === data) {
            arr.pop(); 
        }else{
            arr.push(data); 
        }
    }

    return arr.length === 0 ? 1 : 0;
}
