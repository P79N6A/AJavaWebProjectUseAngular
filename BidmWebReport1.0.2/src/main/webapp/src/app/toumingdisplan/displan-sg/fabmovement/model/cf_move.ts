export class cf_move_current {
    'Key' = '';
    "Unpack" = "";
    "ITO"  = "";
    "BM" = "";
    "BMRP" = "";
     "R" = "";
     "G" = "";
     "B" = "";
     "CRP" = "";
     "OC" = "";
     "PS" = "";
     "PSRP" = "";
     "FINS" = "";
     "Rework" = "";
     "RWINS" = "";
     "Shipping" = "";
    'SUM' = '';

    public setProperty(propertyName: string, propertyValue: any): void {
        if(propertyName == "Unpack"){
            this["Unpack"] = propertyValue;
         }
        else if(propertyName == "ITO"){
            this["ITO"] = propertyValue;
         }
         else if(propertyName == "BM"){
            this["BM"] = propertyValue;
         }
         else if(propertyName == "BMRP"){
            this["BMRP"] = propertyValue;
         }
    
         else if(propertyName == "R"){
            this["R"] = propertyValue;
         }
         else if(propertyName == "G"){
            this["G"] = propertyValue;
         }
         else if(propertyName == "B"){
            this["B"] = propertyValue;
         }
         else if(propertyName == "CRP"){
            this["CRP"] = propertyValue;
         }
        
         else if(propertyName == "OC"){
            this["OC"] = propertyValue;
         }
         else if(propertyName == "PS"){
            this["PS"] = propertyValue;
         }
         else if(propertyName == "PSRP"){
            this["PSRP"] = propertyValue;
         }
         else if(propertyName == "FINS"){
            this["FINS"] = propertyValue;
         }
         else if(propertyName == "Rework"){
            this["Rework"] = propertyValue;
         }
         else if(propertyName == "RWINS"){
            this["RWINS"] = propertyValue;
         }
         else if(propertyName == "Shipping"){
            this["Shipping"] = propertyValue;
         }
        
         else if(propertyName == "SUM"){
            this["SUM"] = propertyValue;
         }
    }
}
