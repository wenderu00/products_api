const chai = require('chai');
const Catalog = require('../../src/catalog');
const expect = chai.expect;
const catalog = new Catalog();
const name = "monkey";
const category = "NFT";
const validObject = {
    name: name,
    category: category
}
const userId = 1;
const productId = catalog.addOnCatalog(validObject, userId);

describe('updateProductById catalog class method tests', function(){
    it('given a invalid productId return false', function(done){
        let invalidId = 50;
        let methodResponse = catalog.updateProductById(invalidId,userId, validObject);
        expect(methodResponse)
            .to.be.equal(false);
        done()
    })
    it('given userId is diferente of product userId then return false', function(done){
        let invalidUserId = 50;
        let methodResponse = catalog.updateProductById(productId, invalidUserId,validObject);
        expect(methodResponse)
            .to.be.equal(false);
        done()
    })
    it('given a object without name and product then return false', function(done){
        let emptyObject = {}
        let methodResponse = catalog.updateProductById(productId, userId, emptyObject);
        expect(methodResponse)
            .to.be.equal(false)
        done()
    })
    it('given a object with name only then returns true', function(done){
        let objWithName = {
            name: "mouse"
        }
        let methodResponse = catalog.updateProductById(productId,userId,objWithName);
        expect(methodResponse)
            .to.be.equal(true)
        done()
    })
    it('after only name to changed has product object name is updated', function(done){
        let productChanged = catalog.getProductById(productId);
        let nameChanged = productChanged.name
        expect(nameChanged)
            .to.be.equal('mouse')
        done()
    })
    it('after only name to changed has product object category still unchanged', function(done){
        let productChanged = catalog.getProductById(productId);
        let unchangedCategory = productChanged.category;
        expect(unchangedCategory)
            .to.be.equal(category)
        done()
    })
    it('given a object with category only then update product category', function(done){
        let objWithCategory = {
            category: "CRIPTO"
        }
        let methodResponse = catalog.updateProductById(productId,userId, objWithCategory)
        expect(methodResponse)
            .to.be.equal(true)
        done()
    })
    it('after only category changed has product object category name is updated', function(done){
        let productChanged = catalog.getProductById(productId);
        let categoryChanged = productChanged.category
        expect(categoryChanged)
            .to.be.equal("CRIPTO")
        done()
    })
    it('after only category changed has product object name still unchanged', function(done){
        let productChanged = catalog.getProductById(productId)
        let unchangedName = productChanged.name
        expect(unchangedName)
            .to.be.equal('mouse');
        done()
    })
    it('given a object with category and name then update name and category product', function(done){
        let objWithCategoryAndName = {
            name: name,
            category: category
        }
        let responseMethod = catalog.updateProductById(productId,userId, objWithCategoryAndName)
        expect(responseMethod)
            .to.be.equal(true)
        done()
    })
    it('after category and name are changed has product name is changed', function(done){
        let productChanged = catalog.getProductById(productId);
        let nameChanged = productChanged.name
        expect(nameChanged)
            .to.be.equal(name)
        done()
    })
    it('after category and name are changed has product category is changed', function(done){
        let productChanged = catalog.getProductById(productId);
        let categoryChanged = productChanged.category;
        expect(categoryChanged)
            .to.be.equal(category)
        done()
    })
    
})