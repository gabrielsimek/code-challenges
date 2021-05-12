import { toLastNames, addValues, addPurchases } from './array-reduce.js';

test('should return a new list of each persons full name', () => {
  expect(toLastNames([{ firstName:'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond' }])).toStrictEqual(['Jane Doe', 'James Bond']);
});

test('should return the sum of all numbers in an array', () => {

  expect(addValues([1, 2, 3])).toStrictEqual(6);
  expect(addValues([1, -2, 3])).toStrictEqual(2);
  expect(addValues([5, 15, 12, 32, 99])).toStrictEqual(163);
});

test('should return the total amount purchased from ar of objects', () => {
  const items = [
    { 
      item: 'switch',
      purchasePrice: 399 
    },
    { 
      item: 'iPhone',
      purchasePrice: 1100 
    },
    { 
      item: 'pens',
      purchasePrice: 8 
    },
    { 
      item: 'laptop',
      purchasePrice: 1400 
    }
  ];
  expect(addPurchases(items)).toStrictEqual(2907);
//   expect(addValues([1, -2, 3])).toStrictEqual(2);
//   expect(addValues([5, 15, 12, 32, 99])).toStrictEqual(163);
});