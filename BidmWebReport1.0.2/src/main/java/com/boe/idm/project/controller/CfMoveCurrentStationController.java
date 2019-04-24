package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CfMoveCurrentStationVO;
import com.boe.idm.project.model.mybatis.CfWipCurrentStationVO;
import com.boe.idm.project.service.CfMoveCurrentStationService;
import com.boe.idm.project.service.CfWipCurrentStationService;

@RestController
@RequestMapping("/api")
public class CfMoveCurrentStationController {
	
	@Autowired
	private CfMoveCurrentStationService service;
	
	@RequestMapping(value="/cf/movecurrentstation",method=RequestMethod.GET)
	public List<CfMoveCurrentStationVO> getList(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value = "operationdesc",required = true) String operationdesc){
		return service.getList(operationdesc);
	}

}
