package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CfMoveVO;
import com.boe.idm.project.service.CfMoveService;

@RestController
@RequestMapping("/api")
public class CfMoveController {
	
	@Autowired
	private CfMoveService service;
	
	@RequestMapping(value = "/cf/move",method = RequestMethod.GET)
	public List<CfMoveVO> getList(HttpServletRequest request,
			      HttpServletResponse response){
		return service.getList();
	}
	
	@RequestMapping(value = "/cf/movePH1",method = RequestMethod.GET)
	public List<CfMoveVO> getListPH1(HttpServletRequest request,
			      HttpServletResponse response){
		return service.getListPH1();
	}
	@RequestMapping(value = "/cf/movePH2",method = RequestMethod.GET)
	public List<CfMoveVO> getListPH2(HttpServletRequest request,
			      HttpServletResponse response){
		return service.getListPH2();
	}

}
