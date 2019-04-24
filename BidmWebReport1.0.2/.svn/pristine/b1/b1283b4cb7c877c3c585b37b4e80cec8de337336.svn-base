package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CfWipCurrentStationVO;
import com.boe.idm.project.service.CfWipCurrentStationService;

@RestController
@RequestMapping("/api")
public class CfWipCurrentStationController {
	
	@Autowired
	private CfWipCurrentStationService service;
	
	@RequestMapping(value="/cf/wipcurrentstation",method=RequestMethod.GET)
	public List<CfWipCurrentStationVO> getList(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value = "hourtimekey",required=true) String hourtimekey,
			@RequestParam(value = "operationdesc",required = true) String operationdesc){
		return service.getList(hourtimekey, operationdesc);
	}

}
