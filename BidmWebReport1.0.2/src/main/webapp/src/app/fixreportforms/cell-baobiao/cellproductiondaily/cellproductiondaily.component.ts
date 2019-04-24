import { Component, OnInit } from '@angular/core';
import { Celldailydata } from './model/celldailyproduct';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { ApiService } from 'app/common/service/api/api.service';

@Component({
  selector: 'app-cellproductiondaily',
  templateUrl: './cellproductiondaily.component.html',
  styleUrls: ['./cellproductiondaily.component.css']
})
export class CellproductiondailyComponent implements OnInit {

  // 1.保存 当前日期的 变量
  todayStr = '---';
  // 2.保存数据的数组
  data: Celldailydata[] = [];
  // 3.保存 选择的 日期的 变量
  selectedDate: Date = new Date(); // 默认的就是今天的
  // 4.数组 ：保存表格 下面两行行的 第一行 的数据 信息
  Total: number[] = [];
  Total2: number[] = []; // 用于保存去掉sheet 的数组

  TotalAct: Celldailydata; // 这个对象用来保存 最下面一行的从数据库中读取出来的数据
  TotalAct2: string[] = []; // 用于保存 去掉sheet 的数组
  TotalActShtte: string[] = []; // 用于保存三个sheet 的数组

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.todayStr = this.getTodayStrHeader();
    this.searchData();

  }

  // 1.获取 当天日期 的 字符串 : 在表头上显示的
  getTodayStrHeader(): string {

    let str = '';
    const date = new Date();
    const year = date.getFullYear() + '';
    const month = date.getMonth() + 1 + '';
    const day = date.getDate() - 1 + '';
    str = year + '/' + month + '/' + day;
    return str;
  }

  // 2.获取 输入的日期 的字符串 ： 创建查询参数 第一天，，月份 当前天
  getSelecteddayStrSearch(date: Date): string[] {
    let str = '';
    const strs: string[] = []; // 第一天 月份 当前选中天
    // const date = new Date();
    const year = date.getFullYear() + '';
    const month = date.getMonth() + 1;
    const day = date.getDate();

    str = year;

    if (month < 10) {
      str += '0' + month;
      strs[0] = str + '01'; // 保存 第一天
      strs[1] = str; // 保存 月份
    } else {
      str += month;
      strs[0] = str + '01'; // 保存 第一天
      strs[1] = str; // 保存 月份
    }

    if (day < 10) {
      str += '0' + day;
      strs[2] = str; // 保存 当前天
    } else {
      str += day;
      strs[2] = str; // 保存 当前天
    }

    return strs;
  }

  // 3.进行查询的方法 : 就是初始化页面的时候使用的查询方法， 根本不需要任何的日期参数，都在后端的sql中 使用sysdate写好的
  searchData() {
    const url = '/celldaily/report01';
    this.apiService.get(url).subscribe(
      (res) => {
        this.handleData(res); // 调用方法 4， 处理返回的结果集
        this.dataSum(); // 将数据进行求和，最后的第一行
        this.searchDataTotalAct(); // 查询数据的最后一行的数据
      },
      (error) => { console.log(error); }
    );
  }

  // 4进行查询的方法 : 参数是 选中的 日期信息 点击查询按钮 来调用的方法 : 查询的时候，表头的日期也需要跟着变
  searchSelectedDate(date: Date) {
    const url = '/celldaily/report02';
    const datestrs = this.getSelecteddayStrSearch(date);
    const startdatename = datestrs[0];
    const month = datestrs[1];
    const enddatename = datestrs[2];
    // console.log(startdatename+'/'+month+'/'+enddatename);
    const option = {
      params: {
        startdatename: startdatename,
        month: month,
        enddatename: enddatename
      }
    };

    this.apiService.get(url, option).subscribe(
      (res) => {
        this.handleData(res); // 调用方法 4， 处理返回的结果集
        this.dataSum(); // 对数据进行求和操作
        this.searchSelectedDateTotalACt(date); // 进行查询totalact的操作
      },
      (error) => { console.log(error); },
      () => {
        // 当查询完成之后，修改表头上面的日期
        const monthstr = date.getMonth() + 1;
        this.todayStr = date.getFullYear() + '/' + monthstr + '/' + date.getDate();
      }
    );
  }

  // 5.处理查询到的数据的方法
  handleData(dataa) {
    this.data = []; // 首先清空保存对象的数组
    if (Array.isArray(dataa)) { // 实在讲，这个 if 没啥用

      for (const object of dataa) { // 循环便利每一个 对象
        const newobject = new Celldailydata(); // 每一个对象都需要创建一下子
        const productsize = object['productsize'];
        newobject.setSize(productsize); // 设置 尺寸的属性
        // tslint:disable-next-line:forin
        for (const property in object) { // 循环对象中的属性进行赋值 操作
          newobject.setNumbs(property, object[property]);
          newobject.setNumbs2(property, object[property]);

        }
        this.data.push(newobject);
      }
    }
  }

  // 6.点击查询按钮执行的方法 ：
  searchDataClick() {
    this.searchSelectedDate(this.selectedDate);
  }

  // 7.把表格中的数据进行求和的操作 : 没有参数，直接在方法内部使用的数据的数组
  dataSum() {
    this.Total = [];
    this.Total2 = [];
    const numblength = 26; // 获取到 数组的长度
    for (let i = 0; i < 26; i++) {
      let sumnumber = 0;
      for (const object of this.data) { // 循环每一个数据对象，取出数组中的对应下表的数据进行求和
        const number = object.numbs[i];
        if (number !== ' ') { // 当这个数据不为 空字符串的时候，这个地方的判断和 对象中数组的赋值是有关系的
          sumnumber += parseInt(number, 10); // 进行求和
        }
      }
      this.Total[i] = sumnumber; // 所有的对象循环完成之后，放入到数组中去
    }
    for (let i = 0; i < this.Total.length; i++) {

      if (i !== 4 && i !== 6 && i !== 8) {
        this.Total2.push(this.Total[i]);
      }

    }
  }

  // 8.初始化页面，查询 TotalAct 数据 的方法
  searchDataTotalAct() {
    const url = '/celldaily/report03';
    this.apiService.get(url).subscribe(
      (res) => {
        this.TotalAct = new Celldailydata(); // 创建一个新的对象，循环res中的属性，为totalact对象中的数组进行赋值操作
        for (const property in res) {
          if (property !== 'productsize') {
            this.TotalAct.setNumbs(property, res[property]); // 循环遍历赋值
          }
        }

        // 再一个循环，把空的值 赋值为 0
        const sumact = this.TotalAct.numbs;
        for (let i = 0; i < sumact.length; i++) {
          if (sumact[i] === ' ') {
            sumact[i] = '0';
          }
        }
        this.TotalAct.numbs = sumact;

        // 在一个循环，把原来sheet 的值去掉
        this.TotalAct2 = [];
        this.TotalActShtte = [];
        for (let i = 0; i < this.TotalAct.numbs.length; i++) {
          if (i !== 4 && i !== 6 && i !== 8) {
            this.TotalAct2.push(this.TotalAct.numbs[i]);
          } else {
            this.TotalActShtte.push(this.TotalAct.numbs[i]);
          }
        }

      },
      (error) => { console.log(error); }
    );
  }
  // 9进行查询totalAct 的方法 : 参数是 选中的 日期信息 点击查询按钮 来调用的方法
  searchSelectedDateTotalACt(date: Date) {
    const url = '/celldaily/report04';
    const datestrs = this.getSelecteddayStrSearch(date);
    const startdatename = datestrs[0];
    const month = datestrs[1];
    const enddatename = datestrs[2];
    // console.log(startdatename+'/'+month+'/'+enddatename);
    const option = {
      params: {
        startdatename: startdatename,
        month: month,
        enddatename: enddatename
      }
    };

    this.apiService.get(url, option).subscribe(
      (res) => {
        this.TotalAct = new Celldailydata(); // 创建一个新的对象，循环res中的属性，为totalact对象中的数组进行赋值操作
        for (const property in res) {
          if (property !== 'productsize') {
            this.TotalAct.setNumbs(property, res[property]); // 循环遍历赋值
          }
        }

        // 再一个循环，把空的值 赋值为 0
        const sumact = this.TotalAct.numbs;
        for (let i = 0; i < sumact.length; i++) {
          if (sumact[i] === ' ') {
            sumact[i] = '0';
          }
        }
        this.TotalAct.numbs = sumact;


      },
      (error) => { console.log(error); }
    );
  }
  // 10.导出excel
  exportExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('celldate')); // 将这个表格转换成一个 sheet
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // 这里类型如果不正确，下载出来的可能是类似xml文件的东西或者是类似二进制的东西等
    this.saveAsExcelFile(excelBuffer, 'Cell生产日报');

  }
  saveAsExcelFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
    FileSaver.saveAs(data, fileName + '_export_' + this.getSelecteddayStrSearch(this.selectedDate)[2] + '.xls');
  }


}