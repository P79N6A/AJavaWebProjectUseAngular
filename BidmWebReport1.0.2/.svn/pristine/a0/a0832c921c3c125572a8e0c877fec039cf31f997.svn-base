import { Component, OnInit } from '@angular/core';

import { ArrayWipKanbanShishi, ArrayWipKanbanShishi1 } from './model/objects';
import { Message } from 'primeng/api';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { ApiService } from 'app/common/service/api/api.service';

@Component({
  selector: 'app-arraywipkanban-shishi',
  templateUrl: './arraywipkanban-shishi.component.html',
  styleUrls: ['./arraywipkanban-shishi.component.css']
})
export class ArraywipkanbanShishiComponent implements OnInit {

  // 1.表格 具体值得 数组,特殊表格特殊处理

  data: ArrayWipKanbanShishi[] = [];

  // 2.保存productname 和 modeltype 的数组 :目的是用来创建 cols 的
  productnames: string[] = [];
  modeltypes: string[] = [];

  opercodes: string[] = [];
  operdescs: string[] = [];

  hasEqpIdObjects: ArrayWipKanbanShishi1[] = []; // 用来保存有eqpid值得对象
  eqpidStr = '这里显示存在的EqpId'; // 用来保存鼠标指上来显示的qepid
  msgs: Message[] = [];

  headSum: number[] = []; // 这个是表头上面的和的数组

  // 3.productiontype 单选下拉框 + 被选中的productiontype ，默认为 Production
  productiontypes = [
    { label: 'Production', value: 'Production' },
    { label: 'Dummy', value: 'Dummy' },
    { label: 'Develop', value: 'Develop' },
  ];

  selectedProductionType = 'Production';

  // 4.单选按钮
  qtytype = 'glass'; // 这个初始的值 是 value属性的值

  tempqtytype = 'glass'; // 保存上一次的qtytype,用来判断 是否需要进行查询，如果点击的结果没有变化，则不进行查询





  constructor(private apiService: ApiService) { }

  ngOnInit() {
    const aaa: ArrayWipKanbanShishi1[] = this.searchData(this.selectedProductionType, this.qtytype);
  }

  // 1.查询数据的方法
  searchData(productiontypeaaa: string, qtytype: string): ArrayWipKanbanShishi1[] {
    const datas: ArrayWipKanbanShishi1[] = [];
    const url = '/arraywipkanban/shishi';
    const option = {
      params: {
        productiontype: productiontypeaaa
      }
    };

    this.apiService.get(url, option).subscribe(
      (res) => {

        if (Array.isArray(res)) {

          const aaa: ArrayWipKanbanShishi1[] = <ArrayWipKanbanShishi1[]>res;

          // 1.直接在方法中调用这个方法来获取值
          this.getRealData(aaa, qtytype);

          // 2.循环得到的数据用来做返回值，便于使用
          aaa.forEach(element => {
            datas.push(element);
          });
        }
      },
      (error) => { console.log(error); }
    );

    return datas;
  }

