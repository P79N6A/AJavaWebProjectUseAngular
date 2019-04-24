export class cell_wip_current{
    "key" = "";
    "PI" = "";
    "Rubbing" = "";
    "Assy" = "";
    "Cut" = "";
    "Cut Panel" = "";
    "ODF" = "";
    "1st Cut" = "";
    "CT" = "";
    "Packing" = "";
    "SUM" = "";

     
 public setProperty(propertyName:string,propertyValue:any):void{
    if(propertyName == "PI"){
       this["PI"] = propertyValue;
    }
    else if(propertyName == "Rubbing"){
       this["Rubbing"] = propertyValue;
    }
    else if(propertyName == "ODF"){
       this["ODF"] = propertyValue;
    }
    else if(propertyName == "1st Cut"){
        this["1st Cut"] = propertyValue;
     }
     else if(propertyName == "CT"){
        this["CT"] = propertyValue;
     }
     else if(propertyName == "Packing"){
        this["Packing"] = propertyValue;
     }
     else if(propertyName == "Assy"){
        this["Assy"] = propertyValue;
     }
     else if(propertyName == "Cut"){
        this["Cut"] = propertyValue;
     }
     else if(propertyName == "Cut Panel"){
        this["Cut Panel"] = propertyValue;
     }

     else if(propertyName == "SUM"){
        this["SUM"] = propertyValue;
     }
 }
}