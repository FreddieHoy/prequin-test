// Find the nth number
// [0, 1, 1, 2, 3, 5, 8]

// So because the numbers get massive need % 1000000007

const modValue = 1000000007;

export const getFibonacciNumber = (n: number): number => {
  if (n <= 0) return 0; // just returning 0 for negative values
  if (n === 1) return 1;
  if (n === 2) return 1;

  let preNum = 1;
  let lastNum = 1;
  let position = 2;

  while (position < n) {
    const tempNum = lastNum;

    position += 1;

    // (((a % M) + b) % M == (a + b) % M
    // lastNum here is always the mod then
    lastNum = ((lastNum % modValue) + preNum) % modValue;

    preNum = tempNum;
  }

  if (n > 1000) return 0;

  return lastNum;
};
