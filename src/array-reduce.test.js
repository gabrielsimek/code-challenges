import { toLastNames, addValues, addPurchases, countNumberOfElements, returnNames, reversedString } from './array-reduce.js';

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a' },
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];
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

test('should return the number of elements in an array', () => {

  expect(countNumberOfElements([1, 2, 3])).toStrictEqual(3);
  expect(countNumberOfElements(['1, -2, 3'])).toStrictEqual(1);
  expect(countNumberOfElements(['5', '15', '12', '32', '99'])).toStrictEqual(5);
  expect(countNumberOfElements([
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
  ])).toStrictEqual(4);
});

test('should return an array with names of characters', () => {

  expect(returnNames(starWarsData)).toStrictEqual(['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa']);
//   expect(addValues([1, -2, 3])).toStrictEqual(2);
//   expect(addValues([5, 15, 12, 32, 99])).toStrictEqual(163);
});

test('should return a reverse of the provided string', () => {

  expect(reversedString('Hi, my name is Gabriel')).toStrictEqual('leirbaG si eman ym ,iH');
 
  expect(reversedString('I am a software developer')).toStrictEqual('repoleved erawtfos a ma I');
 
});