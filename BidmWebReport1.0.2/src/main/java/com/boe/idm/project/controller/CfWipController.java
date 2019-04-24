package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CfWipVO;
import com.boe.idm.project.service.CfWipService;

@RestController
@RequestMapping("/api")
public class CfWipController {
	@Autowired
	private CfWipService service;
	
	@RequestMapping(value = "/cf/wip",method=RequestMethod.GET)
	public List<CfWipVO> getList(HttpServletRequest request,
			                    HttpServletResponse response){
			return service.getList();
	}
	
	@RequestMapping(value = "/cf/wipPH1",method=RequestMethod.GET)
	public List<CfWipVO> getListPH1(HttpServletRequest request,
			                    HttpServletResponse response){
			return service.getListPH1();
	}
	@RequestMapping(value = "/cf/wipPH2",method=RequestMethod.GET)
	public List<CfWipVO> getListPH2(HttpServletRequest request,
			                    HttpServletResponse response){
			return service.getListPH2();
	}

}
