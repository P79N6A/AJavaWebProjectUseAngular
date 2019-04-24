
export class ArrayWipKanbanShishi1{
     productname = null;
	   modeltype = null;
	   productiontype = null;
	   opercode = null;
	   operdesc = null;
	   eqpid = null;
	  glsqty = null;
	lotqty = null;
}



export class ArrayWipKanbanShishi{
   
      opercode = null;
      operdesc = null;
      eqpid = null;
      
	  qtys : number[] = []; // 这个数组是用来保存 数据的
	  
	  haseqpid : number [] = []; // 这个数组是用来保存 eqpid 不为null的数据的下标

}