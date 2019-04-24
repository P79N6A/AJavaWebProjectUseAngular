package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.HourMonitorVO;

@Mapper
public interface HourMonitorMapper {
	
	public List<HourMonitorVO> getToday(@Param("dayControl") String dayControl) throws Exception;
	
	public List<HourMonitorVO> getOneday(@Param("dateValue") String dateValue) throws Exception;
}
