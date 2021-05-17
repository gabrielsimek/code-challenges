
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
  if (input.toString().match(/[0-9]/g)) return true;
  return false;
  //^^Katherines much cleaner solution
  //
//export function isNum(data){
 // return /\d/.test(data);
};

  // let result = false;
  // input.toString().split('').forEach((item) => {
  //   if (Number(item)) {
  //     result = true;
  //   } 
  // });
  
  // return result;
  
//};

export const containsWorld = (input) => {
  if (input.match(/world/g)) return true;
  else return false;
  
};

export const isCapitalized = (str) => {
  return str.match(/[A-Z]\w+/g) || [];
  // const anArry = str.replace(/[,).\\-]/g, '').split(' ').filter((item) => {
  //   return item[0].match(/[A-Z]\w+/g);
  //   //keep looking for A-z until you get to a non letter character.
    
  // });
  // return anArry;


};

export const citiesAtoJ = (arr) => {
  return arr.filter((item) =>{
    
    return item[0].match(/[A-J]/);
  }
  );
  
};
export const matchMonth = (str) => {
  return /^[Oo]ct(ober)?$/.test(str);
  ;
};