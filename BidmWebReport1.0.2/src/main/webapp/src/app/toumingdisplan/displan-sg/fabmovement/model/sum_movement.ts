export class SumMovementArray {
    'Key' = 'SUM';
    'Initial Clean' = '';
    '1st ITO Dep' = '';
    '1st ITO Mask' = '';
    '1st ITO Etch' = '';
    'Gate Dep.' = '';
    'Gate Mask' = '';
    'Gate Etch' = '';
    'Gate Test Full' = '';
    'FGI Clean / Dep' = '';
    'Multi Dep Full' = '';
    'Active Mask' = '';
    'Active Etch' = '';
    'Active Strip' = '';
    '1st ITO Dep.' = '';
    '1st ITO Mask.' = '';
    '1st ITO Etch.' = '';
    'FGI Dep.' = '';
    'Multi Dep.' = '';
    'SD Dep.' = '';
    'SDT Mask' = '';
    '1st SD Etch ' = '';
    '2nd SD Etch ' = '';
    'SD Strip' = '';
    'SD Test Full' = '';
    'PVX Dep' = '';
    'VIA Mask' = '';
    'VIA Etch' = '';
    '2nd ITO Dep' = '';
    '2nd ITO Mask' = '';
    '2nd ITO Etch' = '';
    'Final AOI Inline full' = '';
    'Array Test' = '';
    'Final CUT  Repair' = '';
    'Final CVD Repair' = '';
    'Shipping' = '';
    'SUM' = '';
    public setProperty(indexact: string, propertyValue: any): void {
        if (indexact == 'Initial Clean') {
            this['Initial Clean'] = propertyValue;
        } else if (indexact == '1st ITO Dep') {
            this['1st ITO Dep'] = propertyValue;
        } else if (indexact == '1st ITO Mask') {
            this['1st ITO Mask'] = propertyValue;
        } else if (indexact == '1st ITO Etch') {
            this['1st ITO Etch'] = propertyValue;
        } else if (indexact == 'Gate Dep.') {
            this['Gate Dep.'] = propertyValue;
        } else if (indexact == 'Gate Mask') {
            this['Gate Mask'] = propertyValue;
        } else if (indexact == 'Gate Etch') {
            this['Gate Etch'] = propertyValue;
        } else if (indexact == 'Gate Test Full') {
            this['Gate Test Full'] = propertyValue;
        } else if (indexact == 'FGI Clean / Dep') {
            this['FGI Clean / Dep'] = propertyValue;
        } else if (indexact == 'Multi Dep Full') {
            this['Multi Dep Full'] = propertyValue;
        } else if (indexact == 'Active Mask') {
            this['Active Mask'] = propertyValue;
        } else if (indexact == 'Active Etch') {
            this['Active Etch'] = propertyValue;
        } else if (indexact == 'Active Strip') {
            this['Active Strip'] = propertyValue;
        } else if (indexact == '1st ITO Dep.') {
            this['1st ITO Dep.'] = propertyValue;
        } else if (indexact == '1st ITO Mask.') {
            this['1st ITO Mask.'] = propertyValue;
        } else if (indexact == '1st ITO Etch.') {
            this['1st ITO Etch.'] = propertyValue;
        } else if (indexact == 'FGI Dep.') {
            this['FGI Dep.'] = propertyValue;
        } else if (indexact == 'Multi Dep.') {
            this['Multi Dep.'] = propertyValue;
        } else if (indexact == 'SD Dep.') {
            this['SD Dep.'] = propertyValue;
        } else if (indexact == 'SDT Mask') {
            this['SDT Mask'] = propertyValue;
        } else if (indexact == '1st SD Etch ') {
            this['1st SD Etch '] = propertyValue;
        } else if (indexact == '2nd SD Etch ') {
            this['2nd SD Etch '] = propertyValue;
        } else if (indexact == 'SD Strip') {
            this['SD Strip'] = propertyValue;
        } else if (indexact == 'SD Test Full') {
            this['SD Test Full'] = propertyValue;
        } else if (indexact == 'PVX Dep') {
            this['PVX Dep'] = propertyValue;
        } else if (indexact == 'VIA Mask') {
            this['VIA Mask'] = propertyValue;
        } else if (indexact == 'VIA Etch') {
            this['VIA Etch'] = propertyValue;
        } else if (indexact == '2nd ITO Dep') {
            this['2nd ITO Dep'] = propertyValue;
        } else if (indexact == '2nd ITO Mask') {
            this['2nd ITO Mask'] = propertyValue;
        } else if (indexact == '2nd ITO Etch') {
            this['2nd ITO Etch'] = propertyValue;
        } else if (indexact == 'Final AOI Inline full') {
            this['Final AOI Inline full'] = propertyValue;
        } else if (indexact == 'Array Test') {
            this['Array Test'] = propertyValue;
        } else if (indexact == 'Final CUT  Repair') {
            this['Final CUT  Repair'] = propertyValue;
        } else if (indexact == 'Final CVD Repair') {
            this['Final CVD Repair'] = propertyValue;
        } else if (indexact == 'Shipping') {
            this['Shipping'] = propertyValue;
        } else if (indexact == 'SUM') {
            this['SUM'] = propertyValue;
        }
    }
}

