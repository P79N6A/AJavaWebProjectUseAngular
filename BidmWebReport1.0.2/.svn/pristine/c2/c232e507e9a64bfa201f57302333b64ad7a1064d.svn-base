package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CellMoveCurrentVO;
import com.boe.idm.project.service.CellMoveCurrentService;

@RestController
@RequestMapping("/api")
public class CellMoveCurrentController {
	
	@Autowired
	private CellMoveCurrentService service;
	
	@RequestMapping(value="/cell/currentmove",method = RequestMethod.GET )
	public List<CellMoveCurrentVO> getList(HttpServletRequest request,
										HttpServletResponse response,
			@RequestParam(value = "starttime", required = true) String starttime,
			@RequestParam(value = "endtime", required = true) String endtime){
		System.out.println("------starttime:" + starttime + ",endtime:" + endtime + "-------");
		return service.getList(starttime, endtime);
	}
	
	@RequestMapping(value="/cell/currentmoveboth",method = RequestMethod.GET )
	public List<CellMoveCurrentVO> getListBoth(HttpServletRequest request,
										HttpServletResponse response){
		return service.getListBoth();
	}

}
