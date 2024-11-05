function solution(s) {
    let arr = s.toUpperCase().split(' ');
    let new_arr = arr.map(item => item.substring(0,1) + 
                          item.substring(1,item.length).toLowerCase());
    return new_arr.join(" ");
}