package com.boe.idm.project.controller;

import java.sql.SQLException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.PageVO;
import com.boe.idm.project.model.mybatis.SampleVO;
import com.boe.idm.project.service.SamplePrimaryService;
import com.boe.idm.project.service.SampleSecondService;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class SampleRestForMybatisController {
	
	private static Logger logger = Logger.getLogger(SampleRestForMybatisController.class);
	
	@Autowired
	SamplePrimaryService samplePrimaryService;
	@Autowired
	SampleSecondService sampleSecondService;
	
	
	@RequestMapping(value = "/primary/sample", method = RequestMethod.GET)
	public @ResponseBody List<SampleVO> primarySample(
			HttpServletRequest request, 
			HttpServletResponse response ) throws Exception , SQLException{
			
			List<SampleVO> list = samplePrimaryService.getSampleList();
			//logger.debug(list);
			
		return list;
	}
	
	@RequestMapping(value = "/second/sample", method = RequestMethod.GET)
	public @ResponseBody List<SampleVO> secondSample(
			HttpServletRequest request, 
			HttpServletResponse response ) throws Exception , SQLException{
			
			List<SampleVO> list = sampleSecondService.getSampleList();
			//logger.debug(list);
			
		return list;
	}
	

}
