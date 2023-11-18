const chai = require('chai');
const Catalog = require('../../src/catalog');
const Product = require('../../src/product');
const expect = chai.expect;
const catalog = new Catalog();
const validObject = {
    name: "monkey",
    category: "NFT"
}
const userId = 1;
catalog.addOnCatalog(validObject, userId);

describe('getProductsById catalog class method tests', function(){
    it('catalog have a getProductById', function(done){
        expect(catalog)
          .to.have.property('getProductById')
        done()
    })
    it('catalog getProductById method with invalid id return false', function(done){
        let invalidId = 500;
        let invalidMethodResponse = catalog.getProductById(invalidId);
        expect(invalidMethodResponse)
          .to.be.equal(false)
        done()
    })
    it('catalog getProductById method with valid id returns a product', function(done){
        expect(catalog.getProductById(1))
          .to.be.instanceOf(Product)
        done()
    })
})