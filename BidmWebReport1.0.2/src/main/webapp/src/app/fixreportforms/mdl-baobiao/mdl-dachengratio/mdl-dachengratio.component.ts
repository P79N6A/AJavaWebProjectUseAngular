import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../common/service/api/api.service';
import { ModuledachengratioOjbect } from './model/objects';

@Component({
  selector: 'app-mdl-dachengratio',
  templateUrl: './mdl-dachengratio.component.html',
  styleUrls: ['./mdl-dachengratio.component.css']
})
export class MdlDachengratioComponent implements OnInit {

  panelIn : string[] = [];
  panelOut : string[] = [];

  glassIn : string[] = [];
  glassOut : string[] = [];

  barecellpacking : string[] = [];

  borderlessException : string = '------'; // 可以进行keyin的绑定对象
  barecellException : string = '------';

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.searchData();
    this.queryRemark();
  }

  //1.查询数据
  searchData(){
    const url = '/module/dacheng';
    this.apiService.get(url).subscribe(
      (res)=>{
       // console.log(res);
        this.handleData(res);
      },
      (error)=>{console.log(error)}
    );
  }

  //2.处理数据的方法:把获取到的数据放入到数组中去
  handleData(datas){
    this.panelIn = [];
    this.panelOut = [];
    this.glassIn = [];
    this.glassOut = [];
    this.barecellpacking = [];
    for(const obj of datas){
      let type = obj['type'];
      let item = obj['item'];

      if(type == 'Panel'){
        if(item == 'In'){
          this.panelIn = this.setData(obj);
        }else if(item == 'Out'){
          this.panelOut = this.setData(obj);
        }

      }else if(type == 'Glass'){
        if(item == 'In'){
          this.glassIn = this.setData(obj);
        }else if(item == 'Out'){
          this.glassOut = this.setData(obj);
        }

      }else if(type == 'Barecell Packing'){
        this.barecellpacking = this.setData(obj);;
      }
    }
  }
  //2.2为数组设置数据
  setData(obj : ModuledachengratioOjbect) :string []{
    let aa : string[] = [];

    for(const prop in obj){
      switch(prop){
        case 'planm':aa[0] = obj[prop];break;
        case 'planmc':aa[1] = obj[prop];break;
        case 'plandc':aa[2] = obj[prop];break;
        case 'pland':aa[3] = obj[prop];break;
        case 'actc':aa[4] = obj[prop];break;
        case 'actd':aa[5] = obj[prop];break;
        case 'catchupm':aa[6] = obj[prop];break;
        case 'balm':aa[7] = obj[prop];break;
        case 'balmc':aa[8] = obj[prop];break;
        case 'baldc':aa[9] = obj[prop];break;
        case 'bald':aa[10] = obj[prop];break;
        case 'ratiom':aa[11] = obj[prop];break;
        case 'ratiomc':aa[12] = obj[prop];break;
        case 'ratiodc':aa[13] = obj[prop];break;
        case 'ratiod':aa[14] = obj[prop];break;
      }
    }


    return aa;
  }

  //3.更新 可以写入数据的两个格子
  updateRemark(gridname:string){
    console.log(gridname);
    const url = '/module/dacheng/insertremark';
    let itemstr = '';
    let remarkstr = '';
    if(gridname == 'borderless'){
      itemstr = 'borderless';
      remarkstr = this.borderlessException;
    }else  if(gridname == 'barecell'){
      itemstr = 'barecell';
      remarkstr = this.barecellException;
    }
    const option = {
      params:{
        item : itemstr,
        remark : remarkstr
      }
    };
    this.apiService.get(url,option).subscribe(
      (res)=>{
        alert("更新成功！");
      },
      (error)=>{"数据插入失败！"}
    );
  }

  //4.查询remark
  queryRemark(){
    const url = '/module/dacheng/queryremark';
    this.apiService.get(url).subscribe(
      (res)=>{
        console.log(res);
        for(const obj of res){
          if(obj['item'] == 'borderless'){
            this.borderlessException = obj['remark'];
          }else if(obj['item']=='barecell'){
            this.barecellException = obj['remark'];
          }
        }
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