export class SumMovementCf {
    'Key' = 'SUM';
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
    public setProperty(indexact: string, propertyValue: any): void {
        if(indexact == 'Unpack'){
            this["Unpack"] =  propertyValue;
          }  
         else if(indexact == 'ITO'){
                this["ITO"] =  propertyValue;
             }
             else if(indexact == 'BM'){
                this["BM"] = propertyValue;
             }
             else if(indexact == 'BMRP'){
                this["BMRP"] = propertyValue;
             }
        
             else if(indexact == 'R'){
                this["R"] = propertyValue;
             }
             else if(indexact == 'G'){
                this["G"] = propertyValue;
             }
             else if(indexact == 'B'){
                this["B"] = propertyValue;
             }
             else if(indexact == 'CRP'){
                this["CRP"] = propertyValue;
             }
            
             else if(indexact == 'OC'){
                this["OC"] = propertyValue;
             }
             else if(indexact == 'PS'){
                this["PS"] = propertyValue;
             }
             else if(indexact == 'PSRP'){
                this["PSRP"] = propertyValue;
             }
             else if(indexact == 'FINS'){
                this["FINS"] = propertyValue;
             }
             else if(indexact == 'Rework'){
              this["Rework"] = propertyValue;
           }
           else if(indexact == 'RWINS'){
            this["RWINS"] = propertyValue;
          }
           
             else if(indexact == 'Shipping'){
                this["Shipping"] = propertyValue;
             }
            
             else if(indexact == 'SUM'){
              this["SUM"] = propertyValue;
           }
    }
}

export class SumMovementCell{
    'Key' = 'SUM';
    'PI' = '';
    'PIRW' = '';
    'Rub' = '';
    'Assy' = '';
    'Cut' = '';
    'CT' = '';
    'SUM' = '';

    public setProperty(indexact: string, propertyValue: any): void {
        if (indexact == 'PI') {
            this['PI'] = propertyValue;
        } else if (indexact == 'PIRW') {
            this['PIRW'] = propertyValue;
        }else if (indexact == 'Rub') {
            this['Rub'] = propertyValue;
        }else if (indexact == 'Assy') {
            this['Assy'] = propertyValue;
        }else if (indexact == 'Cut') {
            this['Cut'] = propertyValue;
        }else if(indexact == 'CT'){
            this['CT'] = propertyValue;
        }else if(indexact == 'SUM'){
            this['SUM'] = propertyValue;
        }
    }

}

export class SumMovementCellBoth{
    "Key" = "SUM";
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
