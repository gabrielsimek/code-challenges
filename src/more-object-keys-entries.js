export function getHouses(arr) {
  return arr.map((item) => {
    return Object.values(item)[3];
  });
}

export function updateNumbers(obj) {
  return Object.entries(obj).map((item) => {
    return `${item[0]}: ${item[1]}`;
  });
  

//   const anArray = [Object.entries(obj).join()];
//   console.log(anArray);
//   return anArray;
  
}

export function totalCharacters(arr) {
  let count = 0;

  arr.forEach((item) => {
    
    if (item.name) count++;

    if (item.spouse) count++;

    if (item.children) count = count + item.children.length;

  });
  return count;



  let count = 0;
  //can use object.values on array!!!!!!1
  Object.values(arr).forEach(character => {
    count++;
    if (character.spouse) count++;
    count += character.children.length;
  });
  
  return count;

  return arr.reduce((acc, current) => {
    if (current.name) acc += 1;
    if (current.spouse) acc += 1;
    if (current.children) acc += current.children.length;
    return acc;
  }, 0);




  //let count = 0;
//   for (let item in arr) {
    //     if (item.name) count++;
    
    //     if (item.spouse) count++;
    
    //     if (item.children) count += item.children.length;
    
    //   }
}

export function hasChildrenEntries(arr, character) {
  let hasChildren = false;
  
  arr.forEach((item) => {
    if (item.name === character) {
      if (item.children.length > 0) return hasChildren = true;
    };
  });
  return hasChildren;

} 

export function sortByChildren(arr){
  const anArray = arr.sort((a, b) => {
    return a.children.length - b.children.length;
  })
    .sort((a, b) => {
      return a.name - b.name;
    });



  
  return anArray;
} 