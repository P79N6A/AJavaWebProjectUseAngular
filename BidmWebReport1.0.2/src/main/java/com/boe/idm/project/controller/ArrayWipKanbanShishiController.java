package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ArrayWipKanbanShishiVO;
import com.boe.idm.project.service.ArrayWipKanbanShishiService;

@RestController
@RequestMapping("/api")
public class ArrayWipKanbanShishiController {
	
	@Autowired
	private ArrayWipKanbanShishiService service;
	
	@RequestMapping(value = "/arraywipkanban/shishi",method=RequestMethod.GET)
	public List<ArrayWipKanbanShishiVO> queryAllObjects(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value = "productiontype") String productiontype
			){
		return service.queryAllObjects(productiontype);
	}

}
