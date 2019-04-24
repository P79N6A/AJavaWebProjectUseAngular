export class DateUtil{
    public getDate(date:Date){
        const month=((date.getMonth())+1)<10?'0'+(date.getMonth()+1):date.getMonth()+'';
        const day=date.getDate()<10?'0'+date.getDate():date.getDate()+'';
        return date.getFullYear()+month+day;
    }

    public getNewDate(date:Date,days:number){
        return new Date(date.getTime()+days*24*60*60*1000);
    }

    public getDateShiftDay(date:Date){
        return date.getFullYear()+''+(date.getMonth()+1)+''+date.getDate()+' 060000';
    }

    public getDateShiftNight(date:Date){
        return date.getFullYear()+''+(date.getMonth()+1)+''+date.getDate()+' 180000';
    }

    public getFormatDate(date:Date,str:string){
        const year=date.getFullYear()+'';
        const month=(date.getMonth()+1)<10?'0'+(date.getMonth()+1):(date.getMonth()+1)+'';
        const day=date.getDate()<10?'0'+date.getDate():date.getDate()+'';
        const hour=date.getHours()<10?'0'+date.getHours():date.getHours()+'';
        const min=date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()+'';
        const second=date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds()+'';
        str=str.replace(/yyyy/ig,year);
        str=str.replace(/mm/ig,month);
        str=str.replace(/dd/ig,day);
        str=str.replace(/hh/ig,hour);
        str=str.replace(/mi/ig,min);
        str=str.replace(/ss/ig,second);
        return str;
    }
}
