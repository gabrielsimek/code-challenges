export const replaceZeros = (string) => {
  return string.replace(/[0]/g, 'zero');
  
};

export const validatePin = (pin) => {
  if (pin.toString().match(/^\d{4}$/g)) return true;
  ///starts with a digit 
  else return false;
};

export const validateWord = (word) => {
  if (word.match(/\b\w{5,10}\b/)) return true;
  else return false;
};

export const hasNumber = (string) => {
  if (string.match(/^\w+\d+$/gi)) return true;
  else return false;
};