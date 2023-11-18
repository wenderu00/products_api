const chai = require('chai');
const expect = chai.expect;
const Product = require('../../src/product');
const userId = 1;
const id = 1;
const category = "NFT";
const name = "monkey"
const genericProduct = new Product(userId,id,category, name);

describe('generic product object properties tests',function(){
    it('generic product object has a category property', function(done){
        expect(genericProduct)
            .to.have.property("category")
        done()
    })
    it('generic product object has a id property', function(done){
        expect(genericProduct)
            .to.have.property("id")
        done()
    })
    it('generic product object has a userId property', function(done){
        expect(genericProduct)
            .to.have.property("userId");
        done()
    })
    it('generic product object has a name property', function(done){
        expect(genericProduct)
            .to.have.property("name");
        done();
    })
    it('generic product has a name', function(done){
        expect(genericProduct.name)
            .to.equal(name);
        done()
    })
    it('generic product has a category', function(done){
        expect(genericProduct.category)
            .to.equal(category);
        done()
    })
    it('generic product has a id', function(done){
        expect(genericProduct.id)
            .to.equal(id);
        done()
    })
    it('generic product has a userId', function(done){
        expect(genericProduct.userId)
            .to.equal(userId);
        done()
    })
})