export class DashbaordData {
    interverIime: number;
    dataKey;
    dataValue;
    index: number;

    Interval;

    timeInterval() {
       this.Interval = setInterval(() => {
            this.index += 1;
            this.dataValue = 'changed_' + this.index;
        }, this.interverIime);
    }

    timeInterval2(obj: Function, obj2: Function) {
        this.Interval = setInterval(() => {
            obj();
            obj2();
         }, this.interverIime);
     }
    clearInterval() {
        clearInterval((this.Interval));
    }
}
