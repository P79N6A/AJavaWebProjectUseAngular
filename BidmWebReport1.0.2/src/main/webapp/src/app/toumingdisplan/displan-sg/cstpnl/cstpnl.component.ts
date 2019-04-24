import { Component, OnInit } from '@angular/core';

import { _iterableDiffersFactory } from '@angular/core/src/application_module';
import { ApiService } from '../../../common/service/api/api.service';

@Component({
  selector: 'app-cstpnl',
  templateUrl: './cstpnl.component.html',
  styleUrls: ['./cstpnl.component.css']
})
export class CstpnlComponent implements OnInit {

  
  // 输入时间
  dateStart;
  dateEnd;

  // 声明两个变量用来存上一次执行queryData方法的开始时间和结束时间
  predateStart = -1;
  predateEnd = -1;

  SecondTableArray = [];

  firstView;
  secondView;
  // 每一行的数据数组
  PclA3Left;
  PclA3Right;
  PclA4Left;
  PclA4Right;
  PclA5Left;
  PclA5Right;
  PclA6Left;
  PclA6Right;
  PclEmptyLeft;
  PclEmptyRight;
  PclVirtualLeft;
  PclVirtualRight;
  PclTtlLeft;
  PclTtlRight;
  PcsB1Left;
  PcsB1Right;
  PcsB2Left;
  PcsB2Right;
  PcsB3Left;
  PcsB3Right;
  PcsB4Left;
  PcsB4Right;
  PcsB5Left;
  PcsB5Right;
  PcsVirtualLeft;
  PcsVirtualRight;
  PcsTtlLeft;
  PcsTtlRight;
  PccRealLeft;
  PccRealRight;
  PccVirtualLeft;
  PccVirtualRight;
  PccTtlLeft;
  PccTtlRight;
  PceRealLeft;
  PceRealRight;
  PceVirtualLeft;
  PceVirtualRight;
  PceTtlLeft;
  PceTtlRight;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.firstView = true;

