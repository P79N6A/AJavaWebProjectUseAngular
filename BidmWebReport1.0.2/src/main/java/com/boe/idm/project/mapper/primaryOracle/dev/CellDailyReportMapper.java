package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.CellDailyReportMovementVO;
import com.boe.idm.project.model.mybatis.CellDailyReportVO;

@Mapper
public interface CellDailyReportMapper {
	
	//1.直接刷新当天数据 ,
	public List<CellDailyReportVO> queryObjects();
	//2.根据参数 查询相应的数据
	public List<CellDailyReportVO> queryObjects02(@Param("startdatename") String startdatename,
			@Param("month") String month,@Param("enddatename") String enddatename);
	
	//3.刷新当天的 TotalAct 的数据:实际上就是只有一个对象的返回
	public CellDailyReportVO queryTotalAct();
	//4.根据参数进行刷新的数据
	public CellDailyReportVO queryTotalAct02(@Param("startdatename") String startdatename,
			@Param("month") String month,@Param("enddatename") String enddatename);


	//5.查询 cell生产日报的movement的数据
	public List<CellDailyReportMovementVO> qyeryAllCellMovement1();
	public List<CellDailyReportMovementVO> qyeryAllCellMovement2();
	public List<CellDailyReportMovementVO> qyeryAllCellMovement(String datename);

}
