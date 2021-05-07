import { getHouses, updateNumbers, totalCharacters, hasChildrenEntries, sortByChildren } from './more-object-keys-entries.js';
const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

const numbersObj = { 'Grace Hopper': '222-303-5938', 'Ada Lovelace': '222-349-9842', 'Alan Turing': '222-853-5933' };

test('it gets the names of the houses', () => {
   //arrange
  
  const output = getHouses(characters); //act
  expect(output).toEqual(expect.arrayContaining(['Greyjoy', 'Snow', 'Arryn', 'Tyrell', 'Lannister', 'Targaryen', 'Stark'])); //assert
});

test('Given an object, it returns an array of transformed key value pairs into strings.', () => {
  
  const output = updateNumbers(numbersObj); //act
  expect(output).toEqual(['Grace Hopper: 222-303-5938', 'Ada Lovelace: 222-349-9842', 'Alan Turing: 222-853-5933']);

});

test('Given an array of characters, your function will return the total number of characters in the data array. Hint you need to count the spouse, the children and the character for the total.', () => {
  
  const output = totalCharacters(characters); //act
  expect(output).toEqual(26);

});

test('Eddard has children', () => {
  
  const output = hasChildrenEntries(characters, 'Eddard'); //act
  expect(output).toEqual(true);

});

test('Euron has children', () => {
  
  const output = hasChildrenEntries(characters, 'Euron'); //act
  expect(output).toEqual(false);

});

test('sort by children', () => {
  
  const output = sortByChildren(characters); //act
  expect(output).toEqual([{ name: 'Euron', spouse: null, children: [], house: 'Greyjoy' }, { name: 'Jon S.', spouse: null, children: [], house: 'Snow' }, { name: 'Jon A.', spouse: 'Lysa', children: ['Robin'], house: 'Arryn' }, { name: 'Mace', spouse: 'Alerie', children: ['Margaery', 'Loras'], house: 'Tyrell' }, { name: 'Cersei', spouse: 'Robert', children: ['Joffrey', 'Myrcella', 'Tommen'], house: 'Lannister' }, { name: 'Daenarys', spouse: 'Khal Drogo', children: ['Drogon', 'Rhaegal', 'Viserion'], house: 'Targaryen' }, { name: 'Eddard', spouse: 'Catelyn', children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'], house: 'Stark' }]);

});