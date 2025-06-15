function solution(s) {
    const isValid = (str) => {
        const stack = [];
        const pairs = { ')': '(', ']': '[', '}': '{' };

        for (let char of str) {
            if (['(', '[', '{'].includes(char)) {
                stack.push(char);
            } else {
                if (stack.length === 0 || stack.pop() !== pairs[char]) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    };

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const rotated = s.slice(i) + s.slice(0, i);
        if (isValid(rotated)) count++;
    }
    return count;
}
