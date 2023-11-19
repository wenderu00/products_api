const Catalog = require('../../src/catalog');
const catalog = new Catalog();


describe('catalog object properties tests', function() {
  it('catalog have property products', function(done){
    expect(catalog)
      .toHaveProperty('products');
    done()
  })
  
  it('catalog products is a array', function(done) {
    expect(Array.isArray(catalog.products))
      .toBeTruthy();
    done();
  }); 
});
