package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ArrayWipVO;
import com.boe.idm.project.service.ArrayWipService;

@RestController
@RequestMapping("/api")
public class ArrayWipController {
	
	@Autowired
	private ArrayWipService service;
	
	@RequestMapping(value = "/array/wip",method = RequestMethod.GET)
	
	public List<ArrayWipVO> getList(HttpServletRequest request,
			      HttpServletResponse response){
		return service.getList();
	}
	

}
