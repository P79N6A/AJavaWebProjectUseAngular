package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.GSshowTableVO;
import com.boe.idm.project.service.GSshowTableService;

@RestController
@RequestMapping("/api")
public class GSshowTableController {
	
	@Autowired
	private GSshowTableService service;
	
	@RequestMapping(value="/gs/showTable",method=RequestMethod.GET)
	public List<GSshowTableVO> getList(
			HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value = "factoryname",required = true) String factoryname){
		return service.getList(factoryname);
	}

}
