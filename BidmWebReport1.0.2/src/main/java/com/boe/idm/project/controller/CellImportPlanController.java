package com.boe.idm.project.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CellImportPlanVO;
import com.boe.idm.project.service.CellImportPlanService;

@RestController
@RequestMapping("/api")
public class CellImportPlanController {
	
	@Autowired
	private CellImportPlanService service;
	
	
	/**
	 * 1.读取excel 文件中的 数据信息
	 * @param request
	 * @param response
	 * @param localpath
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/importplancell/excelUpload1",method=RequestMethod.GET)
	public List<CellImportPlanVO> readImportPlan(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="localPath",required=true) String localpath) throws Exception{
		
		return service.readExcelData(localpath);
	}
	
	/**
	 * 2.向数据库中保存导入的数据
	 * @param request
	 * @param response
	 * @param map
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/importplancell/saveImportData",method=RequestMethod.PUT)
	public int saveImportData(HttpServletRequest request,HttpServletResponse response,
			@RequestBody Map map) throws Exception{
		List<CellImportPlanVO> list = (List<CellImportPlanVO>) map.get("CellImportPlanVOList");
		
		return service.insertObjects(list);
	}
	
	@RequestMapping(value="/importplancell/searchPlan",method=RequestMethod.GET)
	public List<CellImportPlanVO> searchData(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="datestart",required=true) String startdate,
			@RequestParam(value="dateend",required=true) String enddate) throws Exception{
		
		return service.queryObjects(startdate, enddate);
	}
	
	

}
