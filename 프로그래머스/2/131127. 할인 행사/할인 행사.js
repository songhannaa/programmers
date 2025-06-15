function solution(want, number, discount) {
    const wantMap = new Map();
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }

    let result = 0;

    for (let i = 0; i <= discount.length - 10; i++) {
        const window = discount.slice(i, i + 10);
        const windowMap = new Map();

        for (let item of window) {
            windowMap.set(item, (windowMap.get(item) || 0) + 1);
        }

        let matched = true;
        for (let [item, count] of wantMap) {
            if (windowMap.get(item) !== count) {
                matched = false;
                break;
            }
        }

        if (matched) result++;
    }

    return result;
}
