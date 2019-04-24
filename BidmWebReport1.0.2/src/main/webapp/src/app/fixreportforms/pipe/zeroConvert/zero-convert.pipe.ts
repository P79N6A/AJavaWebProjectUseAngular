import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'zeroConvert'
})
export class ZeroConvertPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (args === undefined) {
            // tslint:disable-next-line:triple-equals
            if (value == 0) {
                return '-';
            } else {
                return value;
            }
        } else {
            if (args !== 6 && args !== 7) {
                // tslint:disable-next-line:triple-equals
                if (value == 0) {
                    return '-';
                } else {
                    return value;
                }
            } else {
                // tslint:disable-next-line:triple-equals
                if (value == -1) {
                    return '-';
                } else if (isNaN(value)) {
                    return '0';
                } else {
                    return parseFloat((value * 100).toFixed(1)) + '%';
                }
            }

        }
    }

}
