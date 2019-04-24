package com.boe.idm.project.controller;

import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import static java.util.stream.Collectors.*;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ChartVO;
import com.boe.idm.project.model.mybatis.PageVO;
import com.boe.idm.project.model.mybatis.PersonVO;
import com.boe.idm.project.model.mybatis.ProfitVO;
import com.boe.idm.project.service.BoeService;
import com.boe.idm.project.service.ChartService;

import net.bytebuddy.asm.Advice.Return;

@RestController
@RequestMapping("/api")
public class BoeRestController {

	private final Logger logger = LoggerFactory.getLogger(BoeRestController.class);

	@Autowired 
	private ChartService chartService;
	
	@RequestMapping(value="/boeui/list", method = RequestMethod.POST)
	public Map<String,Object> boeUiList(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody PageVO pageVO, 
			@RequestParam(value="searchWord", required = false, defaultValue ="") String searchWord,
			@RequestParam(value="searchOpt", required = false, defaultValue="") String searchOpt,
			@RequestParam(value="searchDate", required = false, defaultValue="") String searchDate,
			@RequestParam(value="sortCol", required = false, defaultValue = "chartKey") String sortCol,
			@RequestParam(value="sortType", required = false, defaultValue = "desc") String sortType 
		) throws Exception{
	
		Map<String, Object> searchMap = new HashMap<>();
		searchMap.put("searchWord",searchWord);
		searchMap.put("searchOpt",searchOpt);
		searchMap.put("searchDate", searchDate);
		searchMap.put("sortCol", sortCol);
		searchMap.put("sortType", sortType);
		
		return chartService.getChartList(pageVO, searchMap);
	}
	
	@RequestMapping(value="/boeui/list", method = RequestMethod.GET)
	public Map<String,Object> boeList(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="pageRow", required=false) Integer pageRow,
			@RequestParam(value="startRow", required=false) Integer startRow,	
			@RequestParam(value="searchWord", required = false, defaultValue ="") String searchWord,
			@RequestParam(value="searchOption", required = false, defaultValue="") String searchOption,
			@RequestParam(value="searchDate", required = false, defaultValue="") String searchDate,
			@RequestParam(value="sortCol", required = false, defaultValue = "chartKey") String sortCol,
			@RequestParam(value="sortType", required = false, defaultValue = "desc") String sortType 
		) throws Exception{
	
		Map<String, Object> searchMap = new HashMap<>();
		searchMap.put("searchWord",searchWord);
		searchMap.put("searchOption",searchOption);
		searchMap.put("searchDate", searchDate);
		searchMap.put("pageRow", pageRow);
		searchMap.put("startRow", startRow);
		searchMap.put("sortCol", sortCol);
		searchMap.put("sortType", sortType);
		

		return chartService.getChartList(searchMap);
	}
	
	@RequestMapping(value="/boeui/list/count", method = RequestMethod.GET)
	public int boeUiChartCount(HttpServletRequest request, HttpServletResponse response) throws Exception{
		return chartService.getListCount();
	}
	
	@RequestMapping(value="/boeui/list/chart/all", method = RequestMethod.GET)
	public List<ChartVO> boeUiChartAllList(HttpServletRequest request, HttpServletResponse response) throws Exception{
		return chartService.getAllChartList();
	}
	
	@RequestMapping(value="/boeui/create", method = RequestMethod.POST)
	public ChartVO boeUiCreate(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody ChartVO chartVO
			) throws Exception{
		
		ChartVO result = new ChartVO();		
		chartService.chartInsert(chartVO);
		return result;
	}
	
	@RequestMapping(value="/boeui/update", method = RequestMethod.PUT)
	public int boeUiUpdate(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody ChartVO chartVO
			) throws Exception{
		return chartService.chartUpdate(chartVO);
	}
	
	@RequestMapping(value="/boeui/delete", method = RequestMethod.DELETE)
	public int boeUiDelete(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody List<ChartVO> chartVOList 
			) throws Exception{		
		return chartService.deleteChart(chartVOList);
	}

	@RequestMapping(value="/boeui/chart", method = RequestMethod.GET)
	public ChartVO boeUiChartList(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="chartKey", required= true) String chartKey
		) throws Exception{
	
		ChartVO chartVO = new ChartVO();
		chartVO.setChartKey(Integer.parseInt(chartKey));
		return chartService.getOneChart(chartVO);
	}
	
	@RequestMapping(value="/findPerson",method=RequestMethod.GET)
	public List<PersonVO> findPerson(){
		List<PersonVO> persons = Arrays.asList(
				new PersonVO("yjk","boy",11),
				new PersonVO("clj", "girl", 12),
				new PersonVO("nxh", "girl", 13),
				new PersonVO("csy", "boy", 14)
			);
		return persons;
	}
	@RequestMapping(value="/findProfit",method=RequestMethod.GET)
	public List<ProfitVO> findProfit(){
		List<ProfitVO> profits = Arrays.asList(
				new ProfitVO("B1", "1", 1.0),
				new ProfitVO("B1", "2", 2.0),
				new ProfitVO("B1", "3", 3.0),
				new ProfitVO("B3", "1", 1.0),
				new ProfitVO("B3", "2", 2.0),
				new ProfitVO("B4", "1", 1.0),
				new ProfitVO("B4", "2", 2.0),
				new ProfitVO("B4", "3", 3.0),
				new ProfitVO("B4", "4", 4.0)
			);
		return profits;
	}
	
}
