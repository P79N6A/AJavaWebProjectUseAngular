package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CellMoveVO;
import com.boe.idm.project.service.CellMoveService;

@RestController
@RequestMapping("/api")
public class CellMoveController {
	
	@Autowired
	private CellMoveService service;
	
	@RequestMapping(value="/cell/move",method=RequestMethod.GET)
	public List<CellMoveVO> getList(
			HttpServletRequest request,
			HttpServletResponse response){
		return service.getList();
	}
	@RequestMapping(value="/cell/moveboth",method=RequestMethod.GET)
	public List<CellMoveVO> getListBoth(
			HttpServletRequest request,
			HttpServletResponse response){
		return service.getListBoth();
	}
	@RequestMapping(value="/cell/movePCL",method=RequestMethod.GET)
	public List<CellMoveVO> getListPCL(
			HttpServletRequest request,
			HttpServletResponse response){
		return service.getListPCL();
	}
	@RequestMapping(value="/cell/movePCS",method=RequestMethod.GET)
	public List<CellMoveVO> getListPCS(
			HttpServletRequest request,
			HttpServletResponse response){
		return service.getListPCS();
	}

}
