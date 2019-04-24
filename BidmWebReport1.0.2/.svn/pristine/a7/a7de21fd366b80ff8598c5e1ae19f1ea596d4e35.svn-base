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

import com.boe.idm.project.model.mybatis.ArCellInPlanVO;
import com.boe.idm.project.service.ArImportPlanService;

@RestController
@RequestMapping("/api")
public class ArImportPlanController {

	@Autowired
	private ArImportPlanService service;

	@RequestMapping(value = "/importplanar/excelUpload1", method = RequestMethod.GET)
	public List<ArCellInPlanVO> readImportPlan(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "localPath", required = true) String localpath) throws Exception {

		return service.readExcelData(localpath);
	}

	@RequestMapping(value = "/importplanar/saveImportData", method = RequestMethod.PUT)
	public int saveImportData(HttpServletRequest request, HttpServletResponse response, @RequestBody Map map)
			throws Exception {
		List<ArCellInPlanVO> list = (List<ArCellInPlanVO>) map.get("ArImportPlanVOList");

		return service.insert(list);
	}

	@RequestMapping(value = "/importplanar/searchPlan", method = RequestMethod.GET)
	public List<ArCellInPlanVO> searchData(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "datestart", required = true) String startdate,
			@RequestParam(value = "dateend", required = true) String enddate) throws Exception {

		return service.query(startdate, enddate);
	}
}
