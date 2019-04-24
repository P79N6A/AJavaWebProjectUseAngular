package com.boe.idm.project.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.boe.idm.project.model.mybatis.ChartVO;
import com.boe.idm.project.model.mybatis.SampleVO;
import com.boe.idm.project.service.ChartService;
import com.boe.idm.project.service.SamplePrimaryService;
import com.boe.idm.project.view.ExcelView;
import com.boe.idm.project.view.FrontExcelView;


@CrossOrigin
@RestController
@RequestMapping("/api/excel")
public class ExcelDownLoadController {
	@Autowired
	SamplePrimaryService samplePrimaryService;

	@Autowired
	ChartService chartService;
	
	@Autowired
	ExcelView excelView;
	
	@Autowired
	FrontExcelView frontExcelView;
	
	@RequestMapping(value = "/download", method = RequestMethod.POST)
	public ModelAndView getExcelFile(
			Model model,
			@RequestBody Map<String,Object> map,
			HttpServletRequest request, 
			HttpServletResponse response) throws Exception {
		
		
		String excelTitle = "Excel File Test";
	    
		List<Map> headerList = (ArrayList) map.get("header");
		Map<String, Object> optionMap = new HashMap<>();
		optionMap = (Map<String, Object>) map.get("params");
		
		List<ChartVO> excelList = (List<ChartVO>) chartService.getChartList(optionMap).get("data");

		List<String> headers = new ArrayList<String>();
		List<String> fields = new ArrayList<String>();
		
		for (Map<String, Object> headerMap : headerList) {
			headers.add(headerMap.get("header").toString());
			fields.add(headerMap.get("header").toString());
		}
				
		model.addAttribute("title",excelTitle);
		model.addAttribute("headers",headers);
		model.addAttribute("fields",fields);
		model.addAttribute("excelList", excelList);
		
		return new ModelAndView(excelView);  
	}
	
	@RequestMapping(value = "/download/front", method = RequestMethod.POST)
	public ModelAndView getFrontExcelFile(
			Model model,
			@RequestBody Map<String,Object> map,
			HttpServletRequest request, 
			HttpServletResponse response) throws Exception {

		String excelTitle = "Excel File Test";
	    
		//get fornt header and content list
		List<Map> headerList = (ArrayList) map.get("header");
		List<ChartVO> excelList = (List<ChartVO>) map.get("content");

		List<String> headers = new ArrayList<String>();
		List<String> fields = new ArrayList<String>();
				
		for (Map<String, Object> headerMap : headerList) {
			headers.add(headerMap.get("header").toString());
			fields.add(headerMap.get("header").toString());
		}
		
		model.addAttribute("title",excelTitle);
		model.addAttribute("headers",headers);
		model.addAttribute("fields",fields);
		model.addAttribute("excelList", excelList);
				
		return new ModelAndView(frontExcelView);  
	}
}
