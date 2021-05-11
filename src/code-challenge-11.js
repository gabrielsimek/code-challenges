export function returnTen(str) {
  return str.split('').slice((-10));
}

export function findMax(matrix) {
  const anArray = [];
  matrix.join().split(',').forEach((item) => anArray.push(Number(item)));
  
  return Math.max(...anArray);
    
}

export function totalSum(matrix) {
  const anArray = [];
  matrix.join().split(',').forEach((item) => anArray.push(Number(item)));
  return anArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
 
    
}

export function grandTotal(stores){
  console.log(stores);
  const anArray = [];
  
  for (let i = 0; i < stores[0].length; i++){
    let sum = 0;
    
    for (let j = 0; j < stores.length; j++) {
      sum = sum + stores[j][i];
      
    }
    anArray.push(sum);
  }
//   console.log(anArray);
  return anArray;

};
  

export function salesData(hours, data){
  console.log(hours, data);
  const anArray = [];
  for (let i = 0; i < hours.length; i++){
    anArray.push({ sales: `${data[i]} cookies`, time: hours[i] });
    
    
  }
  return anArray;
  
}