export class moduleWipObject{
    hourTimeKey :string;
	  fgCode :string;
	  checkInCode :string;
	  line :string;
	  productSize :string;
	  productType :string;
	  operationDesc :string;
	  glsQty :number;
    pnlQty :number;

      public setHourTimekey(value:string){
        this.hourTimeKey = value;
      }
      public setFgCode(value:string){
        this.fgCode = value;
      }
      public setcheckInCode(value:string){
        this.checkInCode = value;
      }
      public setline(value:string){
        this.line = value;
      }
      public setproductSize(value:string){
        this.productSize = value;
      }
      public setproductType(value:string){
        this.productType = value;
      }

      public setoperationDesc(value:string){
        this.operationDesc = value;
      }
      public setglsQty(value:number){
        this.glsQty = value;
      }
      public setpnlQty(value:number){
        this.pnlQty = value;
      }



}