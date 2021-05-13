export const toLastNames = people => {
  return people.map(person => `${person.firstName} ${person.lastName}`);
  
};

export const addValues = values => {

  return values.reduce((accumulator, value) => {
    return accumulator += value;

  }, 0);
  
};


export const addPurchases = items => {
  return items.reduce((accumulator, item) => {
    return accumulator += item.purchasePrice;
  }, 0);

  
};

export const countNumberOfElements = array => {
 
  return array.reduce((accumulator) => {
    accumulator++;
    return accumulator
    ;
    
  }, 0);
  
  
};
export const returnNames = array => {
  return array.reduce((accumulator, item) => {
    accumulator.push(item.name);
    return accumulator;
        
  }, []);

};

export const reversedString = string => {
  return string.split('').reduce((accumulator, item) => {
    console.log(item + accumulator);
    return item + accumulator;    
  }, '');
  

};

