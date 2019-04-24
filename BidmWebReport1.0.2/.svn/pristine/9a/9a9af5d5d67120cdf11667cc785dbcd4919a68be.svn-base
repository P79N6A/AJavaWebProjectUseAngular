export class CfWipMoveObject{
    line = ''; // 这个line就是 oper
    linestate = '';
    wiptotal = 0;
    wip = 0;
    productname = '';
    moveplan = 0;
    moveact = 0;
    movebal = 0;

    constructor(line:string,linestate :string,wiptotal:number,wip:number,productname:string,
        moveplan:number,moveact:number,movebal:number ){

            this.line = line;    
            this.linestate = linestate; 
            this.wiptotal = wiptotal;  
            this.wip = wip;
            this.productname = productname;
            this.moveplan = moveplan;
            this.moveact = moveact; 
            this.movebal = movebal;
        }

    setProp(line:string,linestate ?:string,wiptotal?:number,wip?:number,productname?:string,
                moveplan?:number,moveact?:number,movebal?:number){
        this.line = line;
        if(linestate){
            this.linestate = linestate;
        }
        if(wiptotal){
            this.wiptotal = wiptotal;
        }
        if(wip){
            this.wip = wip;
        }
        if(productname){
           this.productname 
        }

        if(moveplan){
            this.moveplan = moveplan
        }
        if(moveact){
           this.moveact = moveact; 
        }
        if(movebal){
            this.movebal = movebal;
        }
    }

}