package com.boe.idm.project.service;

import java.util.List;
import java.util.Map;

import com.boe.idm.project.model.mybatis.ChartVO;
import com.boe.idm.project.model.mybatis.GridVO;
import com.boe.idm.project.model.mybatis.PageVO;

public interface GridService {

	public Map<String,Object> getGridtList(Map<String,Object> map) throws Exception;
	
	public int gridInsert(GridVO gridVO) throws Exception;
	
	public int gridUpdate(GridVO gridVO) throws Exception;
	
	public int deleteChart(List<GridVO> gridVOList) throws Exception;
	
	public List<GridVO> getGridChildList(GridVO gridVO) throws Exception;
	
	public int getTotCount() throws Exception;
}
