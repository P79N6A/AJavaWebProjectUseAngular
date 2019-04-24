package com.boe.idm.project.service;

import java.util.List;
import java.util.Map;

import com.boe.idm.project.model.mybatis.ChartVO;
import com.boe.idm.project.model.mybatis.PageVO;

public interface ChartService {

	public Map<String, Object> getChartList(PageVO pageVO, Map<String,Object> map) throws Exception;

	public Map<String, Object> getChartList(Map<String,Object> map) throws Exception;
	
	public ChartVO getOneChart(ChartVO chartVO) throws Exception;
	
	public List<ChartVO> getAllChartList() throws Exception;
	
	public int chartInsert(ChartVO chartVO) throws Exception;
	
	public int chartUpdate(ChartVO chartVO) throws Exception;
	
	public int deleteChart(List<ChartVO> chartVOList) throws Exception;
	
	public int getListCount() throws Exception;
	
	}
