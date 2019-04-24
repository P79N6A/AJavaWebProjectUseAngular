export class CfMoveHourObject{
    operation = '';  // 这个决定了表格的横着的一整个对象
    description	= '';
    machine : string[] 	= []; // 一个对象可能有多个machine
    productspec : string[] 	= [];
    cf : string[] 	= [];
   planactnumb : Array<Array<string>> = new Array<Array<string>>(); // 定义的是一个二级的数组

   ereryObjects : CfMoveHourObject2[] = []; // 这个数组用来保存当前 operation 的一条一条的对象信息

}

export class CfMoveHourObject2{ // 一条一条的数据
    operation = '';  // 这个决定了表格的横着的一整个对象
    description	= '';
    machine : string 	= ''; // 一个对象可能有多个machine
    productspec : string 	= '';
    cf : string 	= '';
   planactnumb : Array<string> = new Array<string>(); // 定义的是一个二级的数组

}