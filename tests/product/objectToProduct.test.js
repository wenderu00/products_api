const Product = require('../../src/product');
const emptyProduct = new Product();
const userId = 1;
const id = 1;
const category = "NFT";
const name = "monkey"
const genericProduct = new Product(userId,id,category, name);
const validObj = {
    userId: userId,
    id: id,
    category: category, 
    name: name
}


describe('objectToProduct product class method tests', function(){
    
    it('has convert method objectToProduct', function(done){
        expect(Product)
            .toHaveProperty('objectToProduct')
        done()
    })
    it('convert a valid object to product object', function(done){
        expect(Product.objectToProduct(validObj) instanceof Product)
            .toEqual(true);
        done();
    })
    it('cant be convert a invalid object to product', function(done){
        expect(Product.objectToProduct(emptyProduct))
            .toEqual(false);
        done();
    })
})
