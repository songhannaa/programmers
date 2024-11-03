function solution(arr, n) {
    var type = arr.length % 2;
    if(type === 0){
        return arr.map ((a,i)=> i%2 !==0 ? a+n : a)
    }else {
        return arr.map((a,i)=> i%2 ===0 ? a+n : a)
    }

}