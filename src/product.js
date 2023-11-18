class Product{
    category;
    id;
    userId;
    name;
    
    constructor(userId, id, category, name){
        this.userId = userId;
        this.id= id;
        this.category = category;
        this.name= name;
    }

    static canBeConvert(obj){        
        if(obj.userId == undefined){
            return false
        }

        if(obj.id==undefined){
            return false
        }

        if(obj.category == undefined){
            return false
        }
        
        if(obj.name == undefined){
            return false
        }

        return true

    }

    static objectToProduct(obj){
        if(!this.canBeConvert(obj)){
            return false
        }
        let product = new Product(obj.userId, obj.id, obj.category, obj.name )
        return product;
    }
    
}

module.exports = Product