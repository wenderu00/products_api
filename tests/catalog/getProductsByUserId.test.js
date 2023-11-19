const Catalog = require('../../src/catalog');
const catalog = new Catalog();
const validObject = {
    name: "monkey",
    category: "NFT"
}
const userId = 1;
catalog.addOnCatalog(validObject, userId);
const productsOfUser = catalog.getProductsByUserId(userId);

describe('getProductsByUserId catalog class method tests', function(){
    it('getProductsByUserId user return a array', function(done){
        expect(Array.isArray(productsOfUser))
          .toBeTruthy();
        done()
    })

    it('getProductsByUserId with user which have products returns empty array', function(done){
        expect(productsOfUser.length)
          .toEqual(1)
        done();
    })
    
    it('getProductsByUserId with user which dont have products returns empty array', function(done){
        let dontHaveProducts = catalog.getProductsByUserId(50);
        expect(dontHaveProducts.length)
          .toEqual(0)
        done();
    })
})
