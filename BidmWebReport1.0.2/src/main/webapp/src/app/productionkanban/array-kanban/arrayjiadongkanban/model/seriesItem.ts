export class SeriesItem {
  constructor(
    public name: string,
    public type: string,
    public barWidth: string,
    public stack: string,
    public itemStyle: ItemStyle,
    public data: Array<Array<number>>,
  ) { }
}

export class ItemStyle {
  constructor(public color: string) { }
}

export class EqpAllState {
  constructor(
    public run: string,
    public runratio: string,
    public idle: string,
    public idleratio: string,
    public down: string,
    public downratio: string,
    public etime: string,
    public etimeratio: string,
    public pm: string,
    public pmratio: string,
    public maint: string,
    public maintratio: string,
    public etc: string,
    public etcratio: string,
  ) {}
}
