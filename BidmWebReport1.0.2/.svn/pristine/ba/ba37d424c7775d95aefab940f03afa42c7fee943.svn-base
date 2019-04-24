package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ArOperBasicInfoVO;
import com.boe.idm.project.service.ArOperBasicInfoService;

@RestController
@RequestMapping("/api")
public class ArOperBasicInfoController {

	@Autowired
	private ArOperBasicInfoService service;

	@RequestMapping(value = "/sc/basic/getarrayoper", method = RequestMethod.GET)
	public List<ArOperBasicInfoVO> getData(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getData();
	}

	@RequestMapping(value = "/sc/basic/deletearrayoper", method = RequestMethod.DELETE)
	public int deleteData(HttpServletRequest request, HttpServletResponse response,
			@RequestBody ArOperBasicInfoVO arOperBasicInfoVO) throws Exception {
		return service.deleteData(arOperBasicInfoVO);
	}

	@RequestMapping(value = "/sc/basic/insertarrayoper", method = RequestMethod.POST)
	public int insertData(HttpServletRequest request, HttpServletResponse response,
			@RequestBody ArOperBasicInfoVO arOperBasicInfoVO) throws Exception {
		return service.insertData(arOperBasicInfoVO);
	}

	@RequestMapping(value = "/sc/basic/updatearrayoper", method = RequestMethod.PUT)
	public int updateData(HttpServletRequest request, HttpServletResponse response,
			@RequestBody ArOperBasicInfoVO arOperBasicInfoVO) throws Exception {
		return service.updateData(arOperBasicInfoVO);
	}

}
