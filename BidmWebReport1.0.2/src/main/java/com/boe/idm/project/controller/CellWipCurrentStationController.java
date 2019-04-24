package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CellWipCurrentStationVO;
import com.boe.idm.project.service.CellWipCurrentStationService;

@RestController
@RequestMapping("/api")
public class CellWipCurrentStationController {

	@Autowired
	private CellWipCurrentStationService service;
	
	@RequestMapping(value="/cell/wipcurrentstation",method = RequestMethod.GET)
	public List<CellWipCurrentStationVO> getList(HttpServletRequest request,
											HttpServletResponse response,
											@RequestParam(value = "hourtimekey",required=true) String hourtimekey,
											@RequestParam(value = "operationdesc",required = true) String operationdesc){
		
		System.out.println("controller 传递过来的参数是 ： "+hourtimekey + " :  "+operationdesc);
		return service.getList(hourtimekey, operationdesc);
	}
}
