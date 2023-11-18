const chai = require('chai');
const Catalog = require('../../src/catalog');
const expect = chai.expect;
const catalog = new Catalog();


describe('catalog object properties tests', function() {
  it('catalog have property products', function(done){
    expect(catalog)
      .to.have.property('products');
    done()
  })
  
  it('catalog products is a array', function(done) {
    expect(catalog.products)
      .to.be.a('array');
    done();
  });
  

  
});