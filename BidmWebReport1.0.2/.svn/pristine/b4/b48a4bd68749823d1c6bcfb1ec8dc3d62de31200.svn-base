import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../common/service/api/api.service';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-prowipdaily',
  templateUrl: './prowipdaily.component.html',
  styleUrls: ['./prowipdaily.component.css']
})
export class ProwipdailyComponent implements OnInit {

  tableData;
  dateName: Date;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    const nowTime = new Date();

    let option = null;

    if (nowTime.getHours() < 6) {
      this.dateName = new Date(nowTime.getTime() - 24 * 60 * 60 * 1000);
      option = {
        params: {
          dayControl: '-1'
        }
      };
    } else {
      this.dateName = nowTime;
      option = {
        params: {
          dayControl: ''
        }
      };
    }

    this.apiService.get('/sc/cellwipdaily', option).subscribe(
      (res) => {
        this.tableData = this.setTabledata(res);
      }
    );
  }

  setTabledata(data: Array<any>): Array<any> {
    let ttl_tft_bank = 0;
    let ttl_cf_bank = 0;
    let ttl_cell_in = 0;
    let ttl_rework_w_tft = 0;
    let ttl_rework_w_cf = 0;
    let ttl_rework_tft = 0;
    let ttl_rework_cf = 0;
    let ttl_rub_tft = 0;
    let ttl_rub_cf = 0;
    let ttl_assy_in = 0;
    let ttl_assy_wait = 0;
    let ttl_cut = 0;
    let ttl_inline_98 = 0;
    let ttl_retest_98 = 0;
    let ttl_sorter_98 = 0;
    let ttl_repair_98 = 0;
    let ttl_pin_pt_98 = 0;
    let ttl_packing_98 = 0;
    let ttl_inline_120 = 0;
    let ttl_retest_120 = 0;
    let ttl_sorter_120 = 0;
    let ttl_repair_120 = 0;
    let ttl_pin_pt_120 = 0;
    let ttl_packing_120 = 0;
    let ttl_b4_mod_bank = 0;
    let ttl_s2_mod_bank = 0;
    for (const obj of data) {
      ttl_tft_bank += obj.tft_bank;
      ttl_cf_bank += obj.cf_bank;
      ttl_cell_in += obj.cell_in;
      ttl_rework_w_tft += obj.rework_w_tft;
      ttl_rework_w_cf += obj.rework_w_cf;
      ttl_rework_tft += obj.rework_tft;
      ttl_rework_cf += obj.rework_cf;
      ttl_rub_tft += obj.rub_tft;
      ttl_rub_cf += obj.rub_cf;
      ttl_assy_in += obj.assy_in;
      ttl_assy_wait += obj.assy_wait;
      ttl_cut += obj.cut;
      ttl_inline_98 += obj.inline_98;
      ttl_retest_98 += obj.retest_98;
      ttl_sorter_98 += obj.sorter_98;
      ttl_repair_98 += obj.repair_98;
      ttl_pin_pt_98 += obj.pin_pt_98;
      ttl_packing_98 += obj.packing_98;
      ttl_inline_120 += obj.inline_120;
      ttl_retest_120 += obj.retest_120;
      ttl_sorter_120 += obj.sorter_120;
      ttl_repair_120 += obj.repair_120;
      ttl_pin_pt_120 += obj.pin_pt_120;
      ttl_packing_120 += obj.packing_120;
      ttl_b4_mod_bank += obj.b4_mod_bank;
      ttl_s2_mod_bank += obj.s2_mod_bank;
    }
    const newData = data;
    newData.unshift({
      productname: 'Total', tft_bank: ttl_tft_bank, cf_bank: ttl_cf_bank, cell_in: ttl_cell_in,
      rework_w_tft: ttl_rework_w_tft, rework_w_cf: ttl_rework_w_cf, rework_tft: ttl_rework_tft,
      rework_cf: ttl_rework_cf, rub_tft: ttl_rub_tft, rub_cf: ttl_rub_cf, assy_in: ttl_assy_in,
      assy_wait: ttl_assy_wait, cut: ttl_cut, inline_98: ttl_inline_98, retest_98: ttl_retest_98,
      sorter_98: ttl_sorter_98, repair_98: ttl_repair_98, pin_pt_98: ttl_pin_pt_98, packing_98: ttl_packing_98,
      inline_120: ttl_inline_120, retest_120: ttl_retest_120, sorter_120: ttl_sorter_120,
      repair_120: ttl_repair_120, pin_pt_120: ttl_pin_pt_120, packing_120: ttl_packing_120,
      b4_mod_bank: ttl_b4_mod_bank, s2_mod_bank: ttl_s2_mod_bank
    });

    return newData;
  }

  query() {
    if (this.dateName != null) {
      const year = this.dateName.getFullYear().toString();
      let month: string;
      let day: string;
      if (this.dateName.getMonth() < 9) {
        month = '0' + (this.dateName.getMonth() + 1);
      } else {
        month = (this.dateName.getMonth() + 1).toString();
      }
      if (this.dateName.getDate() < 10) {
        day = '0' + this.dateName.getDate();
      } else {
        day = this.dateName.getDate().toString();
      }

      const option = {
        params: {
          dateValue: year + month + day + '06'
        }
      };
      this.apiService.get('/sc/cellwipdailyQ', option).subscribe(
        (res) => {
          this.tableData = this.setTabledata(res);
        }
      );
    }
  }

  refresh() {
    this.ngOnInit();
  }

  exportExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('prowipdaily'));
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'Cell WIP生产日报');
  }
  saveAsExcelFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
    FileSaver.saveAs(data, fileName + '-' + this.dateName.toLocaleDateString() + '.xls');
  }

}
