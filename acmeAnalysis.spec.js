const expect = require('chai').expect;
//make a const for each function of struture that you will be testing inside of the file being tested
const productsPurchased = './acmeAnalysis';

describe('acmeAnalysis', () => {
  it('exists', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(productsPurchased).to.be.ok;
  });
});
