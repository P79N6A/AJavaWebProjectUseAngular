package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CellProkb3VO;
import com.boe.idm.project.model.mybatis.CfProCellInVO;
import com.boe.idm.project.model.mybatis.CfProFcwCstVO;
import com.boe.idm.project.model.mybatis.CfProPlanVO;
import com.boe.idm.project.model.mybatis.CfProStkRtoVO;
import com.boe.idm.project.model.mybatis.CfProWipMoveVO;
import com.boe.idm.project.model.mybatis.CfProkbTouruVO;
import com.boe.idm.project.service.CfProDatakbService;

@RestController
@RequestMapping("/api")
public class CfProDatakbController {

	@Autowired
	private CfProDatakbService service;

	@RequestMapping(value = "/sc/cfkanban/proplan", method = RequestMethod.GET)
	public List<CfProPlanVO> getData1(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getData1();
	}

	@RequestMapping(value = "/sc/cfkanban/protouru", method = RequestMethod.GET)
	public List<CfProkbTouruVO> getData2(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getData2();
	}

	@RequestMapping(value = "/sc/cfkanban/fcwcst", method = RequestMethod.GET)
	public List<CfProFcwCstVO> getData3(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getData3();
	}

	@RequestMapping(value = "/sc/cfkanban/stkrto", method = RequestMethod.GET)
	public List<CfProStkRtoVO> getData4(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getData4();
	}

	@RequestMapping(value = "/sc/cfkanban/wipmove", method = RequestMethod.GET)
	public List<CfProWipMoveVO> getData5(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getData5();
	}

	@RequestMapping(value = "/sc/cfkanban/cellin", method = RequestMethod.GET)
	public List<CfProCellInVO> getData6(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getData6();
	}

	@RequestMapping(value = "/sc/cfkanban/bank", method = RequestMethod.GET)
	public List<CellProkb3VO> getData7(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getData7();
	}
}
