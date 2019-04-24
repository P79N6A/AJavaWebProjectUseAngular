package com.boe.idm.project.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.boe.BoeMapper;
import com.boe.idm.project.model.mybatis.ChartVO;
import com.boe.idm.project.model.mybatis.PageVO;
import com.boe.idm.project.service.BoeService;

@Service
public class BoeServiceImple implements BoeService {

	@Resource
	private BoeMapper boeMapper;
	
	@Override
	public Map<String,Object> getChartList(PageVO pageVO, Map<String,Object> searchMap) throws Exception {
		Map rsltMap = new HashMap<>();
		
		searchMap.put("startRow", pageVO.getStartRow());
		searchMap.put("pageRow", pageVO.getPageRow());
		
		List<ChartVO> chartList = boeMapper.getBoeChartList(searchMap);
		rsltMap.put("chartList", chartList);
		rsltMap.put("pageVO", pageVO);
		
		return rsltMap;
	}
	
	
	@Override
	public int chartInsert(ChartVO chartVO) throws Exception{
		return boeMapper.insertChart(chartVO);
	}
	
}
