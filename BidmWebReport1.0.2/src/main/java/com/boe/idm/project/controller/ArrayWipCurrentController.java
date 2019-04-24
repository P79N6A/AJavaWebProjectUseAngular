package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ArrayWipCurrentVO;
import com.boe.idm.project.service.ArrayWipCurrentService;

@RestController
@RequestMapping("/api")
public class ArrayWipCurrentController {
	
	@Autowired
	public  ArrayWipCurrentService service;
	
	@RequestMapping(value="/array/currentwip",method = RequestMethod.GET )
	public List<ArrayWipCurrentVO> getList(HttpServletRequest request,
										HttpServletResponse response,
										@RequestParam(value="hourtimekey",required = true)String hourtimekey){
		return service.getList(hourtimekey);
	}

}
