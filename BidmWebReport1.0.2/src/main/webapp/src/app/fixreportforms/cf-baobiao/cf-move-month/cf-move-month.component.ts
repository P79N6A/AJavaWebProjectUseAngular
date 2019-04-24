import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../common/service/api/api.service';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-cf-move-month',
  templateUrl: './cf-move-month.component.html',
  styleUrls: ['./cf-move-month.component.css']
})
export class CfMoveMonthComponent implements OnInit {

  cols: any[];
  tableData: any[];
  dateName: string = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.cols = [
      { field: 'productspecname', header: 'Product Spec' },
      { field: 'modeltype', header: 'CF' },
      { field: 'unpacker', header: 'Unpacker' },
      { field: 'ito_depo', header: 'ITO Depo' },
      { field: 'bm_photo', header: 'BM Photo' },
      { field: 'macro_sorting', header: 'Macro Sorting' },
      { field: 'bm_repair', header: 'BM Repair' },
      { field: 'r_photo', header: 'R Photo' },
      { field: 'g_photo', header: 'G Photo' },
      { field: 'b_photo', header: 'B Photo' },
      { field: 'blue_repair', header: 'BLUE Repair' },
      { field: 'oc_photo', header: 'OC Photo' },
      { field: 'ps_photo', header: 'PS Photo' },
      { field: 'ps_repair', header: 'PS Repair' },
      { field: 'fins', header: 'FINS' },
      { field: 'shipping', header: 'Shipping' }
    ];

    this.apiService.getAll('/sc/cfreport/movemonth').subscribe(
      (res) => {
        this.setTableData(res);
      }
    );

  }

  setTableData(data) {
    if (data.length !== 0) {
      this.tableData = data;
      let sumUnpacker = 0;
      let sumIto_depo = 0;
      let sumBm_photo = 0;
      let sumMacro_sorting = 0;
      let sumBm_repair = 0;
      let sumR_photo = 0;
      let sumG_photo = 0;
      let sumB_photo = 0;
      let sumBlue_repair = 0;
      let sumOc_photo = 0;
      let sumPs_photo = 0;
      let sumPs_repair = 0;
      let sumFins = 0;
      let sumShipping = 0;

      for (const obj of data) {
        sumUnpacker += obj.unpacker;
        sumIto_depo += obj.ito_depo;
        sumBm_photo += obj.bm_photo;
        sumMacro_sorting += obj.macro_sorting;
        sumBm_repair += obj.bm_repair;
        sumR_photo += obj.r_photo;
        sumG_photo += obj.g_photo;
        sumB_photo += obj.b_photo;
        sumBlue_repair += obj.blue_repair;
        sumOc_photo += obj.oc_photo;
        sumPs_photo += obj.ps_photo;
        sumPs_repair += obj.ps_repair;
        sumFins += obj.fins;
        sumShipping += obj.shipping;
      }

      this.tableData.push({
        productspecname: 'Total', modeltype: 'Total', unpacker: sumUnpacker,
        ito_depo: sumIto_depo, bm_photo: sumBm_photo, macro_sorting: sumMacro_sorting,
        bm_repair: sumBm_repair, r_photo: sumR_photo, g_photo: sumG_photo, b_photo: sumB_photo,
        blue_repair: sumBlue_repair, oc_photo: sumOc_photo, ps_photo: sumPs_photo, ps_repair: sumPs_repair,
        fins: sumFins, shipping: sumShipping
      });
    } else {
      alert('没有查询到相关数据！');
    }
  }

  exportExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('cfmovemonth'));
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'CF Move月别');
  }
  saveAsExcelFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
    FileSaver.saveAs(data, fileName + '.xls');
  }

  query() {
    if (this.dateName !== null) {
      const option = {
        params: {
          datename: this.dateName
        }
      };
      this.apiService.get('/sc/cfreport/movemonthQ', option).subscribe(
        (res) => {
          this.setTableData(res);
        }
      );
    } else {
      alert('请输入日期,例如201904!');
    }
  }

}
