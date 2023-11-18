const Product = require('./product')

class Catalog{
    products = []

    addOnCatalog(obj,userId){
        obj.userId = userId
        obj.id = this.generateId();
        let product = Product.objectToProduct(obj);
        if(!product){
            return false;
        }
        this.products.push(product);
        return product.id;
    }

    getProductsByUserId(userId){
        return this.products.filter(product => product.userId == userId);
    }

    updateProductById(productId,userId, obj){
        let product = this.getProductById(productId)
        
        if(!product){
            return false;
        }

        let isUserProductOwner = product.userId == userId;

        if(!isUserProductOwner){
            return false;
        }

        let dontHaveCategory = obj.category == undefined;
        let dontHaveName = obj.name == undefined;

        if(dontHaveCategory && dontHaveName){
            return false;
        }
        else if(dontHaveCategory){
            product.name = obj.name;
        }
        else if(dontHaveName){
            product.category = obj.category;
        }else{
            product.name = obj.name;
            product.category = obj.category;
        }
        return true;
    }

    generateId(){
        let nextId = this.products.length+1;
        return nextId;
    }

    getProductById(productId){
        var product = this.products.find(product => product.id == productId);
        if(product == undefined){
            return false
        }
        return product
    }
}

module.exports = Catalog;