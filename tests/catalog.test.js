const chai = require('chai');
const Catalog = require('../src/catalog');
const expect = chai.expect;
const catalog = new Catalog();

describe('catalog object Tests', function() {
  it('catalog products is a array', function(done) {
    expect(catalog.products).to.be.an('array');
    done();
  });
  it('add one product on catalog', function(done){
    let userId = 1
    let productObject = {}
    let productId = catalog.addOnCatalog(productObject,userId);
    expect(productId).to.equal(1);
    expect(catalog.products.length).to.equals(1)
    done()
  }),
  it('product have id', function(done){
    expect(catalog.products[0].id).to.be.equal(1)
    done()
  }),
  it('catalog can returns products with id', function(done){
    expect(catalog.getProductsById(1)).to.be.an('array');
    expect(catalog.getProductsById(1).length).to.be.equal(1)
    done();
  })
});