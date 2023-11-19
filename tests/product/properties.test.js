const Product = require('../../src/product');
const userId = 1;
const id = 1;
const category = "NFT";
const name = "monkey"
const genericProduct = new Product(userId,id,category, name);

describe('generic product object properties tests',function(){
    it('generic product object has a category property', function(done){
        expect(genericProduct)
            .toHaveProperty("category")
        done()
    })
    it('generic product object has a id property', function(done){
        expect(genericProduct)
            .toHaveProperty("id")
        done()
    })
    it('generic product object has a userId property', function(done){
        expect(genericProduct)
            .toHaveProperty("userId");
        done()
    })
    it('generic product object has a name property', function(done){
        expect(genericProduct)
            .toHaveProperty("name");
        done();
    })
    it('generic product has a name', function(done){
        expect(genericProduct.name)
            .toEqual(name);
        done()
    })
    it('generic product has a category', function(done){
        expect(genericProduct.category)
            .toEqual(category);
        done()
    })
    it('generic product has a id', function(done){
        expect(genericProduct.id)
            .toEqual(id);
        done()
    })
    it('generic product has a userId', function(done){
        expect(genericProduct.userId)
            .toEqual(userId);
        done()
    })
})
