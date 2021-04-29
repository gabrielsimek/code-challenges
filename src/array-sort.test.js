import { leastToGreatest, greatestToLeast, lengthSort, alphabetical, byAge } from './array-sort';

test('Least to Greatest', () => {
  const input = [1, 3, 5, 2, 90, 20]; // arrange
  const output = leastToGreatest(input); // act
  expect(output).toEqual([1, 2, 3, 5, 20, 90]); // assert
});


test('Greatest to Least', () => {
  const input = [1, 3, 5, 2, 90, 20]; // arrange
  const output = greatestToLeast(input); // act
  expect(output).toEqual([90, 20, 5, 3, 2, 1]); // assert
});


test('Shortest to Longest', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten']; // arrange
  const output = lengthSort(input); // act
  expect(output).toEqual(['by', 'dog', 'wolf', 'eaten', 'family']); // assert
});


test('Alphabetical', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten']; // arrange
  const output = alphabetical(input); // act
  expect(output).toEqual(['by', 'dog', 'eaten', 'family', 'wolf']); // assert
});


test('By Age', () => {
  const input = [
    { name: 'Quiet Samurai', age: 22 },
    { name: 'Arrogant Ambassador', age: 100 },
    { name: 'Misunderstood Observer', age: 2 },
    { name: 'Unlucky Swami', age: 77 }
  ]; // arrange
  const output = byAge(input); // act
  expect(output).toEqual([ 
    { name: 'Misunderstood Observer', age: 2 },
    { name: 'Quiet Samurai', age: 22 },
    { name: 'Unlucky Swami', age: 77 },
    { name: 'Arrogant Ambassador', age: 100 } 
  ]); // assert
});
  