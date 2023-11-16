class Catalog{
    products = []

    addOnCatalog(product,userId){
        product.userId = userId;
        product.id = this.products.length+1;
        this.products.push(product);
        return product.id;
    }

    getProductsByUserId(userId){
        return this.products.filter(product => product.userId == userId);
    }

    updateProductById(productId,userId){
    }
}

module.exports = Catalog;