export function fiveAndGreaterOnly(arr) {
  return arr.filter(n => n > 5);
}

export function evensOnly(arr) {
  return arr.filter((n) => {
    return (n % 2) === 0;
  });
}

export function fiveCharactersOrFewerOnly(arr){
  return arr.filter(string => string.length <= 5);
  
}

export function peopleWhoBelongToTheIlluminati(arr){
  return arr.filter(person => person.member);
}

export function ofAge(arr){
  return arr.filter(person => person.age > 18);
  
}

