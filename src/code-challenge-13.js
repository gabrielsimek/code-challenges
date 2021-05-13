
export function sortByChildren(arr){
  const anArray = arr.sort((a, b) => {
    return a.children.length - b.children.length;
  })
    .sort((a, b) => {
      return a.name - b.name;
    });
  

  return anArray;
}

export const containsW = (str) => {
  if (str.match(/w/gi)) return true;
  else return false;

};

export const isNum = (input) => {
  let result = false;
  input.toString().split('').forEach((item) => {
    if (Number(item)) {
      result = true;
    } 
  });
  
  return result;
  
};

export const containsWorld = (input) => {
  if (input.match(/world/g)) return true;
  else return false;
  
};

export const isCapitalized = (str) => {
  
  const anArry = str.replace(/[,).\\-]/g, '').split(' ').filter((item) => {
    return item[0].match(/[A-Z]/);
    
  });
  return anArry;


};

export const citiesAtoJ = (arr) => {
  return arr.filter((item) =>{
    return item[0].match(/[A-J]/g);
  }
  );
  
};