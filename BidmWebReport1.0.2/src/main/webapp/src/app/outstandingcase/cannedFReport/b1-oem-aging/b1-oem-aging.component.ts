import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { DatePipe } from '../../../../../node_modules/@angular/common';
import * as $ from 'jquery';
import { BoeService } from '../../transparent-display/b1-pecvd/boe.service';
import { gridValues1, gridValues3 } from '../../../common/multigrid/B1-aging-oem';
import { agingData } from '../../../common/multigrid/agingvalue';

@Component({
  selector: 'app-b1-oem-aging',
  templateUrl: './b1-oem-aging.component.html',
  styleUrls: ['./b1-oem-aging.component.css']
})
export class B1OemAgingComponent implements OnInit {



  agingValues1;
  str;
  agingValues3;


 
  agingValues = [];
  //calendar
  agingDate:Date;
  agingtimekey:string;
  //submit
  submitData={day:'',night:'',modeltype:'',timekey:''};
  submitDataList =[];//submitData;
  reslength;

  constructor(private bsrv: BoeService,private dp: DatePipe) { }

  ngOnInit() {
    
    this.agingValues1 = gridValues1;
    // this.agingtimekey=this.getYstDay();
    // this.getAgingData(); 
    this.setData(agingData);
   
  }

 
  //获取当前日期前一天
  getYstDay(){
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate()-1);
    var strYear1 = yesterday.getFullYear().toString(); // '2019'
    var strMonth1 = (100+yesterday.getMonth()+1).toString().substring(1); // '01'
    var strDay1=(100 +yesterday.getDate()).toString().substring(1); // '14'
    return strYear1+strMonth1+strDay1;
  }
  //选定新的查询日期1
  onAgingSelect(params){
   
    var strAgingDate = this.dp.transform(params,'yyyyMMdd');
    this.agingtimekey=strAgingDate;
    console.log('agin日期:' + strAgingDate);
    console.log('aginkey:'+this.agingtimekey);
  }
  //执行查询
  getAgingData(){
    this.bsrv.getAll('/report/aging/query?timekey='+this.agingtimekey).subscribe(
      (res)=>{ 
      this.setData(res);
    },
      (error)=>{alert('ERROR:获取'+this.agingtimekey+'数据失败!');
       
      this.reslength=0;
        console.log('getagingdataerror!')
      }
    );
  }
  setData(res1) {
    
    this.reslength=res1.length;
    for (let j = 0; j < res1.length; j++) {
      gridValues3[0].header.items[0][1].header = res1[j]['modeltype'];//modeltype
      gridValues3[0].header.items[1][1].header = res1[j]['fiout_qty'];//fiout_qty
      gridValues3[0].header.items[2][1].header = res1[j]['grade_all_qty'];//grade_all_qty
      gridValues3[4].header.items[0][0].header = (res1[j]['s+a']*100).toFixed(2)+'%'; //s+a  total

      gridValues3[0].values.items[0][0].value = (res1[j]['fpy']*100).toFixed(2)+'%';//fpy

      gridValues3[1].values.items[0][0].value = (res1[j]['ratio_q']*100).toFixed(2)+'%';//.ratio_q
      gridValues3[3].header.items[0][0].header= (res1[j]['ratio_t']*100).toFixed(2)+'%';//.ratio_t
      gridValues3[2].header.items[0][2].header = res1[j]['grade_a_qty'];//a_qty
      gridValues3[2].header.items[0][0].header = (res1[j]['ratio_a']*100).toFixed(2)+'%';//.ratio_a
      if (res1[j]['rev_grade_a']!= null) {
      if (res1[j]['rev_grade_a']['AN']!= null) {
      gridValues3[2].header.items[1][1].header = res1[j]['rev_grade_a']['AN'];//.an
      gridValues3[2].header.items[1][2].header = (res1[j]['rev_grade_a']['ratio_N']*100).toFixed(2)+'%';//.an
      }
      if (res1[j]['rev_grade_a']['AL']!= null) {
        gridValues3[2].header.items[2][1].header = res1[j]['rev_grade_a']['AL'];//.an
        gridValues3[2].header.items[1][2].header = (res1[j]['rev_grade_a']['ratio_L']*100).toFixed(2)+'%';//.an
        }
      if (res1[j]['rev_grade_a']['A0']!= null) {
        gridValues3[2].header.items[3][1].header = res1[j]['rev_grade_a']['A0'];//.an
        gridValues3[2].header.items[1][2].header = (res1[j]['rev_grade_a']['ratio_0']*100).toFixed(2)+'%';//.an
        }
        if (res1[j]['rev_grade_a']['AC']!= null) {
          gridValues3[2].header.items[4][1].header = res1[j]['rev_grade_a']['AC'];//.an
          gridValues3[2].header.items[1][2].header = (res1[j]['rev_grade_a']['ratio_C']*100).toFixed(2)+'%';//.an
          }
        }
      //q_top5
      if (res1[j]['top5_qgrade'] != null) {
        gridValues3[1].values.items[0][2].value = res1[j]['top5_qgrade']['desc'][0];
        gridValues3[1].values.items[0][3].value = res1[j]['top5_qgrade']['qty'][0];
        gridValues3[1].values.items[0][4].value = (res1[j]['top5_qgrade']['ratio'][0]*100).toFixed(2)+'%';
        for (let i = 1; i < res1[j]['top5_qgrade']['desc'].length; i++) {
          gridValues3[1].values.items[i][1].value = res1[j]['top5_qgrade']['desc'][i];
          gridValues3[1].values.items[i][2].value = res1[j]['top5_qgrade']['qty'][i];
          gridValues3[1].values.items[i][3].value = (res1[j]['top5_qgrade']['ratio'][i]*100).toFixed(2)+'%';
        }
      }

      //fpy_top5
      if (res1[j]['top5_rwk'] != null) {
        gridValues3[0].values.items[0][2].value = res1[j]['top5_rwk']['desc'][0];//fpytop5_
        gridValues3[0].values.items[0][3].value = res1[j]['top5_rwk']['qty'][0];//fpytop5_
        gridValues3[0].values.items[0][4].value = (res1[j]['top5_rwk']['ratio'][0]*100).toFixed(2)+'%';//fpytop5_
        for (var i = 1; i < res1[j]['top5_rwk']['desc'].length; i++) {
          gridValues3[0].values.items[i][1].value = res1[j]['top5_rwk']['desc'][i];//fpytop5_
          gridValues3[0].values.items[i][2].value = res1[j]['top5_rwk']['qty'][i];//fpytop5_
          gridValues3[0].values.items[i][3].value = (res1[j]['top5_rwk']['ratio'][i]*100).toFixed(2)+'%';//fpytop5_

        }
      }
      this.agingValues[j] = $.extend(true,[],gridValues3);


    }
  }
  //1.向后台提交表单信息
  submit() {
    //this.submitData = agingSubmitData;
    //setsubmitdata
   
    for (let i = 0; i < this.reslength; i++) {
      
      this.submitData.timekey= this.agingtimekey; //timekey
      this.submitData.modeltype= this.agingValues[i][0].header.items[0][1]['header'];//modeltype
      this.submitData.day= this.agingValues[i][4].values.items[0][1]['value'];//day
      this.submitData.night = this.agingValues[i][4].values.items[8][1]['value'];//night
      this.submitDataList[i] = $.extend(true,{},this.submitData);
      
    }
    for (let i = 0; i < this.submitDataList.length; i++) {
      console.log(this.submitDataList[i].modeltype);
    }
    const url = '/report/aging/post';//后台提交手动输入数据
    this.bsrv.post(url,this.submitDataList).subscribe(
      (res) => { console.log(res+'提交成功！'); },
      (error) => {
        console.log('error:' + error);
      });
  }
  //2.获取后台的excel数据
  xls() {
    window.location.href = environment.boePath + "/report/aging/excel/download?timekey="+this.agingtimekey;
    this.bsrv.getAll('window.location.href');
  }

}
