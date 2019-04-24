package com.boe.idm.project.mapper.primary.chart;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.boe.idm.project.model.mybatis.ChartVO;
import com.boe.idm.project.model.mybatis.PageVO;

@Mapper
public interface ChartMapper {
	
	public List<ChartVO> getChartList (Map<String,Object> map) throws Exception;
	
	public ChartVO getOneChart(ChartVO chartVO) throws Exception;
	
	public List<ChartVO> getAllChartList();
	
	public int insertChart(ChartVO chartVO) throws Exception;
	
	public int updateChart(ChartVO chartVO) throws Exception;
	
	public int deleteChart(ChartVO chartVO) throws Exception;
	
	public int getTotCount(String name) throws Exception;
}
