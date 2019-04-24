package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ArrayMoveCurrentVO;
import com.boe.idm.project.service.ArrayMoveCurrentService;

@RestController
@RequestMapping("/api")
public class ArrayMoveCurrentController {

	@Autowired
	public  ArrayMoveCurrentService service;

	@RequestMapping(value="/array/currentmove",method = RequestMethod.GET )
	public List<ArrayMoveCurrentVO> getList(HttpServletRequest request,
										HttpServletResponse response,
			@RequestParam(value = "starttime", required = true) String starttime,
			@RequestParam(value = "endtime", required = true) String endtime){
		System.out.println("------starttime:" + starttime + ",endtime:" + endtime + "-------");
		return service.getList(starttime, endtime);
	}

}
