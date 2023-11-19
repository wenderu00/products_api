const Catalog = require('../../src/catalog');
const catalog = new Catalog();

describe('generateId catalog class method test', function(){
    it('catlog have generateId method',function(done){
      expect(catalog)
        .toHaveProperty('generateId')
      done()
    })
    
    it('catalog generate id metodo returns length+1', function(done){
      expect(catalog.generateId())
        .toEqual(catalog.products.length+1)
      done()
    })
})
