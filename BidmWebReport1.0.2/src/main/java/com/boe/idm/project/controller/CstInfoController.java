package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CstInfo4VO;
import com.boe.idm.project.model.mybatis.CstInfoEmptyVO;
import com.boe.idm.project.model.mybatis.CstInfoRatio;
import com.boe.idm.project.model.mybatis.CstInfoSecondVO;
import com.boe.idm.project.model.mybatis.CstInfoVO;
import com.boe.idm.project.model.mybatis.CstStockerInfoVO;
import com.boe.idm.project.service.CstInfoService;

@RestController
@RequestMapping("/api")
public class CstInfoController {

	@Autowired
	private CstInfoService service;
	
	@RequestMapping(value = "/sc/cstinfo", method = RequestMethod.GET)
	public List<CstInfoVO> getInit(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getInit();
	}

	@RequestMapping(value = "/sc/cstinfoempty", method = RequestMethod.GET)
	public List<CstInfoEmptyVO> getInit1(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getInit1();
	}

	@RequestMapping(value = "/sc/cststockereqpinfo", method = RequestMethod.GET)
	public List<CstStockerInfoVO> getInit2(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getInit2();
	}

	@RequestMapping(value = "/sc/cststockerinfo", method = RequestMethod.GET)
	public List<CstStockerInfoVO> getInit3(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getInit3();
	}

	@RequestMapping(value = "/sc/cstinfo4vo", method = RequestMethod.GET)
	public List<CstInfo4VO> getInit4(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getInit4();
	}

	@RequestMapping(value = "/sc/querycstinfo", method = RequestMethod.GET)
	public List<CstInfoRatio> getQuery1(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "start", required = true) int start,
			@RequestParam(value = "end", required = true) int end) throws Exception {
		return service.getQuery1(start, end);
	}

	@RequestMapping(value = "/sc/queryempty", method = RequestMethod.GET)
	public List<CstInfoEmptyVO> getQuery2(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "start", required = true) int start,
			@RequestParam(value = "end", required = true) int end) throws Exception {
		return service.getQuery2(start, end);
	}

	@RequestMapping(value = "/sc/cstinfosecond", method = RequestMethod.GET)
	public List<CstInfoSecondVO> toSecond1(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "cst_spec", required = true) String cst_spec,
			@RequestParam(value = "factory", required = true) String factory,
			@RequestParam(value = "type", required = true) String type,
			@RequestParam(value = "productiontypes", required = true) String[] productiontypes) throws Exception {
		return service.toSecond1(cst_spec, factory, type, productiontypes);
	}

	@RequestMapping(value = "/sc/cstinfosecondQ", method = RequestMethod.GET)
	public List<CstInfoSecondVO> toSecond2(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "cst_spec", required = true) String cst_spec,
			@RequestParam(value = "factory", required = true) String factory,
			@RequestParam(value = "type", required = true) String type,
			@RequestParam(value = "productiontypes", required = true) String[] productiontypes,
			@RequestParam(value = "start", required = true) int start,
			@RequestParam(value = "end", required = true) int end) throws Exception {
		return service.toSecond2(cst_spec, factory, type, productiontypes, start, end);
	}

	@RequestMapping(value = "/sc/cstemptydirty", method = RequestMethod.GET)
	public List<CstInfoSecondVO> toSecond3(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "cst_spec", required = true) String cst_spec) throws Exception {
		return service.toSecond3(cst_spec);
	}

	@RequestMapping(value = "/sc/cstemptyclean", method = RequestMethod.GET)
	public List<CstInfoSecondVO> toSecond4(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "cst_spec", required = true) String cst_spec,
			@RequestParam(value = "transferstate", required = true) String transferstate) throws Exception {
		return service.toSecond4(cst_spec, transferstate);
	}

	@RequestMapping(value = "/sc/cstemptydirtyQ", method = RequestMethod.GET)
	public List<CstInfoSecondVO> toSecond5(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "cst_spec", required = true) String cst_spec,
			@RequestParam(value = "start", required = true) int start,
			@RequestParam(value = "end", required = true) int end) throws Exception {
		return service.toSecond5(cst_spec, start, end);
	}

	@RequestMapping(value = "/sc/cstemptycleanQ", method = RequestMethod.GET)
	public List<CstInfoSecondVO> toSecond6(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "cst_spec", required = true) String cst_spec,
			@RequestParam(value = "transferstate", required = true) String transferstate,
			@RequestParam(value = "start", required = true) int start,
			@RequestParam(value = "end", required = true) int end) throws Exception {
		return service.toSecond6(cst_spec, transferstate, start, end);
	}
}
