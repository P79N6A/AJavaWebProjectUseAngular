export class BankCellInRowItem {
  arrayname = null;
  cellpair = null;
  bal1 = null;
  bal2 = null;
  bal3 = null;
  bal4 = null;
  bal5 = null;
  bycellname: Array<CellNameItem> = [];
}

export class CellNameItem {
  constructor(
    public cellname: string,
    public tftbank: number,
    public cfbank: number,
    public cellin: number,
    public plan1: number,
    public plan2: number,
    public plan3: number,
    public plan4: number,
    public plan5: number
  ) {

  }
}
