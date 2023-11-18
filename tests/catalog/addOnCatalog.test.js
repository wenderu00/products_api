const chai = require('chai');
const Catalog = require('../../src/catalog');
const expect = chai.expect;
const catalog = new Catalog();
const validObject = {
    name: "monkey",
    category: "NFT"
}
const userId = 1;
const invalidObject = {}

describe('addOnCatalog catalog class method tests', function(){
    it('catalog have addOnCatalog method', function(done){
        expect(catalog)
          .to.have.property('addOnCatalog');
        done();
      })
      
      it('add one valid object on catalog and catch id', function(done){
        let productId = catalog.addOnCatalog(validObject,userId);
        expect(productId)
          .to.equals(1)
        done()
      })
      
      it('products length to be one', function(done){
        expect(catalog.products.length)
          .to.equal(1)
        done()
      })
      
      it('cant add one invalid object on catalog', function(done){
        expect(catalog.addOnCatalog(invalidObject))
          .to.equal(false)
        done()
      })
})