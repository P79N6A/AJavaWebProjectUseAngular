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

import com.boe.idm.project.model.mybatis.ScProductInfoVO;
import com.boe.idm.project.service.ScProductInfoService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ScProductInfoController {

	@Autowired
	private ScProductInfoService service;

	@RequestMapping(value = "/sc/scproduct/list", method = RequestMethod.GET)
	public List<ScProductInfoVO> getData(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getData();
	}

	@RequestMapping(value = "/sc/scproduct/delete", method = RequestMethod.DELETE)
	public int deleteData(HttpServletRequest request, HttpServletResponse response,
			@RequestBody ScProductInfoVO scProductInfo) throws Exception {
		return service.deleteData(scProductInfo);
	}
	
	@RequestMapping(value = "/sc/scproduct/insert", method = RequestMethod.POST)
	public int insertData(HttpServletRequest request, HttpServletResponse response,
			@RequestBody ScProductInfoVO scProductInfo) throws Exception {
		return service.insertData(scProductInfo);
	}
	
	@RequestMapping(value = "/sc/scproduct/update", method = RequestMethod.PUT)
	public int updateData(HttpServletRequest request, HttpServletResponse response,
			@RequestBody ScProductInfoVO scProductInfo) throws Exception {
		return service.updateData(scProductInfo);
	}
	
}
