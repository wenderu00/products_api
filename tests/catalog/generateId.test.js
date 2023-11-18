const chai = require('chai');
const Catalog = require('../../src/catalog');
const expect = chai.expect;
const catalog = new Catalog();


describe('generateId catalog class method test', function(){
    it('catlog have generateId method',function(done){
      expect(catalog)
        .to.have.property('generateId')
      done()
    })
    
    it('catalog generate id metodo returns length+1', function(done){
      expect(catalog.generateId())
        .to.be.equal(catalog.products.length+1)
      done()
    })
})