const expect = require('chai').expect;
//make a const for each function of struture that you will be testing inside of the file being tested
const productsPurchased = './acmeAnalysis';
const topSellingProductByQuantity = './acmeAnalysis';
const usersWithOrders = './acmeAnalysis';

describe('acmeAnalysis', () => {
  it('exists', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(productsPurchased).to.be.ok;
  });
  it('exists', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(topSellingProductByQuantity).to.be.ok;
  });
  it('exists', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(usersWithOrders).to.be.ok;
  });
});
