function Catalog(){
    this.products = [];
}

Catalog.prototype.addOnCatalog = function(product,userId){
    product.userId = userId;
    product.id = this.products.length+1;
    this.products.push(product);
    return product.id;
}

Catalog.prototype.getProductsById = function(userId){
    return this.products.filter(product => product.userId == userId);
}

module.exports = Catalog;