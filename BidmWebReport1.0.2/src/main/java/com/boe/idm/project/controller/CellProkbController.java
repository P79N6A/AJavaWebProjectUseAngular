package com.boe.idm.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CellProkb1VO;
import com.boe.idm.project.model.mybatis.CellProkb2VO;
import com.boe.idm.project.model.mybatis.CellProkb3VO;
import com.boe.idm.project.model.mybatis.CellProkb4VO;
import com.boe.idm.project.service.CellProkbService;

@RestController
@RequestMapping("/api")
public class CellProkbController {

	@Autowired
	private CellProkbService service;

	@RequestMapping(value = "/sc/clprodata1", method = RequestMethod.GET)
	public List<CellProkb1VO> getData1() throws Exception {
		return service.getData1();
	}

	@RequestMapping(value = "/sc/clprodata2", method = RequestMethod.GET)
	public List<CellProkb2VO> getData2() throws Exception {
		return service.getData2();
	}

	@RequestMapping(value = "/sc/clprodata3", method = RequestMethod.GET)
	public List<CellProkb3VO> getData3() throws Exception {
		return service.getData3();
	}

	@RequestMapping(value = "/sc/clprodata4", method = RequestMethod.GET)
	public List<CellProkb4VO> getData4() throws Exception {
		return service.getData4();
	}

	@RequestMapping(value = "/sc/clprodata5", method = RequestMethod.GET)
	public List<CellProkb4VO> getData5() throws Exception {
		return service.getData5();
	}
}
