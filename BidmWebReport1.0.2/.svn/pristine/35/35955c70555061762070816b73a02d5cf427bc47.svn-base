package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.BasicInfoTableVO;
import com.boe.idm.project.service.BasicInfoTableService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class BasicInfoTableController {

	@Autowired
	private BasicInfoTableService service;

	@RequestMapping(value = "/sc/basic/list", method = RequestMethod.GET)
	public List<BasicInfoTableVO> getData(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getData();
	}

	@RequestMapping(value = "/sc/basic/delete", method = RequestMethod.DELETE)
	public int deleteData(HttpServletRequest request, HttpServletResponse response,
			@RequestBody BasicInfoTableVO basicInfo) throws Exception {
		return service.deleteData(basicInfo);
	}
	
	@RequestMapping(value = "/sc/basic/insert", method = RequestMethod.POST)
	public int insertData(HttpServletRequest request, HttpServletResponse response,
			@RequestBody BasicInfoTableVO basicInfo) throws Exception {
		return service.insertData(basicInfo);
	}
	
	@RequestMapping(value = "/sc/basic/update", method = RequestMethod.PUT)
	public int updateData(HttpServletRequest request, HttpServletResponse response,
			@RequestBody BasicInfoTableVO basicInfo) throws Exception {
		return service.updateData(basicInfo);
	}

}
