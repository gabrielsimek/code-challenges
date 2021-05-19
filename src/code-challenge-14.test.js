import { replaceZeros, validatePin, validateWord, hasNumber } from './code-challenge-14.js';
 
test('should a string with zero in the place os 0', () => {

  expect(replaceZeros('012345')).toStrictEqual('zero12345');
  expect(replaceZeros('324550123')).toStrictEqual('32455zero123');
  expect(replaceZeros('000111 000111')).toStrictEqual('zerozerozero111 zerozerozero111');
  
   
});
 
test('should return true if the input 4 long', () => {

  expect(validatePin(1234)).toStrictEqual(true);
  expect(validatePin(923423423)).toStrictEqual(false);
  expect(validatePin(12)).toStrictEqual(false);
  
   
});

test('should return true if the input between 5 and 10 ong', () => {

  expect(validateWord('asd')).toStrictEqual(false);
  expect(validateWord('asdfqwer')).toStrictEqual(true);
  expect(validateWord('asdfasdfasdfasdfasdfasdf')).toStrictEqual(false);
  
   
});

test('return true if string has on or more letters followed by one or more digits', () => {

  expect(hasNumber('asd')).toStrictEqual(false);
  expect(hasNumber('a1')).toStrictEqual(true);
  expect(hasNumber('casdfsdf12312312')).toStrictEqual(true);
  expect(hasNumber('aaaaaaaaaaaaaaaaaaaaa')).toStrictEqual(false);
  
   
});