  // 2.根据查询出来的数据：创建 表头 还有 对象呀，表头上面的和呀
  getRealData(datas: ArrayWipKanbanShishi1[], qtytype: string) {

    this.productnames = [];
    this.modeltypes = [];
    this.opercodes = [];
    this.operdescs = [];

    this.hasEqpIdObjects = [];

    // 1.这个大循环用来获取 基本的 基准数据值，eqp_id 不为空的对象都取出来
    if (Array.isArray(datas)) {

      const tempProductNames: string[] = []; // 用来保存临时的数据的，因为后面还需要进行排序操作的
      const tempModeltypes: string[] = [];

      for (const object of datas) {

        // 1.获取 productname 和 modeltype
        const productname = object['productname'];
        const modeltype = object['modeltype'];

        const opercode = object['opercode'];
        const operdesc = object['operdesc'];
        // 2.如果  productnames，modeltypes 数组中没有当前的值时，放进去，如果有，则不放进去
        if (!this.productnames.includes(productname)) {
          this.productnames.push(productname);
          // this.modeltypes.push(modeltype);
        }

        if (!tempProductNames.includes(productname)) { // 这两个数组是临时保存的
          tempProductNames.push(productname);
          tempModeltypes.push(modeltype);
        }


        // 3.操作同2
        if (!this.opercodes.includes(opercode)) {
          this.opercodes.push(opercode);
          this.operdescs.push(operdesc);
        }

        // 4.保存 所有含有eqp_id 的 对象 ： 这个主要是用来 做数据判断的
        if (object['eqpid'] != null) {
          this.hasEqpIdObjects.push(object);
        }

      }

      // for 循环完成之后，基础的数据都 获取完毕，然后进行排序，将两个productnames [] 数组进行对比，进而获取到 下标，根据下标创建 对应的 modeltypes[]数组
      this.productnames.sort();
      for (const productname of this.productnames) {
        const realindex = tempProductNames.indexOf(productname);
        this.modeltypes.push(tempModeltypes[realindex]);
      }


    }

    // 2.根据上面的循环 得到的基准的数据值来创建 表格中的实际的数据值的操作，包括前面的数据的和都在这个循环里面
    for (let i = 0; i < this.opercodes.length; i++) { // 每一个opercode就是一个对象
      const newObject = new ArrayWipKanbanShishi();
      const opercode = this.opercodes[i];
      const operdesc = this.operdescs[i];
      newObject.opercode = opercode;
      newObject.operdesc = operdesc;

      // 1.先进行一边循环，把当前的 符合 opercode对象的 取出来保存
      const opercodesObjects: ArrayWipKanbanShishi1[] = [];
      datas.forEach(object => {
        if (object['opercode'] === opercode) { // 当相等的时候，把对象放入到临时的数组中
          opercodesObjects.push(object);
        }
      });

      // console.log(opercodesObjects); // 这个地方已经没有错误了

      // 然后再循环 所有的 productname 与 上面的 opercodesObjects 临时数组对象 进行对象的取值操作
      for (let j = 0; j < this.productnames.length; j++) {
        newObject.qtys[j] = 0;
        const productname = this.productnames[j];  // 遍历的下表不要写错了呀
        // 根据上面的两个层次的循环遍历，取出对应的对象的数据值
        for (const object of opercodesObjects) {
          if (object['opercode'] === opercode && object['productname'] === productname) { // 当 当前对象 满足条件的时候

            // 判断当 当前对象的 eqpid 不为空的 时候，需要把这个 数据值在 当前数组中的 下标标记下来，存放到一个数组中:这个数组是一个对象对应一个数组的
            if (object['eqpid'] != null) {
              newObject.haseqpid.push(j + 1); // 之所以加1，原因是 在后面还进行了求和的操作，故所有的下标值都需要加1才能够对应的上
            }

            if (qtytype === 'glass') {
              const qty = object['glsqty']; // 这个地方需要动态的获取是 lot的值还是glass的值
              newObject.qtys[j] = qty; // 给当前 位置 赋值，这么写的好处是：当前位置有值则有值，如果没有值则为空的
            } else if (qtytype === 'lot') {
              const qty = object['lotqty']; // 这个地方需要动态的获取是 lot的值还是glass的值
              newObject.qtys[j] = qty; // 给当前 位置 赋值，这么写的好处是：当前位置有值则有值，如果没有值则为空的
            }

          }
        }
      }

      // 当基本的数据 放完了之后，进行一个数量的求和操作 : 这个是横着求和的操作
      let qtysum = 0;
      for (let index = 0; index < newObject.qtys.length; index++) {
        qtysum += newObject.qtys[index];
      }
      newObject.qtys.splice(0, 0, qtysum);
      // 当循环完成一个 opercode的时候，则把对象放入到数组中去
      this.data.push(newObject);
    }

    // console.log(this.data[10].haseqpid);

    // 3.经过2种的循环，所有的数据对象都已经创建成功，之后就是求 ： 最上面的横着的和，表头的和
    this.headSum = [];
    for (let i = 0; i < this.productnames.length + 1; i++) { // 先把所有的值都赋为0
      this.headSum[i] = 0;
    }
    for (let i = 0; i < this.productnames.length + 1; i++) { // 根据表头的个数确定有几个数据
      for (const object of this.data) {
        this.headSum[i] += object.qtys[i];
      }
    }

  }

  // 3.productiontype 发生变化时候 触发的方法：直接进行查询操作
  productiontypeChange() {
    this.data = [];
    this.searchData(this.selectedProductionType, this.qtytype);
  }

  // 4.单选按钮 发生变化时候 的操作
  qtyClick() {

    if (this.qtytype !== this.tempqtytype) { // 当两个不相等的时候说明变了
      this.data = [];
      this.tempqtytype = this.qtytype;
      this.searchData(this.selectedProductionType, this.qtytype);
    }

  }

  // 5.当鼠标放上来的时候触发的方法
  showEqpid(event, index) {



    this.eqpidStr = '';

    let modelytypeee = '';

    // 得到目标的对象
    const targetproductname = this.productnames[index - 1];
    const targetopercode = event.target.parentElement.cells[0].innerText.trim();

    const tempOjbects: ArrayWipKanbanShishi1[] = [];

    // 从已经存在的对象中进行查询操作，如果有则得到 相应的对象
    for (const obj of this.hasEqpIdObjects) {
      if (obj.productname === targetproductname && obj.opercode === targetopercode) {
        modelytypeee = obj.modeltype; // 要显示的 内容
        tempOjbects.push(obj);
        this.eqpidStr += obj.eqpid + '<br>';
      }
    }


    if (tempOjbects.length !== 0) {
      this.msgs = [{ severity: 'info', summary: modelytypeee, detail: this.eqpidStr }];

    } else {
      this.eqpidStr = '这里显示存在的EqpId';
      this.msgs = [];
    }


  }


  // 7.  导出excel表格的功能方法
  exportExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('arraywipkanbantable')); // 将这个表格转换成一个 sheet
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // 这里类型如果不正确，下载出来的可能是类似xml文件的东西或者是类似二进制的东西等
    this.saveAsExcelFile(excelBuffer, 'Array_wip看板(实时)');

  }
  saveAsExcelFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
    FileSaver.saveAs(data, fileName + this.selectedProductionType + '_' + this.qtytype + '_' + this.getHourtimekey() + '.xls');
  }



  // 8.获得小时 的字符串的操作
  getHourtimekey(): string {
    let aaa = '';
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();

    aaa += year;
    if (month < 10) {
      aaa += '0' + month;
    } else {
      aaa += month;
    }
    if (day < 10) {
      aaa += '0' + day;
    } else {
      aaa += day;
    }
    if (hour < 10) {
      aaa += '0' + hour;
    } else {
      aaa += hour;
    }
    return aaa;
  }


}
