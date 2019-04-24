export class ProductNameInfo{
    factory = null;
    product = null;
    productName = null;
    owner = null;

    setProperty(name : string,value:string){
        if(name == 'factory'){
            this.factory = value;
        }else if(name = 'product'){
            this.product = value;
        }else if(name == 'productName'){
            this.productName = value;
        }else if(name == 'owner'){
            this.owner = value;
        }
    }
}