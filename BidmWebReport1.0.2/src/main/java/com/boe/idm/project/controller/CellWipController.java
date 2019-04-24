package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.xmlbeans.impl.xb.xsdschema.Public;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CellWipVO;
import com.boe.idm.project.service.CellWipService;

@RestController
@RequestMapping("/api")
public class CellWipController {
	
	@Autowired
	private CellWipService service;
	
	@RequestMapping(value="/cell/wip",method=RequestMethod.GET)
	public List<CellWipVO> getList(
			HttpServletRequest request,
			HttpServletResponse response){
		return service.getList();
	}

	@RequestMapping(value="/cell/wipboth",method=RequestMethod.GET)
	public List<CellWipVO> getListBoth(
			HttpServletRequest request,
			HttpServletResponse response){
		return service.getListBoth();
	}
	
	@RequestMapping(value="/cell/wipPCL",method=RequestMethod.GET)
	public List<CellWipVO> getListPCL(
			HttpServletRequest request,
			HttpServletResponse response){
		return service.getListPCL();
	}
	
	@RequestMapping(value="/cell/wipPCS",method=RequestMethod.GET)
	public List<CellWipVO> getListPCS(
			HttpServletRequest request,
			HttpServletResponse response){
		return service.getListPCS();
	}
}
