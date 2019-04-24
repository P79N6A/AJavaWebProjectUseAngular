import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Component({
  selector: 'app-pol-machine-status',
  templateUrl: './pol-machine-status.component.html',
  styleUrls: ['./pol-machine-status.component.css']
})
export class PolMachineStatusComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private http:HttpClient) { }

  machines:Array<any>=new Array<any>();
  maxOrder:number;
  maxOrderCount:number;
  lineMachines:Map<string,any>=new Map<string,any>();
  machinesStatus:Map<string,any>=new Map<string,any>();
  datas:any[];
  style;
  timer:any;

  ngOnInit() {
    this.maxOrderCount=0;
    this.datas=[];
    this.setLineMachines();
  }

  ngAfterViewInit(){
    this.datas=[...this.datas];
    /* this.timer = setInterval(
      () => {
        this.datas=[];
        this.addMachineStatus();
      },60000
    ); */
  }

  ngOnDestroy() {
    /* clearInterval(this.timer); */
  }

  setLineMachines(){
    const url="assets/data/machine.json";
    this.http.get(url).subscribe(
      (res)=>{
        this.getMaxProcessOrder(res['processes']);
        for(let i=0;i<res['lines'].length;i++){
          const machineList:Array<Map<string,any>>= new Array<Map<string,any>>();
          let count=0;
          for(let j=0;j<res['lines'][i]['machines'].length;j++){
            const machineMap:Map<string,any>=new Map<string,any>();
            machineMap.set("machine",res['lines'][i]['machines'][j]['machine']);
            machineMap.set("process",res['lines'][i]['machines'][j]['process']);
            machineMap.set("tt",res['lines'][i]['machines'][j]['tt']);
            machineMap.set("order",res['lines'][i]['machines'][j]['order']);
            machineMap.set("status",'');
            machineList.push(machineMap);
            count++;
          }
          if(count>this.maxOrderCount){
            this.maxOrderCount=count;
          }
          this.lineMachines.set(res['lines'][i]['name'],machineList);
          this.style={'width':parseInt(90/this.maxOrderCount+'',0)+'%'};
        }
        this.getAllMachines();
      }
    );
  }

  getMaxProcessOrder(processes){
    this.maxOrder=0;
    for(let i=0;i<processes.length;i++){
      if(processes[i]['order']>this.maxOrder){
        this.maxOrder=processes[i]['order'];
      }
    }
  }

  getAllMachines(){
    this.lineMachines.forEach((value,key)=>{
      for(let i=0;i<(<Array<Map<string,any>>>value).length;i++){
        this.machines.push(value[i].get('machine'));
      }
    });
    this.addMachineStatus();
  }

  addMachineStatus(){
    const url="assets/data/mod.json";
    const options={
      params:{"machineList":this.machines}
    };
    this.http.get(url).subscribe(
      (response) =>{
        const res=response['eqpstatus'];
        for(let i=0;i<res.length;i++){
          this.machinesStatus.set(res[i]['machine'],res[i]['status']);
        }
        let pageArray:Array<any>=new Array<any>();
        this.lineMachines.forEach((value,key)=>{
          const machines:Array<any>=new Array<any>();
          for(let i=0;i<(<Array<Map<string,any>>>value).length;i++){
            value[i].set('status',this.machinesStatus.get(value[i].get('machine')));
            // tslint:disable-next-line:max-line-length
            machines.push({"machine":value[i].get('machine'),"process":value[i].get('process'),"order":value[i].get('order'),"status":value[i].get('status'),"tt":value[i].get('tt')});
          }
          pageArray.push({"line":key,"machines":machines});
          if(pageArray.length===6 || pageArray.length===this.lineMachines.size){
            this.datas=[...this.datas,pageArray];
            pageArray=new Array<any>();
          }
        });
      }
    );
  }
}
