export function howMuchPencil(str) {
  let returnArr = [];
  for (let i = 0; i < str.length + 1; i++){
    returnArr.push(str.slice((i)));
  }
  return returnArr;
}