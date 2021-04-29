export function doubleNumbers(arr) {
  return arr.map((num) => {
    return num * 2; 
  }
  );
    
}

export function stringItUp(arr){
  return arr.map((item) => item.toString());
}

export function capitalizeNames(arr){
  return arr.map((item)=> {
    return (item[0].toUpperCase() + item.slice(1).toLowerCase());

  });
}

export function namesOnly(arr){
  return arr.map(item => item.name);

}

export function makeStrings(arr){
  return arr.map(item => { 
      
    if (item.age > 18){
      return `${item.name} can go to The Matrix`;

    } else {
      return `${item.name} is under age!!`;

    }
   
  });
}

export function readyToPutInTheDOM(arr){
  return arr.map((item) => {
    return `<h1>${item.name}</h1><h2>${item.age}</h2>`;
  });
}