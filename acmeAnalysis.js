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
    if (found) accumulator.push(currentValue);
    return accumulator;
  }, []);
};

const topSellingProductByQuantity = (orderVals, productVals) => {
  const prodSold = productsPurchased(orderVals, productVals);
  //track quantity for products sold
  prodSold.forEach(elem => {
    elem.quantity = 0;
  });

  orderVals.forEach(elem => {
    let found = prodSold.find(element => {
      // eslint-disable-next-line no-return-assign
      return element.id === elem.productId;
    });
    if (found) found.quantity += elem.quantity * found.price;
  });
  return prodSold.reduce((acc, curr) => {
    if (acc.length === 0) {
      acc.push(curr);
    } else if (acc[0].quantity < curr.quantity) {
      acc[0] = curr;
    }
    return acc;
  }, []);
};

const usersWithOrders = (userVals, orderVals) => {
  //reduce the products array to only the products that have been purchased
  return userVals.reduce((accumulator, currentValue) => {
    //search the orders for the user id
    let found = orderVals.find(element => {
      return element.userId === currentValue.id;
    });
    if (found) accumulator.push(currentValue);
    return accumulator;
  }, []);
};

console.log(productsPurchased(orders, products));
console.log(topSellingProductByQuantity(orders, products));
console.log(usersWithOrders(users, orders)); //logs info on moe and curly

//why does this give me an error when I run it in node
//Also the test was still able to pick up the file even with this commented out
//module.exports = acmeAnalysis;
