package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.xmlbeans.impl.xb.xsdschema.Public;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.GSWipShowTableVO;
import com.boe.idm.project.service.GSWipShowTableService;

@RestController
@RequestMapping("/api")
public class GSWipShowTableController {
	@Autowired
	private GSWipShowTableService service;
	
	@RequestMapping(value="/gs/wipshowtable",method=RequestMethod.GET)
	public List<GSWipShowTableVO> getList(
			HttpServletRequest request,
			HttpServletResponse response){
		return service.getList();
	}

}
