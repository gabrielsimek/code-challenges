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

