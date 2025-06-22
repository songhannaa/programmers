function solution(number) {
  let count = 0;

  number.forEach((_, i) => {
    number.forEach((_, j) => {
      number.forEach((_, k) => {
        if (i < j && j < k && number[i] + number[j] + number[k] === 0) {
          count++;
        }
      });
    });
  });

  return count;
}
