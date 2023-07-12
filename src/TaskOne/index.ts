const modValue = 1000000007;

export const getFibonacciNumber = (n: number): number => {
  // Special cases
  if (n <= 0) return 0; // just returning 0 for negative values
  if (n === 1) return 1;
  if (n === 2) return 1;
  if (n > 1000) return 0;

  let preNum = 1;
  let lastNum = 1;
  let position = 2;

  while (position < n) {
    const tempNum = lastNum;

    position += 1;

    // (((a % M) + b) % M == (a + b) % M

    lastNum = ((lastNum % modValue) + preNum) % modValue;

    preNum = tempNum;
  }

  return lastNum;
};
