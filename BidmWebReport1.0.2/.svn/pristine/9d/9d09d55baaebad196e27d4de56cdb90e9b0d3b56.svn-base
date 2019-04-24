package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ArrayMoveVO;
import com.boe.idm.project.service.ArrayMoveService;

@RestController
@RequestMapping("/api")
public class ArrayMoveController {
	
	@Autowired
	private ArrayMoveService service;
	
	@RequestMapping(value = "/array/move",method = RequestMethod.GET)
	public List<ArrayMoveVO> getList(HttpServletRequest request,
			      HttpServletResponse response){
		
		return service.getList();
	}

}
