package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.CellDailyReportWipVO;

@Mapper
public interface CellDailyRptWipMapper {

	public List<CellDailyReportWipVO> getData(@Param("dayControl") String dayControl) throws Exception;

	public List<CellDailyReportWipVO> queryData(@Param("dateValue") String dateValue) throws Exception;

}
