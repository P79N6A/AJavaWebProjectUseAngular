export class SeriesItemAe {
  constructor(
    public name: string,
    public type: string,
    public barWidth: string,
    public stack: string,
    public data: Array<Array<number>>,
  ) { }
}
