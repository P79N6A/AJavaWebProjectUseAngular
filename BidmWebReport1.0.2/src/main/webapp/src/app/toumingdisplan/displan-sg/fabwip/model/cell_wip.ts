export class cell_wip_current{
    "key" = "";
    "PI" = "";
    "PIRW" = "";
    "Rub" = "";
    "Assy" = "";
    "Cut" = "";
    "CT" = "";
    "SUM" = "";

     
 public setProperty(propertyName:string,propertyValue:any):void{
    if(propertyName == "PI"){
       this["PI"] = propertyValue;
    }
    else if(propertyName == "PIRW"){
       this["PIRW"] = propertyValue;
    }
    else if(propertyName == "Rub"){
       this["Rub"] = propertyValue;
    }
    else if(propertyName == "Assy"){
        this["Assy"] = propertyValue;
     }
     else if(propertyName == "Cut"){
        this["Cut"] = propertyValue;
     }
     else if(propertyName == "CT"){
        this["CT"] = propertyValue;
     }
     else if(propertyName == "SUM"){
        this["SUM"] = propertyValue;
     }
 }
}

export class cell_wip_current_both{
    "Key" = "";
    "CutP" = "";
    "CT" = "";
    "Trim" = "";
    "NmlRP" = "";
    "BurRP" = "";
    "Oven" = "";
    "PadRP" = "";
    "TapeRP" = "";
    "Retest" = "";
    "Sorter" = "";
    "Scrap" = "";
    "PadCut" = "";
    "Shipping" = "";
    "Packing" = "";
    "SUM" = "";

    public setProperty(propertyName:string,propertyValue:any):void{
        if(propertyName == "CutP"){
            this["CutP"] = propertyValue;
         }
         else if(propertyName == "CT"){
            this["CT"] = propertyValue;
         }
         else if(propertyName == "Trim"){
            this["Trim"] = propertyValue;
         }
         else if(propertyName == "NmlRP"){
            this["NmlRP"] = propertyValue;
         }
         else if(propertyName == "BurRP"){
            this["BurRP"] = propertyValue;
         }
         else if(propertyName == "Oven"){
            this["Oven"] = propertyValue;
         }
         else if(propertyName == "PadRP"){
            this["PadRP"] = propertyValue;
         }
         else if(propertyName == "TapeRP"){
            this["TapeRP"] = propertyValue;
         }
         else if(propertyName == "Retest"){
            this["Retest"] = propertyValue;
         }
         else if(propertyName == "Sorter"){
            this["Sorter"] = propertyValue;
         }
         else if(propertyName == "Scrap"){
            this["Scrap"] = propertyValue;
         }
         else if(propertyName == "PadCut"){
            this["PadCut"] = propertyValue;
         }
         else if(propertyName == "Shipping"){
            this["Shipping"] = propertyValue;
         }
         else if(propertyName == "Packing"){
            this["Packing"] = propertyValue;
         }
         else if(propertyName == "SUM"){
            this["SUM"] = propertyValue;
         }
    
    }

}