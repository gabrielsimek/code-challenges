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