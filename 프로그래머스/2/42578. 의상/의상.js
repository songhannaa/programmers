function solution(clothes) {
    const map = new Map();

    clothes.forEach(([_, type]) => {
        map.set(type, (map.get(type) || 0) + 1);
    });

    let answer = 1;
    for (let count of map.values()) {
        answer *= (count + 1);
    }

    return answer - 1;
}
