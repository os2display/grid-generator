import { createGridArea, createGrid } from './grid-generator';
test('Create grid area: from a to d', () => {
  expect(createGridArea(["a", "d"])).toBe("a / a / d / d");
});

test('Create grid area: from b to k', () => {
  expect(createGridArea(["b", "k"])).toBe("b / b / k / k");
});

test('Create grid area: from b to k with multiple array values', () => {
  expect(createGridArea(["b","k","dd", "k"])).toBe("b / b / k / k");
});

test('Create grid: 2x2', () => {
  expect(createGrid(2,2)).toBe("'a b'\n 'c d'\n ");
});

test('Create grid: 10x2', () => {
  console.log(createGrid(10,2))
  expect(createGrid(10,2)).toBe("'a b'\n 'c d'\n 'e f'\n 'g h'\n 'i j'\n 'k l'\n 'm n'\n 'o p'\n 'q r'\n 's t'\n ");
});
