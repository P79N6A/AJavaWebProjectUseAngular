package com.boe.idm.project.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.handler.WebsocketHandler;
import com.boe.idm.project.model.mybatis.ChartVO;
import com.boe.idm.project.model.mybatis.GridVO;
import com.boe.idm.project.model.mybatis.PageVO;
import com.boe.idm.project.service.GridService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class GridController {
	
	Logger log = LoggerFactory.getLogger(GridController.class);
	
	@Autowired
	private GridService gridService;
	
//	@RequestMapping(value="/grid/list", method = RequestMethod.POST)
//	public @ResponseBody PageVO gridList( @RequestBody PageVO pageVO ) throws Exception , SQLException{
//		return gridService.getGridtList(pageVO);
//	}
	
	@RequestMapping(value="/grid/list", method = RequestMethod.GET)
	public Map<String, Object> gridList(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="searchOption", required=false) String searchOption,
			@RequestParam(value="searchWord", required=false) String searchWord,
			@RequestParam(value="pageRow", required=false) Integer pageRow,
			@RequestParam(value="startRow", required=false) Integer startRow			
			) throws Exception{
	
		Map<String,Object> map = new HashMap<>();
		map.put("searchOption",searchOption);
		map.put("searchWord",searchWord);
		map.put("startRow",startRow);
		map.put("pageRow",pageRow);

		return gridService.getGridtList(map);
	}
	
	@RequestMapping(value="/grid/create", method = RequestMethod.POST)
	public ChartVO boeUiCreate(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody GridVO gridVO
			) throws Exception{
		ChartVO result = new ChartVO();		
		gridService.gridInsert(gridVO);
		return result;
	}
	
	@RequestMapping(value="/grid/update", method = RequestMethod.PUT)
	public int gridUpdate(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody GridVO gridVO
			) throws Exception{
		return gridService.gridUpdate(gridVO);
	}
	
	@RequestMapping(value="/grid/delete", method = RequestMethod.DELETE)
	public int gridDelete(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody List<GridVO> gridVOVOList 
			) throws Exception{		
		return gridService.deleteChart(gridVOVOList);
	}
	
	@RequestMapping(value="/grid/child/list", method = RequestMethod.GET)
	public List<GridVO> gridChildList( 
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="searchKey", required=false) String searchKey
			) throws Exception {
			GridVO gridVO = new GridVO();
			gridVO.setGridKey(Integer.parseInt(searchKey));
		
		return gridService.getGridChildList(gridVO);
	}
	
	@RequestMapping(value="/grid/list/count", method = RequestMethod.GET)
	public int gridListCount(
			HttpServletRequest request, 
			HttpServletResponse response
			) throws Exception {
		return gridService.getTotCount();
	}
	

	
}
