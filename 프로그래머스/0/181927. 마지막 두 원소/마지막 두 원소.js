function solution(num_list) {
    let prev = num_list[num_list.length-2];
    let next = num_list[num_list.length-1];
    if (prev < next){
        num_list.push(next - prev);
    } else{
        num_list.push(2 * next);
    }
    return num_list;
}