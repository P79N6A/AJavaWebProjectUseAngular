export class StationMessage{
  modeltype : string;
  galsssum : string [] = [];

  public setModeltype(value:string){
    this.modeltype = value;
  }
  public setGlasssum(index:number,value:string){
    this.galsssum[index] = value;
  }
}


export class ThirdObject {

  modeltype: string;
  eqpid: string;
  galssqty: number;

  public setmodeltype(value: string) {
    this.modeltype = value;
  }
  public seteqpid(value: string) {
    this.eqpid = value;
  }
  public setgalssqty(value: number) {
    this.galssqty = value;
  }
}


export class station_msg {
  machine = null;
  machine_type = null;
  wip = null;
  machine_state = null;
}

export class array_move_current {//这个对象注意一下，可能是个动态的需要特别的注意！
  'Key' = '';
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

  public setProperty(propertyName: string, propertyValue: any): void {
    if (propertyName === 'Initial Clean') {
      this['Initial Clean'] = propertyValue;
    } else if (propertyName === '1st ITO Dep') {
      this['1st ITO Dep'] = propertyValue;
    } else if (propertyName === '1st ITO Mask') {
      this['1st ITO Mask'] = propertyValue;
    } else if (propertyName === '1st ITO Etch') {
      this['1st ITO Etch'] = propertyValue;
    } else if (propertyName === 'Gate Dep.') {
      this['Gate Dep.'] = propertyValue;
    } else if (propertyName === 'Gate Mask') {
      this['Gate Mask'] = propertyValue;
    } else if (propertyName === 'Gate Etch') {
      this['Gate Etch'] = propertyValue;
    } else if (propertyName === 'Gate Test Full') {
      this['Gate Test Full'] = propertyValue;
    } else if (propertyName === 'FGI Clean / Dep') {
      this['FGI Clean / Dep'] = propertyValue;
    } else if (propertyName === 'Multi Dep Full') {
      this['Multi Dep Full'] = propertyValue;
    } else if (propertyName === 'Active Mask') {
      this['Active Mask'] = propertyValue;
    } else if (propertyName === 'Active Etch') {
      this['Active Etch'] = propertyValue;
    } else if (propertyName === 'Active Strip') {
      this['Active Strip'] = propertyValue;
    } else if (propertyName === '1st ITO Dep.') {
      this['1st ITO Dep.'] = propertyValue;
    } else if (propertyName === '1st ITO Mask.') {
      this['1st ITO Mask.'] = propertyValue;
    } else if (propertyName === '1st ITO Etch.') {
      this['1st ITO Etch.'] = propertyValue;
    } else if (propertyName === 'FGI Dep.') {
      this['FGI Dep.'] = propertyValue;
    } else if (propertyName === 'Multi Dep.') {
      this['Multi Dep.'] = propertyValue;
    } else if (propertyName === 'SD Dep.') {
      this['SD Dep.'] = propertyValue;
    } else if (propertyName === 'SDT Mask') {
      this['SDT Mask'] = propertyValue;
    } else if (propertyName === '1st SD Etch ') {
      this['1st SD Etch '] = propertyValue;
    } else if (propertyName === '2nd SD Etch ') {
      this['2nd SD Etch '] = propertyValue;
    } else if (propertyName === 'SD Strip') {
      this['SD Strip'] = propertyValue;
    } else if (propertyName === 'SD Test Full') {
      this['SD Test Full'] = propertyValue;
    } else if (propertyName === 'PVX Dep') {
      this['PVX Dep'] = propertyValue;
    } else if (propertyName === 'VIA Mask') {
      this['VIA Mask'] = propertyValue;
    } else if (propertyName === 'VIA Etch') {
      this['VIA Etch'] = propertyValue;
    } else if (propertyName === '2nd ITO Dep') {
      this['2nd ITO Dep'] = propertyValue;
    } else if (propertyName === '2nd ITO Mask') {
      this['2nd ITO Mask'] = propertyValue;
    } else if (propertyName === '2nd ITO Etch') {
      this['2nd ITO Etch'] = propertyValue;
    } else if (propertyName === 'Final AOI Inline full') {
      this['Final AOI Inline full'] = propertyValue;
    } else if (propertyName === 'Array Test') {
      this['Array Test'] = propertyValue;
    } else if (propertyName === 'Final CUT  Repair') {
      this['Final CUT  Repair'] = propertyValue;
    } else if (propertyName === 'Final CVD Repair') {
      this['Final CVD Repair'] = propertyValue;
    } else if (propertyName === 'Shipping') {
      this['Shipping'] = propertyValue;
    } else if (propertyName === 'SUM') {
      this['SUM'] = propertyValue;
    }
  }

}

// 下面的类是用来动态地创建实时的表格的内容的
export class move_crrent_cols {

  header = null;
  field = null;

  setProperty(field: string, header: string) {
    this.field = field;
    this.header = header;
  }

}

export class stationMessage {// 这个类用于保存型号信息，和型号和设备相对应的wip的信息
  modeltype: string;
  glassqtys: string[] = [];//用来保存数组的操作

  setProperty(modeltype: string, glassqty: string) {
    this.modeltype = modeltype;
    this.glassqtys.push(glassqty);
  }

  setmodeltype(modeltype: string) {
    this.modeltype = modeltype;
  }
  setglassqtys(glassqty: string) {
    this.glassqtys.push(glassqty);
  }
}
