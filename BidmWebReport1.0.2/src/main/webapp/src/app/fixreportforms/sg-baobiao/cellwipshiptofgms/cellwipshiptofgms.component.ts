import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../common/service/api/api.service';
import { CellWipToGFMSObject1, CellWipToGFMSObject2 } from './model/objects';
import { SelectItem } from 'primeng/api';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-cellwipshiptofgms',
  templateUrl: './cellwipshiptofgms.component.html',
  styleUrls: ['./cellwipshiptofgms.component.css']
})
export class CellwipshiptofgmsComponent implements OnInit {

  ispage1 : boolean = true; // 这是第一页
  ispage2 : boolean = false; // 这时第二页的

  //isproductspec : boolean = false; // 控制第二个格子变色的

  data : CellWipToGFMSObject1[] = [];
  TTLData : number[] = []; // 这个是TTL那一行的数据，就是10个数
  cols:any[]=[ 
    {field:'productname',header:'ProductName'},
    {field:'productspec',header:'ProductSpec'},
    {field:'modeltype',header:'ModelType'},
    {field:'panelttl',header:'PanelTTL'},
    {field:'panelttl3',header:'panelTTL3'},
    {field:'shipbox',header:'ShipBox'},
    {field:'shippanel',header:'ShipPanel'},
    {field:'shipbox3',header:'ShipBox3'},
    {field:'shippanel3',header:'ShipPanel3'},
    {field:'shiptofgmspallet',header:'Shiptofgmspallet'},
    {field:'shiptofgmspanel',header:'Shiptofgmspanel'},
    {field:'shiptofgmspallet3',header:'Shiptofgmspallet3'},
    {field:'shiptofgmgpanel3',header:'Shiptofgmgpanel3'},
  ];

  productiontypes:SelectItem[]=[
    {label:'Production',value:'Production'},
    {label:'Develop',value:'Develop'},
    {label:'Engineer',value:'Engineer'},
  ];
  selectedType:string = 'Production';



  productspenname : string = '';
  data2 : CellWipToGFMSObject2[] = []; // 二级表格的数据
  cols2:any[]=[
    {field:'shippingtime',header:'shippingtime'},
    {field:'palletid',header:'palletid'},
    {field:'boxqty',header:'boxqty'},
    {field:'panelqty',header:'panelqty'},
    {field:'lottype',header:'lottype'},
    {field:'materialtype',header:'materialtype'},
    {field:'detailmaterialtype',header:'detailmaterialtype'},
    {field:'palletgrade',header:'palletgrade'},
    {field:'eventname',header:'eventname'},
    {field:'fgmsreceived',header:'fgmsreceived'},
    {field:'productspec',header:'productspec'},
    {field:'fgcode',header:'fgcode'},
    {field:'revisioncode',header:'revisioncode'},
    {field:'checkincode',header:'checkincode'},
    {field:'towhere',header:'towhere'}
  ];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.queryDataByLotType('Production');
  }

  /*******一级界面********************************** */
  //1.根据lottype查询数据的方法
  queryDataByLotType(lottype:string){
    const url = '/cellwipshiptofgms/query1';
    const option = {
      params:{
        lottype:lottype
      }
    };
    this.apiService.get(url,option).subscribe(
      (res)=>{
        if(res.length != 0){
          //console.log(res);
          this.data = <CellWipToGFMSObject1[]>res;
          //console.log(this.data);
          this.getTTLNum(this.data);
        }else{
          alert("未查询到数据！");
          this.data = [];
        }
        
      },
      (error)=>{console.log(error)}
    );
    }
    
  //2.求TTL的数据：需要遍历所有的对象进行操作
  getTTLNum(datas){
    this.TTLData = [0,0,0,0,0,0,0,0,0,0];
    for(const obj of datas){
      let panelttl= obj['panelttl'];
      let panelttl3= obj['panelttl3'];
    
      let shipbox= obj['shipbox'];
      let shippanel= obj['shippanel'];
    
      let shipbox3= obj['shipbox3'];
      let shippanel3= obj['shippanel3'];
    
      let shiptofgmspallet= obj['shiptofgmspallet'];
      let shiptofgmspanel= obj['shiptofgmspanel'];
    
      let shiptofgmspallet3= obj['shiptofgmspallet3'];
      let shiptofgmgpanel3= obj['shiptofgmgpanel3'];
      if(panelttl != null){
        this.TTLData[0] += parseInt(panelttl);
      }
      if(panelttl3 != null){
        this.TTLData[1] += parseInt(panelttl3);
      }
      if(shipbox != null){
        this.TTLData[2] += parseInt(shipbox);
      }
      if(shippanel != null){
        this.TTLData[3] += parseInt(shippanel);
      }
      if(shipbox3 != null){
        this.TTLData[4] += parseInt(shipbox3);
      }
      if(shippanel3 != null){
        this.TTLData[5] += parseInt(shippanel3);
      }
      if(shiptofgmspallet != null){
        this.TTLData[6] += parseInt(shiptofgmspallet);
      }
      if(shiptofgmspanel != null){
        this.TTLData[7] += parseInt(shiptofgmspanel);
      }
      if(shiptofgmspallet3 != null){
        this.TTLData[8] += parseInt(shiptofgmspallet3);
      }
      if(shiptofgmgpanel3 != null){
        this.TTLData[9] += parseInt(shiptofgmgpanel3);
      }
    }
  }
  //3.当切换productiontype的时候
  changeType(){
    //console.log(this.selectedType);
    this.queryDataByLotType(this.selectedType);
  }

  //4.当鼠标放到productspec格子上的时候，变色
  // changeColor(index,rowindex,obj){
  //   console.log(index+' : '+rowindex+' : '+obj.rownum);
  //   console.log(obj);
  //   if(index == 1){
  //     this.isproductspec = true;
  //   }else{
  //     this.isproductspec = false;
  //   }
  // }

  //5.鼠标点击的时候跳转到第二个界面
  clickProductSpec(i,rowdata){
    if(i == 1){ // 这是条件
      //console.log(i);
      //console.log(rowdata); // 需要根据这里的productspec来进行查询二级界面的数据
      this.productspenname = rowdata.productspec;
      this.queryDataByProductSpec(rowdata.productspec); // 把这个对象的productspec传进来进行查询
      this.ispage1 = false;
      this.ispage2 = true;

    }
  }

  /****************一级界面上的方法end***************************** */

  /***二级界面上的内容********************************* */
  //1.返回到一级界面的方法
  returnPage1(){
    this.ispage2 = false;
    this.ispage1 = true;
  }

  //2.查询数据的方法
  queryDataByProductSpec(productspec:string){
    this.data2 = [];
    const url = '/cellwipshiptofgms/query2';
    const option = {
      params:{
        productspec:productspec
      }
    };
    this.apiService.get(url,option).subscribe(
      (res)=>{
        if(res.length != 0){
          //console.log(res);
          this.data2 = <CellWipToGFMSObject2[]>res;
          //console.log(this.data2);
        }else{
          alert("未查询到数据！");
          this.data = [];
        }
        
      },
      (error)=>{console.log(error)}
    );
    }

  /***二级界面上的内容end****************************** */

  //10.导出为excel
  exportExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('cellwiptofgmstable1')); // 将这个表格转换成一个 sheet
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // 这里类型如果不正确，下载出来的可能是类似xml文件的东西或者是类似二进制的东西等
    this.saveAsExcelFile(excelBuffer, 'CellWipToFGMS');

  }
 saveAsExcelFile(buffer: any, fileName: string) {
  const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
  });
  FileSaver.saveAs(data, fileName+ '.xls');

}

}
