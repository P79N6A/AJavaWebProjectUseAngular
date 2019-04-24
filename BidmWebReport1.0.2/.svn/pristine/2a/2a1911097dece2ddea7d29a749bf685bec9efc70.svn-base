package com.boe.idm.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ArProDataSs1VO;
import com.boe.idm.project.model.mybatis.ArProDataSs2VO;
import com.boe.idm.project.model.mybatis.ArProDataSs3VO;
import com.boe.idm.project.model.mybatis.ArProDataSs4VO;
import com.boe.idm.project.model.mybatis.ArrayProDataZaohui3;
import com.boe.idm.project.service.ArProDataSsService;

@RestController
@RequestMapping("/api")
public class ArProDataSsController {

	@Autowired
	private ArProDataSsService service;

	@RequestMapping(value = "/sc/arprodata/ss1", method = RequestMethod.GET)
	public List<ArProDataSs1VO> getData1() throws Exception {
		return service.getData1();
	}

	@RequestMapping(value = "/sc/arprodata/ss2", method = RequestMethod.GET)
	public List<ArProDataSs2VO> getData2() throws Exception {
		return service.getData2();
	}

	@RequestMapping(value = "/sc/arprodata/ss3", method = RequestMethod.GET)
	public List<ArProDataSs3VO> getData3() throws Exception {
		return service.getData3();
	}

	@RequestMapping(value = "/sc/arprodata/ss4", method = RequestMethod.GET)
	public List<ArProDataSs4VO> getData4() throws Exception {
		return service.getData4();
	}

	@RequestMapping(value = "/sc/arprodata/ss5", method = RequestMethod.GET)
	public List<ArrayProDataZaohui3> getData5() throws Exception {
		return service.getData5();
	}

}
