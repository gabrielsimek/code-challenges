export function howMuchPencil(str) {
  let returnArr = [];
  for (let i = 0; i < str.length + 1; i++){
    returnArr.push(str.slice((i)));
  }
  return returnArr;
}

export function wordsToCharList(arr) {
  return [...arr];
}

export function listFoods(recipe){
  let list = Object.values(recipe.ingredients);
  const anArray = [];
  for (let item of list){
  // index of   
    anArray.push((item.split(' ',).slice(2).join(' ')));
  }
  return anArray;
}

export function stepActions(recipe){
     // index of   
  let steps = Object.values(recipe.steps);
  const anArray = [];

  for (let item of steps){
    anArray.push((item.split(' ',).slice(0, 1).join(' ')));
  }
  return anArray;
  
}
// can use ..sbstr
export function removeLastCharacters(str, numberOfCharacters){
  if (numberOfCharacters < 0) {
    return str;
  } else {
    return str.slice(0, -numberOfCharacters);
  }
}
//can use reduce instead!!!!
export function totalSumCSV(str){
  let count = 0;
  for (let number of str.split(',')){
    count += (Number(number));
  }
  return count;
}
//can use .replace
export function removeVowels(str){
  const anArray = [];
  for (let item of [...str]){
    if (!item.match(/[aeiou]/i)){
      anArray.push(item);
    } 
  }
  return anArray.join('');
 
}

export function extractVowels(str){
  
  const vowels = [];
  const consonants = [];
  for (let item of [...str]){
    if (item.match(/[aeiou]/i)) vowels.push(item);
    if (!item.match(/[aeiou]/i)) consonants.push(item);
  }
  return [consonants.join(''), vowels.sort().join('')];

  
}