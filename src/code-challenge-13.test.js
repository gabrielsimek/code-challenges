import { sortByChildren, containsW, isNum, containsWorld, isCapitalized, citiesAtoJ } from './code-challenge-13.js';
describe('Testing challenge 1', () => {
  let characters = [
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
  test('It should sort the characters by number of children', () => {
    expect(sortByChildren(characters)[0].name).toStrictEqual('Euron');
    expect(sortByChildren(characters)[0].children.length).toStrictEqual(0);
  });

  test('should return a reverse of the provided string', () => {

    expect(containsW('Hi, my name is Will')).toStrictEqual(true);
   
    expect(containsW('Hi , my name is Bob')).toStrictEqual(false);
   
  });
  test('should return true if data contains number', () => {

    expect(isNum(1234567890)).toStrictEqual(true);
    expect(isNum('12345')).toStrictEqual(true);
    expect(isNum('h3llo w0rld')).toStrictEqual(true);
    expect(isNum('h3llo w0rld')).toStrictEqual(true);
    expect(isNum('hello world')).toStrictEqual(false);
    expect(isNum('')).toStrictEqual(false);
   
  });
  test('should return true if data contains world', () => {

    expect(containsWorld('hello world')).toStrictEqual(true);
    expect(containsWorld('Hello World')).toStrictEqual(false);
    expect(containsWorld('hello everyone')).toStrictEqual(false);
  
   
  });
  test('should return words that begin with a capital letter', () => {

    expect(isCapitalized('We only want to Return the Words that begin With a capital Letter')).toStrictEqual(['We', 'Return', 'Words', 'With', 'Letter']);
    expect(isCapitalized('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).')).toStrictEqual(['Given', 'Runnymede', 'Windsor', 'Staines', 'June', 'May']);
    expect(isCapitalized('these words are all failures')).toStrictEqual([]);
  
   
  });

  test('should return a new array containing cities begining with A through J', () => {

    expect(citiesAtoJ(['Cleveland', 'San Diego', 'Birmingham', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Austin', 'Boston', 'Newport Beach', 'Hoboken'])).toStrictEqual(['Cleveland', 'Birmingham', 'Austin', 'Boston', 'Hoboken']);
    expect(citiesAtoJ(['Albuquerque', 'Chicago', 'Philadelphia', 'Newark', 'Sacramento', 'Eugene'])).toStrictEqual(['Albuquerque', 'Chicago', 'Eugene']);
    expect(citiesAtoJ([])).toStrictEqual([]);
  
  });
});


// describe.skip('(Stretch) challenge 7', () => {
//   test('It should return true if Oct, oct, or October', () => {
//     expect(matchMonth('Oct')).toStrictEqual(true);
//     expect(matchMonth('oct')).toStrictEqual(true);
//     expect(matchMonth('October')).toStrictEqual(true);
//     expect(matchMonth('october')).toStrictEqual(true);
//     expect(matchMonth('November')).toStrictEqual(false);
//     expect(matchMonth('nov')).toStrictEqual(false);
//     expect(matchMonth('123')).toStrictEqual(false);
//     expect(matchMonth('octob')).toStrictEqual(false);
//   });
// });
// describe.skip('(Stretch) challenge 8', () => {
//   test('Return all words with a space following', () => {
//     expect(noPunctuation('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia vel massa sed egestas. Nunc faucibus iaculis elit, a scelerisque enim condimentum sed. Aenean ac scelerisque sem, et pharetra diam.'))
//       .toStrictEqual(['Lorem ', 'ipsum ', 'dolor ', 'sit ', 'consectetur ', 'adipiscing ', 'Cras ', 'lacinia ', 'vel ', 'massa ', 'sed ', 'Nunc ', 'faucibus ', 'iaculis ', 'a ', 'scelerisque ', 'enim ', 'condimentum ', 'Aenean ', 'ac ', 'scelerisque ', 'et ', 'pharetra ']);
//   });
// });
// describe.skip('(Stretch) challenge 9', () => {
//   test('Replace vowels with underscore', () => {
//     expect(hangman('This is a regex challenge. We are trying to create a hangman phrase where all of the vowels are missing!'))
//       .toStrictEqual('Th_s _s _ r_g_x ch_ll_ng_. W_ _r_ try_ng t_ cr__t_ _ h_ngm_n phr_s_ wh_r_ _ll _f th_ v_w_ls _r_ m_ss_ng!');
//     expect(hangman('I wAnt them all tO bE removed and replaced with Underscores.'))
//       .toStrictEqual('_ w_nt th_m _ll t_ b_ r_m_v_d _nd r_pl_c_d w_th _nd_rsc_r_s.');
//   });
// });
// const seashells = `She sells seashells by the seashore. The shells she sells are surely seashells. So if she sells shells on the seashore, I'm sure she sells seashore shells.`;
// describe.skip('(Stretch) challenge 10', () => {
//   test('Grab sells, seashells, shells', () => {
//     expect(findShells(seashells)).toStrictEqual(['sells', 'seashells', 'shells', 'sells', 'seashells', 'sells', 'shells', 'sells', 'shells']);
//   });
// });
