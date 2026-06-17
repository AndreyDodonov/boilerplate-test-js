console.log("hello!");

export function testOfTests (numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};