package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CellDailyReportMovementVO;
import com.boe.idm.project.model.mybatis.CellDailyReportVO;

public interface CellDailyReportService {
	
	//1.查询所有的数据
	public List<CellDailyReportVO> queryObjects();
	//2.查询确定日期的数据
	public List<CellDailyReportVO> queryObjects02(String startdatename,
		 String month, String enddatename);
	
	//3.刷新当天的 TotalAct 的数据:实际上就是只有一个对象的返回
	public CellDailyReportVO queryTotalAct();
	//4.根据参数进行刷新的数据
	public CellDailyReportVO queryTotalAct02(String startdatename,String month,String enddatename);

	//5.查询 cell生产日报的movement的数据
	public List<CellDailyReportMovementVO> qyeryAllCellMovement(String datename);
}
