import { ItemStyle } from '../../arrayjiadongkanban/model/seriesItem';

export class SeriesItemZaohui {
  constructor(
    public name: string,
    public type: string,
    public stack: string,
    public data: Array<Array<number>>,
  ) { }
}


export class SeriesItemZaohui1 {
  constructor(
    public name: string,
    public type: string,
    public stack: string,
    public itemStyle: ItemStyle,
    public data: Array<Array<number>>,
  ) { }
}



