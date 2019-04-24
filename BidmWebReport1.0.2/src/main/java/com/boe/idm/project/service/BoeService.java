package com.boe.idm.project.service;

import java.util.List;
import java.util.Map;

import com.boe.idm.project.model.mybatis.ChartVO;
import com.boe.idm.project.model.mybatis.PageVO;

public interface BoeService {

	public Map<String, Object> getChartList(PageVO pageVO, Map<String,Object> searchMap) throws Exception;
	
	public int chartInsert(ChartVO chartVO) throws Exception;
}
