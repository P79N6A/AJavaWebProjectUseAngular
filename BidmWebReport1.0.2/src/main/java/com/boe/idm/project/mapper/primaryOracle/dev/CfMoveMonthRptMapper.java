package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.CfMoveMonthRptVO;

@Mapper
public interface CfMoveMonthRptMapper {

	public List<CfMoveMonthRptVO> getData(@Param("date") int date, @Param("hour") int hour) throws Exception;

	public List<CfMoveMonthRptVO> queryData(@Param("datename") String datename) throws Exception;

}
