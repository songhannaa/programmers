function solution(s) {
    let arr = s.split(" ").map(e=>e.split(''));
    return arr.map(e=>{
        return e.map((word,i)=>{
            return i% 2 === 0 ? word.toUpperCase() : word.toLowerCase();
        }).join('');
    }).join(' ');
}