    this.PclA3Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclA3Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclA4Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclA4Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclA5Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclA5Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclA6Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclA6Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclEmptyLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclEmptyRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclVirtualLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclVirtualRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclTtlLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclTtlRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB1Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB1Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB2Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB2Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB3Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB3Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB4Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB4Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB5Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB5Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsVirtualLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsVirtualRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsTtlLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsTtlRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PccRealLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PccRealRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PccVirtualLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PccVirtualRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PccTtlLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PccTtlRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PceRealLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PceRealRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PceVirtualLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PceVirtualRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PceTtlLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PceTtlRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];

    this.apiService.getAll('/sc/cstinfopanel').subscribe(
      (res) => {
        this.setArray(res);
      }
    );
  }

  // 数组赋值
  setArray(data) {

    this.PclA3Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclA3Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclA4Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclA4Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclA5Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclA5Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclA6Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclA6Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclEmptyLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclEmptyRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclVirtualLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclVirtualRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclTtlLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PclTtlRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB1Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB1Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB2Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB2Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB3Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB3Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB4Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB4Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB5Left = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsB5Right = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsVirtualLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsVirtualRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsTtlLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PcsTtlRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PccRealLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PccRealRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PccVirtualLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PccVirtualRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PccTtlLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PccTtlRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PceRealLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PceRealRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PceVirtualLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PceVirtualRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.PceTtlLeft = ['-', '-', '-', '-', '-', '-', '-', '-'];
    this.PceTtlRight = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];

    for (const obj of data) {
      if (obj.durablespecname === '8PCL') {
        if (obj.cstspec === 'A-3') {
          this.PclA3Left = [obj.cstqty, obj.ct_inline, obj.ct_scrap, obj.ct_packing, obj.bank_n,
          obj.bank_y, obj.ct_ratio, obj.bank_ratio];
          this.PclA3Right = [obj.engi, obj.dev, obj.ttl, obj.oneqp, obj.moving, obj.instk,
          obj.dirty, obj.empty, obj.outstk, obj.others];
        } else if (obj.cstspec === 'A-4') {
          this.PclA4Left = [obj.cstqty, obj.ct_inline, obj.ct_scrap, obj.ct_packing, obj.bank_n,
          obj.bank_y, obj.ct_ratio, obj.bank_ratio];
          this.PclA4Right = [obj.engi, obj.dev, obj.ttl, obj.oneqp, obj.moving, obj.instk,
          obj.dirty, obj.empty, obj.outstk, obj.others];
        } else if (obj.cstspec === 'A-5') {
          this.PclA5Left = [obj.cstqty, obj.ct_inline, obj.ct_scrap, obj.ct_packing, obj.bank_n,
          obj.bank_y, obj.ct_ratio, obj.bank_ratio];
          this.PclA5Right = [obj.engi, obj.dev, obj.ttl, obj.oneqp, obj.moving, obj.instk,
          obj.dirty, obj.empty, obj.outstk, obj.others];
        } else if (obj.cstspec === 'A-6') {
          this.PclA6Left = [obj.cstqty, obj.ct_inline, obj.ct_scrap, obj.ct_packing, obj.bank_n,
          obj.bank_y, obj.ct_ratio, obj.bank_ratio];
          this.PclA6Right = [obj.engi, obj.dev, obj.ttl, obj.oneqp, obj.moving, obj.instk,
          obj.dirty, obj.empty, obj.outstk, obj.others];
        } else if (obj.cstspec === '空') {
          this.PclEmptyLeft = [obj.cstqty, obj.ct_inline, obj.ct_scrap, obj.ct_packing,
          obj.bank_n, obj.bank_y, obj.ct_ratio, obj.bank_ratio];
          this.PclEmptyRight = [obj.engi, obj.dev, obj.ttl, obj.oneqp, obj.moving, obj.instk,
          obj.dirty, obj.empty, obj.outstk, obj.others];
        } else if (obj.cstspec === '虚拟') {
          this.PclVirtualLeft = [obj.cstqty, obj.ct_inline, obj.ct_scrap, obj.ct_packing, obj.bank_n,
          obj.bank_y, obj.ct_ratio, obj.bank_ratio];
          this.PclVirtualRight = [obj.engi, obj.dev, obj.ttl, obj.oneqp, obj.moving, obj.instk, obj.dirty, obj.empty,
          obj.outstk, obj.others];
        }
      } else if (obj.durablespecname === '8PCS') {
        if (obj.cstspec === 'B-1') {
          this.PcsB1Left = [obj.cstqty, obj.ct_inline, obj.ct_scrap, obj.ct_packing, obj.bank_n,
          obj.bank_y, obj.ct_ratio, obj.bank_ratio];
          this.PcsB1Right = [obj.engi, obj.dev, obj.ttl, obj.oneqp, obj.moving, obj.instk, obj.dirty,
          obj.empty, obj.outstk, obj.others];
        } else if (obj.cstspec === 'B-2') {
          this.PcsB2Left = [obj.cstqty, obj.ct_inline, obj.ct_scrap, obj.ct_packing, obj.bank_n,
          obj.bank_y, obj.ct_ratio, obj.bank_ratio];
          this.PcsB2Right = [obj.engi, obj.dev, obj.ttl, obj.oneqp, obj.moving, obj.instk,
          obj.dirty, obj.empty, obj.outstk, obj.others];
        } else if (obj.cstspec === 'B-3') {
          this.PcsB3Left = [obj.cstqty, obj.ct_inline, obj.ct_scrap, obj.ct_packing, obj.bank_n,
          obj.bank_y, obj.ct_ratio, obj.bank_ratio];
          this.PcsB3Right = [obj.engi, obj.dev, obj.ttl, obj.oneqp, obj.moving, obj.instk, obj.dirty,
          obj.empty, obj.outstk, obj.others];
        } else if (obj.cstspec === 'B-4') {
          this.PcsB4Left = [obj.cstqty, obj.ct_inline, obj.ct_scrap, obj.ct_packing, obj.bank_n,
          obj.bank_y, obj.ct_ratio, obj.bank_ratio];
          this.PcsB4Right = [obj.engi, obj.dev, obj.ttl, obj.oneqp, obj.moving, obj.instk, obj.dirty,
          obj.empty, obj.outstk, obj.others];
        } else if (obj.cstspec === 'B-5') {
          this.PcsB5Left = [obj.cstqty, obj.ct_inline, obj.ct_scrap, obj.ct_packing, obj.bank_n,
          obj.bank_y, obj.ct_ratio, obj.bank_ratio];
          this.PcsB5Right = [obj.engi, obj.dev, obj.ttl, obj.oneqp, obj.moving, obj.instk, obj.dirty,
          obj.empty, obj.outstk, obj.others];
        } else if (obj.cstspec === '虚拟') {
          this.PcsVirtualLeft = [obj.cstqty, obj.ct_inline, obj.ct_scrap, obj.ct_packing, obj.bank_n,
          obj.bank_y, obj.ct_ratio, obj.bank_ratio];
          this.PcsVirtualRight = [obj.engi, obj.dev, obj.ttl, obj.oneqp, obj.moving, obj.instk, obj.dirty,
          obj.empty, obj.outstk, obj.others];
        }
      } else if (obj.durablespecname === '8PCC') {
        if (obj.cstspec === '实卡') {
          this.PccRealLeft = [obj.cstqty, obj.ct_inline, obj.ct_scrap, obj.ct_packing, obj.bank_n,
          obj.bank_y, obj.ct_ratio, obj.bank_ratio];
          this.PccRealRight = [obj.engi, obj.dev, obj.ttl, obj.oneqp, obj.moving, obj.instk, obj.dirty,
          obj.empty, obj.outstk, obj.others];
        } else if (obj.cstspec === '虚拟') {
          this.PccVirtualLeft = [obj.cstqty, obj.ct_inline, obj.ct_scrap, obj.ct_packing, obj.bank_n,
          obj.bank_y, obj.ct_ratio, obj.bank_ratio];
          this.PccVirtualRight = [obj.engi, obj.dev, obj.ttl, obj.oneqp, obj.moving, obj.instk, obj.dirty,
          obj.empty, obj.outstk, obj.others];
        }
      } else if (obj.durablespecname === '8PCE') {
        if (obj.cstspec === '实卡') {
          this.PceRealLeft = [obj.cstqty, obj.ct_inline, obj.ct_scrap, obj.ct_packing, obj.bank_n,
          obj.bank_y, obj.ct_ratio, obj.bank_ratio];
          this.PceRealRight = [obj.engi, obj.dev, obj.ttl, obj.oneqp, obj.moving, obj.instk, obj.dirty,
          obj.empty, obj.outstk, obj.others];
        } else if (obj.cstspec === '虚拟') {
          this.PceVirtualLeft = [obj.cstqty, obj.ct_inline, obj.ct_scrap, obj.ct_packing, obj.bank_n,
          obj.bank_y, obj.ct_ratio, obj.bank_ratio];
          this.PceVirtualRight = [obj.engi, obj.dev, obj.ttl, obj.oneqp, obj.moving, obj.instk,
          obj.dirty, obj.empty, obj.outstk, obj.others];
        }
      }
    }

    this.getTtl(data);
  }

  // 求ttl
  getTtl(data) {
    let sumPclcstqty = 0;
    let sumPclinline = 0;
    let sumPclscrap = 0;
    let sumPclpacking = 0;
    let sumPcln = 0;
    let sumPcly = 0;
    let sumPclct = 0;
    let sumPclbank = 0;
    let countPclct = 0;
    let countPclbank = 0;
    let sumPcleng = 0;
    let sumPcldev = 0;
    let sumPclttl = 0;
    let sumPcloneqp = 0;
    let sumPclmoving = 0;
    let sumPclinstk = 0;
    let sumPcldirty = 0;
    let sumPclempty = 0;
    let sumPcloutstk = 0;
    let sumPclothers = 0;
    let sumPcscstqty = 0;
    let sumPcsinline = 0;
    let sumPcsscrap = 0;
    let sumPcspacking = 0;
    let sumPcsn = 0;
    let sumPcsy = 0;
    let sumPcsct = 0;
    let sumPcsbank = 0;
    let countPcsct = 0;
    let countPcsbank = 0;
    let sumPcseng = 0;
    let sumPcsdev = 0;
    let sumPcsttl = 0;
    let sumPcsoneqp = 0;
    let sumPcsmoving = 0;
    let sumPcsinstk = 0;
    let sumPcsdirty = 0;
    let sumPcsempty = 0;
    let sumPcsoutstk = 0;
    let sumPcsothers = 0;
    let sumPcccstqty = 0;
    let sumPccinline = 0;
    let sumPccscrap = 0;
    let sumPccpacking = 0;
    let sumPccn = 0;
    let sumPccy = 0;
    let sumPccct = 0;
    let sumPccbank = 0;
    let countPccct = 0;
    let countPccbank = 0;
    let sumPcceng = 0;
    let sumPccdev = 0;
    let sumPccttl = 0;
    let sumPcconeqp = 0;
    let sumPccmoving = 0;
    let sumPccinstk = 0;
    let sumPccdirty = 0;
    let sumPccempty = 0;
    let sumPccoutstk = 0;
    let sumPccothers = 0;
    let sumPcecstqty = 0;
    let sumPceinline = 0;
    let sumPcescrap = 0;
    let sumPcepacking = 0;
    let sumPcen = 0;
    let sumPcey = 0;
    let sumPcect = 0;
    let sumPcebank = 0;
    let countPcect = 0;
    let countPcebank = 0;
    let sumPceeng = 0;
    let sumPcedev = 0;
    let sumPcettl = 0;
    let sumPceoneqp = 0;
    let sumPcemoving = 0;
    let sumPceinstk = 0;
    let sumPcedirty = 0;
    let sumPceempty = 0;
    let sumPceoutstk = 0;
    let sumPceothers = 0;
    for (const obj of data) {
      if (obj.durablespecname === '8PCL') {
        sumPclcstqty += obj.cstqty;
        sumPclinline += obj.ct_inline;
        sumPclscrap += obj.ct_scrap;
        sumPclpacking += obj.ct_packing;
        sumPcln += obj.bank_n;
        sumPcly += obj.bank_y;
        sumPcleng += obj.engi;
        sumPcldev += obj.dev;
        sumPclttl += obj.ttl;
        sumPcloneqp += obj.oneqp;
        sumPclmoving += obj.moving;
        sumPclinstk += obj.instk;
        sumPcldirty += obj.dirty;
        sumPclempty += obj.empty;
        sumPcloutstk += obj.outstk;
        sumPclothers += obj.others;
        if (obj.ct_ratio !== -1) {
          sumPclct += obj.ct_ratio;
          countPclct++;
        }
        if (obj.bank_ratio !== -1) {
          sumPclbank += obj.bank_ratio;
          countPclbank++;
        }
      } else if (obj.durablespecname === '8PCS') {
        sumPcscstqty += obj.cstqty;
        sumPcsinline += obj.ct_inline;
        sumPcsscrap += obj.ct_scrap;
        sumPcspacking += obj.ct_packing;
        sumPcsn += obj.bank_n;
        sumPcsy += obj.bank_y;
        sumPcseng += obj.engi;
        sumPcsdev += obj.dev;
        sumPcsttl += obj.ttl;
        sumPcsoneqp += obj.oneqp;
        sumPcsmoving += obj.moving;
        sumPcsinstk += obj.instk;
        sumPcsdirty += obj.dirty;
        sumPcsempty += obj.empty;
        sumPcsoutstk += obj.outstk;
        sumPcsothers += obj.others;
        if (obj.ct_ratio !== -1) {
          sumPcsct += obj.ct_ratio;
          countPcsct++;
        }
        if (obj.bank_ratio !== -1) {
          sumPcsbank += obj.bank_ratio;
          countPcsbank++;
        }
      } else if (obj.durablespecname === '8PCC') {
        sumPcccstqty += obj.cstqty;
        sumPccinline += obj.ct_inline;
        sumPccscrap += obj.ct_scrap;
        sumPccpacking += obj.ct_packing;
        sumPccn += obj.bank_n;
        sumPccy += obj.bank_y;
        sumPcceng += obj.engi;
        sumPccdev += obj.dev;
        sumPccttl += obj.ttl;
        sumPcconeqp += obj.oneqp;
        sumPccmoving += obj.moving;
        sumPccinstk += obj.instk;
        sumPccdirty += obj.dirty;
        sumPccempty += obj.empty;
        sumPccoutstk += obj.outstk;
        sumPccothers += obj.others;
        if (obj.ct_ratio !== -1) {
          sumPccct += obj.ct_ratio;
          countPccct++;
        }
        if (obj.bank_ratio !== -1) {
          sumPccbank += obj.bank_ratio;
          countPccbank++;
        }
      } else if (obj.durablespecname === '8PCE') {
        sumPcecstqty += obj.cstqty;
        sumPceinline += obj.ct_inline;
        sumPcescrap += obj.ct_scrap;
        sumPcepacking += obj.ct_packing;
        sumPcen += obj.bank_n;
        sumPcey += obj.bank_y;
        sumPceeng += obj.engi;
        sumPcedev += obj.dev;
        sumPcettl += obj.ttl;
        sumPceoneqp += obj.oneqp;
        sumPcemoving += obj.moving;
        sumPceinstk += obj.instk;
        sumPcedirty += obj.dirty;
        sumPceempty += obj.empty;
        sumPceoutstk += obj.outstk;
        sumPceothers += obj.others;
        if (obj.ct_ratio !== -1) {
          sumPcect += obj.ct_ratio;
          countPcect++;
        }
        if (obj.bank_ratio !== -1) {
          sumPcebank += obj.bank_ratio;
          countPcebank++;
        }
      }
    }

    this.PclTtlLeft = [sumPclcstqty, sumPclinline, sumPclscrap, sumPclpacking, sumPcln, sumPcly,
      sumPclct / countPclct, sumPclbank / countPclbank];
    this.PclTtlRight = [sumPcleng, sumPcldev, sumPclttl, sumPcloneqp, sumPclmoving,
      sumPclinstk, sumPcldirty, sumPclempty, sumPcloutstk, sumPclothers];
    this.PcsTtlLeft = [sumPcscstqty, sumPcsinline, sumPcsscrap, sumPcspacking, sumPcsn, sumPcsy,
      sumPcsct / countPcsct, sumPcsbank / countPcsbank];
    this.PcsTtlRight = [sumPcseng, sumPcsdev, sumPcsttl, sumPcsoneqp, sumPcsmoving,
      sumPcsinstk, sumPcsdirty, sumPcsempty, sumPcsoutstk, sumPcsothers];
    this.PccTtlLeft = [sumPcccstqty, sumPccinline, sumPccscrap, sumPccpacking, sumPccn, sumPccy,
      sumPccct / countPccct, sumPccbank / countPccbank];
    this.PccTtlRight = [sumPcceng, sumPccdev, sumPccttl, sumPcconeqp, sumPccmoving,
      sumPccinstk, sumPccdirty, sumPccempty, sumPccoutstk, sumPccothers];
    this.PceTtlLeft = [sumPcecstqty, sumPceinline, sumPcescrap, sumPcepacking, sumPcen, sumPcey,
      sumPcect / countPcect, sumPcebank / countPcebank];
    this.PceTtlRight = [sumPceeng, sumPcedev, sumPcettl, sumPceoneqp, sumPcemoving,
      sumPceinstk, sumPcedirty, sumPceempty, sumPceoutstk, sumPceothers];
  }
  // 点击查询时调用方法
  queryData() {
    if (this.dateStart != null && this.dateEnd != null) {
      this.predateStart = -1;
      this.predateEnd = -1;
      const option = {
        params: {
          start: this.dateStart,
          end: this.dateEnd
        }
      };

      this.apiService.get('/sc/cstinfopanelQ', option).subscribe(
        (res) => {
          const redcuceRes = this.getReduce(res);
          this.setArray(redcuceRes);
        }
      );

      // 方法执行结束后，记录查询时间，以便下钻时调用
      this.predateStart = this.dateStart;
      this.predateEnd = this.dateEnd;
    }
  }
  // 去重，把durablespecname， cstspec两个属性都相同的对象，其余属性求和，比率求平均
  getReduce(data): any {

    const result = [];

    const cstspecPcls = [];
    const cstspecPcss = [];
    const cstspecPccs = [];
    const cstspecPces = [];

    for (const obj of data) {
      if (obj.durablespecname === '8PCL' && !(cstspecPcls.includes(obj.cstspec))) {
        cstspecPcls.push(obj.cstspec);
      } else if (obj.durablespecname === '8PCS' && !(cstspecPcss.includes(obj.cstspec))) {
        cstspecPcss.push(obj.cstspec);
      } else if (obj.durablespecname === '8PCC' && !(cstspecPccs.includes(obj.cstspec))) {
        cstspecPccs.push(obj.cstspec);
      } else if (obj.durablespecname === '8PCE' && !(cstspecPces.includes(obj.cstspec))) {
        cstspecPces.push(obj.cstspec);
      }
    }

    for (const cstspecPcl of cstspecPcls) {
      let countCt = 0;
      let countBank = 0;
      let sumCstqty = 0;
      let sumCt_inline = 0;
      let sumCt_scrap = 0;
      let sumCt_packing = 0;
      let sumBank_n = 0;
      let sumBank_y = 0;
      let sumCt_ratio = 0;
      let sumBank_ratio = 0;
      let sumEngi = 0;
      let sumDev = 0;
      let sumTtl = 0;
      let sumDirty = 0;
      let sumOneqp = 0;
      let sumMoving = 0;
      let sumInstk = 0;
      let sumOutstk = 0;
      let sumEmpty = 0;
      let sumOthers = 0;
      let avgCt_ratio = 0;
      let avgBank_ratio = 0;
      for (const obj of data) {
        if (obj.durablespecname === '8PCL' && obj.cstspec === cstspecPcl) {

          if (obj.ct_ratio !== -1) {
            countCt++;
            sumCt_ratio += obj.ct_ratio;
          }
          if (obj.bank_ratio !== -1) {
            countBank++;
            sumBank_ratio += obj.bank_ratio;
          }

          sumCstqty += obj.cstqty;
          sumCt_inline += obj.ct_inline;
          sumCt_scrap += obj.ct_scrap;
          sumCt_packing += obj.ct_packing;
          sumBank_n += obj.bank_n;
          sumBank_y += obj.bank_y;
          sumEngi += obj.engi;
          sumDev += obj.dev;
          sumTtl += obj.ttl;
          sumDirty += obj.dirty;
          sumOneqp += obj.oneqp;
          sumMoving += obj.moving;
          sumInstk += obj.instk;
          sumOutstk += obj.outstk;
          sumEmpty += obj.empty;
          sumOthers += obj.others;
        }
      }
      if (countCt === 0) {
        avgCt_ratio = -1;
      } else {
        avgCt_ratio = sumCt_ratio / countCt;
      }
      if (countBank === 0) {
        avgBank_ratio = -1;
      } else {
        avgBank_ratio = sumBank_ratio / countBank;
      }
      result.push({
        durablespecname: '8PCL', cstspec: cstspecPcl, cstqty: sumCstqty, ct_inline: sumCt_inline,
        ct_scrap: sumCt_scrap, ct_packing: sumCt_packing, bank_n: sumBank_n, bank_y: sumBank_y,
        ct_ratio: avgCt_ratio, bank_ratio: avgBank_ratio, engi: sumEngi, dev: sumDev,
        ttl: sumTtl, dirty: sumDirty, oneqp: sumOneqp, moving: sumMoving, instk: sumInstk, outstk: sumOutstk,
        empty: sumEmpty, others: sumOthers
      });
    }
    for (const cstspecPcs of cstspecPcss) {
      let countCt = 0;
      let countBank = 0;
      let sumCstqty = 0;
      let sumCt_inline = 0;
      let sumCt_scrap = 0;
      let sumCt_packing = 0;
      let sumBank_n = 0;
      let sumBank_y = 0;
      let sumCt_ratio = 0;
      let sumBank_ratio = 0;
      let sumEngi = 0;
      let sumDev = 0;
      let sumTtl = 0;
      let sumDirty = 0;
      let sumOneqp = 0;
      let sumMoving = 0;
      let sumInstk = 0;
      let sumOutstk = 0;
      let sumEmpty = 0;
      let sumOthers = 0;
      let avgCt_ratio = 0;
      let avgBank_ratio = 0;
      for (const obj of data) {
        if (obj.durablespecname === '8PCS' && obj.cstspec === cstspecPcs) {

          if (obj.ct_ratio !== -1) {
            countCt++;
            sumCt_ratio += obj.ct_ratio;
          }
          if (obj.bank_ratio !== -1) {
            countBank++;
            sumBank_ratio += obj.bank_ratio;
          }

          sumCstqty += obj.cstqty;
          sumCt_inline += obj.ct_inline;
          sumCt_scrap += obj.ct_scrap;
          sumCt_packing += obj.ct_packing;
          sumBank_n += obj.bank_n;
          sumBank_y += obj.bank_y;
          sumEngi += obj.engi;
          sumDev += obj.dev;
          sumTtl += obj.ttl;
          sumDirty += obj.dirty;
          sumOneqp += obj.oneqp;
          sumMoving += obj.moving;
          sumInstk += obj.instk;
          sumOutstk += obj.outstk;
          sumEmpty += obj.empty;
          sumOthers += obj.others;
        }
      }
      if (countCt === 0) {
        avgCt_ratio = -1;
      } else {
        avgCt_ratio = sumCt_ratio / countCt;
      }
      if (countBank === 0) {
        avgBank_ratio = -1;
      } else {
        avgBank_ratio = sumBank_ratio / countBank;
      }
      result.push({
        durablespecname: '8PCS', cstspec: cstspecPcs, cstqty: sumCstqty, ct_inline: sumCt_inline,
        ct_scrap: sumCt_scrap, ct_packing: sumCt_packing, bank_n: sumBank_n, bank_y: sumBank_y,
        ct_ratio: avgCt_ratio, bank_ratio: avgBank_ratio, engi: sumEngi, dev: sumDev,
        ttl: sumTtl, dirty: sumDirty, oneqp: sumOneqp, moving: sumMoving, instk: sumInstk, outstk: sumOutstk,
        empty: sumEmpty, others: sumOthers
      });
    }
    for (const cstspecPcc of cstspecPccs) {
      let countCt = 0;
      let countBank = 0;
      let sumCstqty = 0;
      let sumCt_inline = 0;
      let sumCt_scrap = 0;
      let sumCt_packing = 0;
      let sumBank_n = 0;
      let sumBank_y = 0;
      let sumCt_ratio = 0;
      let sumBank_ratio = 0;
      let sumEngi = 0;
      let sumDev = 0;
      let sumTtl = 0;
      let sumDirty = 0;
      let sumOneqp = 0;
      let sumMoving = 0;
      let sumInstk = 0;
      let sumOutstk = 0;
      let sumEmpty = 0;
      let sumOthers = 0;
      let avgCt_ratio = 0;
      let avgBank_ratio = 0;
      for (const obj of data) {
        if (obj.durablespecname === '8PCC' && obj.cstspec === cstspecPcc) {

          if (obj.ct_ratio !== -1) {
            countCt++;
            sumCt_ratio += obj.ct_ratio;
          }
          if (obj.bank_ratio !== -1) {
            countBank++;
            sumBank_ratio += obj.bank_ratio;
          }

          sumCstqty += obj.cstqty;
          sumCt_inline += obj.ct_inline;
          sumCt_scrap += obj.ct_scrap;
          sumCt_packing += obj.ct_packing;
          sumBank_n += obj.bank_n;
          sumBank_y += obj.bank_y;
          sumEngi += obj.engi;
          sumDev += obj.dev;
          sumTtl += obj.ttl;
          sumDirty += obj.dirty;
          sumOneqp += obj.oneqp;
          sumMoving += obj.moving;
          sumInstk += obj.instk;
          sumOutstk += obj.outstk;
          sumEmpty += obj.empty;
          sumOthers += obj.others;
        }
      }
      if (countCt === 0) {
        avgCt_ratio = -1;
      } else {
        avgCt_ratio = sumCt_ratio / countCt;
      }
      if (countBank === 0) {
        avgBank_ratio = -1;
      } else {
        avgBank_ratio = sumBank_ratio / countBank;
      }
      result.push({
        durablespecname: '8PCC', cstspec: cstspecPcc, cstqty: sumCstqty, ct_inline: sumCt_inline,
        ct_scrap: sumCt_scrap, ct_packing: sumCt_packing, bank_n: sumBank_n, bank_y: sumBank_y,
        ct_ratio: avgCt_ratio, bank_ratio: avgBank_ratio, engi: sumEngi, dev: sumDev,
        ttl: sumTtl, dirty: sumDirty, oneqp: sumOneqp, moving: sumMoving, instk: sumInstk, outstk: sumOutstk,
        empty: sumEmpty, others: sumOthers
      });
    }
    for (const cstspecPce of cstspecPces) {
      let countCt = 0;
      let countBank = 0;
      let sumCstqty = 0;
      let sumCt_inline = 0;
      let sumCt_scrap = 0;
      let sumCt_packing = 0;
      let sumBank_n = 0;
      let sumBank_y = 0;
      let sumCt_ratio = 0;
      let sumBank_ratio = 0;
      let sumEngi = 0;
      let sumDev = 0;
      let sumTtl = 0;
      let sumDirty = 0;
      let sumOneqp = 0;
      let sumMoving = 0;
      let sumInstk = 0;
      let sumOutstk = 0;
      let sumEmpty = 0;
      let sumOthers = 0;
      let avgCt_ratio = 0;
      let avgBank_ratio = 0;
      for (const obj of data) {
        if (obj.durablespecname === '8PCE' && obj.cstspec === cstspecPce) {

          if (obj.ct_ratio !== -1) {
            countCt++;
            sumCt_ratio += obj.ct_ratio;
          }
          if (obj.bank_ratio !== -1) {
            countBank++;
            sumBank_ratio += obj.bank_ratio;
          }

          sumCstqty += obj.cstqty;
          sumCt_inline += obj.ct_inline;
          sumCt_scrap += obj.ct_scrap;
          sumCt_packing += obj.ct_packing;
          sumBank_n += obj.bank_n;
          sumBank_y += obj.bank_y;
          sumEngi += obj.engi;
          sumDev += obj.dev;
          sumTtl += obj.ttl;
          sumDirty += obj.dirty;
          sumOneqp += obj.oneqp;
          sumMoving += obj.moving;
          sumInstk += obj.instk;
          sumOutstk += obj.outstk;
          sumEmpty += obj.empty;
          sumOthers += obj.others;
        }
      }
      if (countCt === 0) {
        avgCt_ratio = -1;
      } else {
        avgCt_ratio = sumCt_ratio / countCt;
      }
      if (countBank === 0) {
        avgBank_ratio = -1;
      } else {
        avgBank_ratio = sumBank_ratio / countBank;
      }
      result.push({
        durablespecname: '8PCE', cstspec: cstspecPce, cstqty: sumCstqty, ct_inline: sumCt_inline,
        ct_scrap: sumCt_scrap, ct_packing: sumCt_packing, bank_n: sumBank_n, bank_y: sumBank_y,
        ct_ratio: avgCt_ratio, bank_ratio: avgBank_ratio, engi: sumEngi, dev: sumDev,
        ttl: sumTtl, dirty: sumDirty, oneqp: sumOneqp, moving: sumMoving, instk: sumInstk, outstk: sumOutstk,
        empty: sumEmpty, others: sumOthers
      });
    }
    return result;
  }

  refresh() {
    this.predateStart = -1;
    this.predateEnd = -1;
    this.dateStart = null;
    this.dateEnd = null;
    this.ngOnInit();
  }

  toSecondTable(event, durablespecnameS, cstspecS, indexS) {
    if (event.target.innerText.trim() !== '-' && indexS !== 0 && indexS !== 6 && indexS !== 7) {
      this.SecondTableArray = [];
      let typeS = '';
      if (indexS === 1) {
        typeS = 'Inline';
      } else if (indexS === 2) {
        typeS = 'Scrap';
      } else if (indexS === 3) {
        typeS = 'Packing';
      } else if (indexS === 4) {
        typeS = 'N';
      } else if (indexS === 5) {
        typeS = 'Y';
      }

      if (this.predateStart === -1 && this.predateEnd === -1) {
        const option = {
          params: {
            durablespecname: durablespecnameS,
            cstspec: cstspecS,
            type: typeS
          }
        };
        this.apiService.get('/sc/cstinfopanelT', option).subscribe(
          (res) => {
            this.SecondTableArray = res;
          }
        );
      } else {
        const option = {
          params: {
            durablespecname: durablespecnameS,
            cstspec: cstspecS,
            type: typeS,
            start: this.predateStart,
            end: this.predateEnd
          }
        };
        this.apiService.get('/sc/cstinfopanelQT', option).subscribe(
          (res) => {
            this.SecondTableArray = res;
          }
        );
      }

      this.firstView = false;
      this.secondView = true;
    }
  }

  toSecondTableRight(event, durablespecnameS, cstspecS, indexS) {
    if (event.target.innerText.trim() !== '-' && indexS !== 2 && indexS !== 9) {
      this.SecondTableArray = [];
      let typeS = '';
      if (indexS === 0) {
        typeS = 'Engineer';
      } else if (indexS === 1) {
        typeS = 'Develop';
      } else if (indexS === 3) {
        typeS = 'ONEQP';
      } else if (indexS === 4) {
        typeS = 'MOVING';
      } else if (indexS === 5) {
        typeS = 'INSTK';
      } else if (indexS === 6) {
        typeS = 'Dirty';
      } else if (indexS === 7) {
        typeS = '空';
      } else if (indexS === 8) {
        typeS = 'OUTSTK';
      }

      if (this.predateStart === -1 && this.predateEnd === -1) {
        const option = {
          params: {
            durablespecname: durablespecnameS,
            cstspec: cstspecS,
            type: typeS
          }
        };
        this.apiService.get('/sc/cstinfopanelT', option).subscribe(
          (res) => {
            this.SecondTableArray = res;
          }
        );
      } else {
        const option = {
          params: {
            durablespecname: durablespecnameS,
            cstspec: cstspecS,
            type: typeS,
            start: this.predateStart,
            end: this.predateEnd
          }
        };
        this.apiService.get('/sc/cstinfopanelQT', option).subscribe(
          (res) => {
            this.SecondTableArray = res;
          }
        );
      }

      this.firstView = false;
      this.secondView = true;
    }
  }

  showFirstTable() {
    this.firstView = true;
    this.secondView = false;
  }

}