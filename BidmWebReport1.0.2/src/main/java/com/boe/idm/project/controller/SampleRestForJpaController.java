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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.jpa.SampleEntity;
import com.boe.idm.project.service.SampleJpaService;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class SampleRestForJpaController {
	
	private static Logger logger = Logger.getLogger(SampleRestForJpaController.class);
	
	@Autowired
	SampleJpaService sampleJpaService; 
	
	
	@RequestMapping(value = "/jpa/sample", method = RequestMethod.GET)
	public @ResponseBody List<SampleEntity> jpaSample(
			HttpServletRequest request, 
			HttpServletResponse response ) throws Exception , SQLException{
			
			List<SampleEntity> list = sampleJpaService.getSampleList();
			//logger.debug(list);
			
		return list;
	}
}
