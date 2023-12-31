const chai = require('chai');
const expect = chai.expect;
const Product = require('../../src/product');
const userId = 1;
const id = 1;
const category = "NFT";
const name = "monkey";

describe('canBeConvert product class method test',function(){
    it('has can be convert method', function(done){
        expect(Product)
            .to.have.property('canBeConvert')
        done()
    })
    
    it('can be converct a valid object to product return true', function(done){
        let validObj = {
            userId: userId,
            id: id,
            category: category, 
            name: name
        }
        expect(Product.canBeConvert(validObj))
            .to.equal(true)
        done()
    })
    it('can be convert a object without userId to product return false', function(done){
        let objWithoutUserId = {
            id: id,
            category: category, 
            name: name
        }
        expect(Product.canBeConvert(objWithoutUserId))
            .to.equal(false)
        done()
    })
    it('can be convert a object without id to product return false', function(done){
        let objWithoutId = {
            userId: userId,
            category: category, 
            name: name
        }
        expect(Product.canBeConvert(objWithoutId))
            .to.equal(false)
        done()
    })
    it('can be convert a object without category to product return false', function(done){
        let objWithoutCategory = {
            userId: userId,
            id: id,
            name: name
        }
        expect(Product.canBeConvert(objWithoutCategory))
            .to.equal(false)
        done()
    })
    it('can be convert a object without name to product return false', function(done){
        let objWithOutName = {
            userId: userId,
            id: id,
            category: category
        }
        expect(Product.canBeConvert(objWithOutName))
            .to.equal(false)
        done()
    })
})