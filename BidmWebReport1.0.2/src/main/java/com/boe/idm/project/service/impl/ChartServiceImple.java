package com.boe.idm.project.service.impl;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.annotation.Resource;


import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.chart.ChartMapper;
import com.boe.idm.project.model.mybatis.ChartVO;
import com.boe.idm.project.model.mybatis.MesGridVO;
import com.boe.idm.project.model.mybatis.PageVO;
import com.boe.idm.project.service.ChartService;

@Service
public class ChartServiceImple implements ChartService {
	
private static Logger logger = Logger.getLogger(ChartServiceImple.class);
	
	@Resource
	private ChartMapper chartMapper;
	
	@Override
	public Map<String, Object> getChartList(PageVO pageVO, Map<String,Object> searchMap) throws Exception {
		Map rsltMap = new HashMap<>();

		pageVO = setPageInfo(pageVO);
		searchMap.put("startRow", pageVO.getStartRow());
		searchMap.put("pageRow", pageVO.getPageRow());

		rsltMap.put("resultList", chartMapper.getChartList(searchMap));
		rsltMap.put("pageVO", pageVO);
		
		return rsltMap;
	}
	
	@Override
	public Map<String, Object> getChartList(Map<String,Object> searchMap) throws Exception {
		Map rsltMap = new HashMap<>();
		rsltMap.put("data", chartMapper.getChartList(searchMap));
		searchMap.put("searchCount", true);
		ChartVO chartVO = new ChartVO();
		rsltMap.put("totalRecords",  chartMapper.getChartList(searchMap));
		return rsltMap;
	}
	
	@Override
	public ChartVO getOneChart(ChartVO chartVO) throws Exception {
		return chartMapper.getOneChart(chartVO);
	}
	
	@Override
	public List<ChartVO> getAllChartList() throws Exception {
		return chartMapper.getAllChartList();
	}
	
	@Override
	public int getListCount() throws Exception {
		String name = "chart_table";
		return chartMapper.getTotCount(name);
	}
	
	@Override
	public int chartInsert(ChartVO chartVO) throws Exception{
		return chartMapper.insertChart(chartVO);
	}
	
	@Override
	public int chartUpdate(ChartVO chartVO) throws Exception {
		return chartMapper.updateChart(chartVO);
	}
	
	@Override
	public int deleteChart(List<ChartVO> chartVOList) throws Exception {
		int rslt = 0;
		for(ChartVO chartVO: chartVOList) {
			rslt = chartMapper.deleteChart(chartVO);
			if( rslt!= 1) {
				new Exception();
				return 0;
			}
		}
		return rslt;
	}
	
	public PageVO setPageInfo(PageVO vo) throws Exception {
		//total page setting
		if( vo.getGridName().toString() != null ) {			
			vo.setTotRow(chartMapper.getTotCount(vo.getGridName()));
			int now = (vo.getNowPage()-1)*vo.getPageRow() ;
			int end = vo.getNowPage()*vo.getPageRow();
			vo.setStartRow(now);
			vo.setEndRow(end);	
		}
		return vo;
	}
	
	public String stringToDate(String strDate) throws Exception {
		if(!strDate.equals("")) {
			DateFormat dateformat = new SimpleDateFormat("EEE MMM dd HH:mm:ss z yyyy", Locale.ENGLISH);
			Date newDate = dateformat.parse(strDate);
			
			SimpleDateFormat newFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
			return newFormat.format(newDate).toString();
		}
		return strDate;
	}
}
