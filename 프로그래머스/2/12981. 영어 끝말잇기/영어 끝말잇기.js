function solution(n, words) {
    const used = new Set();
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const prevWord = words[i - 1];
        if (
            word.length < 2 ||
            (i > 0 && word[0] !== prevWord[prevWord.length - 1]) ||
            used.has(word)
        ) {
            const player = (i % n) + 1;
            const turn = Math.floor(i / n) + 1;
            return [player, turn];
        }

        used.add(word);
    }

    return [0, 0]; 
}
