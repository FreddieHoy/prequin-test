import { getFibonacciNumber } from "./task1";
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

describe("getFibonacciNumber", () => {
  it("returns the nth Fibonacci Number given value of n", () => {
    const valAtSix = getFibonacciNumber(6);
    const valAtSeven = getFibonacciNumber(7);
    const valAtEight = getFibonacciNumber(8);
    const valAtTwenty = getFibonacciNumber(20);
    const valAtFifty = getFibonacciNumber(30);
    const valAtOneHundred = getFibonacciNumber(100);

    expect(valAtSix).toEqual(8);
    expect(valAtSeven).toEqual(13);
    expect(valAtEight).toEqual(21);
    expect(valAtTwenty).toEqual(6765);
    expect(valAtFifty).toEqual(832040);
    expect(valAtOneHundred).toEqual(687995182);
  });
});
