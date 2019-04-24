export class DailyReport{
    inPlanM:Float32Array;
    inPlanCum:Float32Array;
    inActD:Float32Array;
    inActCum:Float32Array;
    inBal:Float32Array;
    outPlanM:Float32Array;
    outPlanCum:Float32Array;
    outActD:Float32Array;
	outActCum:Float32Array;
    outBal:Float32Array;
    scrapD:Float32Array;
    scrapCum:Float32Array;
    yieldD:Float32Array;
    yieldCum:Float32Array;
}

export class DailyReportByProduct{
    productName:Float32Array;
    product:Float32Array;
    cutNumber:Float32Array;
    inPlanM:Float32Array;
    inPlanCum:Float32Array;
    inActD:Float32Array;
    inActCum:Float32Array;
    inBal:Float32Array;
    outPlanM:Float32Array;
    outPlanCum:Float32Array;
    outActD:Float32Array;
    outActCum:Float32Array;
    outBal:Float32Array;
    scrapD:Float32Array;
    scrapCum:Float32Array;
    yieldD:Float32Array;
    yieldCum:Float32Array;
    sWip:Float32Array;
    eWip:Float32Array;
}