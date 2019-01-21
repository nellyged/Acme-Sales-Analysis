const products = [
  {
    id: 1,
    name: 'foo',
    price: 7,
  },
  {
    id: 2,
    name: 'bar',
    price: 2,
  },
  {
    id: 5,
    name: 'bazz',
    price: 1,
  },
];

const users = [
  {
    id: 1,
    name: 'moe',
  },
  {
    id: 2,
    name: 'larry',
  },
  {
    id: 3,
    name: 'curly',
  },
];
const orders = [
  {
    id: 1,
    productId: 1,
    quantity: 3,
    userId: 1,
  },
  {
    id: 2,
    productId: 1,
    quantity: 7,
    userId: 1,
  },
  {
    id: 3,
    productId: 5,
    quantity: 70,
    userId: 3,
  },
  {
    id: 4,
    productId: 5,
    quantity: 1,
    userId: 3,
  },
];

const productsPurchased = (orderVals, productVals) => {
  //reduce the products array to only the products that have been purchased
  return productVals.reduce((accumulator, currentValue) => {
    //search the orders for the product id
    let found = orderVals.find(element => {
      return element.productId === currentValue.id;
    });
    //console.log(`Acc right now is ${accumulator}`);
    //return accumulator.concat(currentValue);
    if (found) accumulator.push(currentValue);
    return accumulator;
  }, []);
};

console.log(productsPurchased(orders, products));

//why does this give me an error when I run it in node
//Also the test was still able to pick up the file even with this commented out
//module.exports = acmeAnalysis;
