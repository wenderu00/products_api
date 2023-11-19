const Catalog = require('../../src/catalog');
const Product = require('../../src/product');
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
          .toHaveProperty('getProductById')
        done()
    })
    it('catalog getProductById method with invalid id return false', function(done){
        let invalidId = 500;
        let invalidMethodResponse = catalog.getProductById(invalidId);
        expect(invalidMethodResponse)
          .toEqual(false)
        done()
    })
    it('catalog getProductById method with valid id returns a product', function(done){
        expect(catalog.getProductById(1) instanceof Product)
          .toBeTruthy()
        done()
    })
})
