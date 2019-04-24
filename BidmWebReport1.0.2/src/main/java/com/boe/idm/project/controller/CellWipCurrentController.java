package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CellWipCurrentVO;
import com.boe.idm.project.service.CellWipCurrentService;

@RestController
@RequestMapping("/api")
public class CellWipCurrentController {
	
	@Autowired
	private CellWipCurrentService service;

	@RequestMapping(value = "/cell/currentwip",method = RequestMethod.GET)
	public List<CellWipCurrentVO> getList(HttpServletRequest request,
			      HttpServletResponse response,
			     @RequestParam(value="hourtimekey",required=true) String hourtimekey){
		return service.getList(hourtimekey);
	}
	
	@RequestMapping(value = "/cell/currentwipboth",method = RequestMethod.GET)
	public List<CellWipCurrentVO> getListBoth(HttpServletRequest request,
			      HttpServletResponse response,
			     @RequestParam(value="hourtimekey",required=true) String hourtimekey){
		return service.getListBoth(hourtimekey);
	}
	

}
