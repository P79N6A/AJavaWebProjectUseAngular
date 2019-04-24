package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CstInfoPanelTableVO;
import com.boe.idm.project.model.mybatis.CstInfoPanelVO;
import com.boe.idm.project.service.CstInfoPanelService;

@RestController
@RequestMapping("/api")
public class CstInfoPanelController {

	@Autowired
	private CstInfoPanelService service;

	@RequestMapping(value = "/sc/cstinfopanel", method = RequestMethod.GET)
	public List<CstInfoPanelVO> getData(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getData();
	}

	@RequestMapping(value = "/sc/cstinfopanelQ", method = RequestMethod.GET)
	public List<CstInfoPanelVO> queryData(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("start") int start, @RequestParam("end") int end) throws Exception {
		return service.queryData(start, end);
	}

	@RequestMapping(value = "/sc/cstinfopanelT", method = RequestMethod.GET)
	public List<CstInfoPanelTableVO> getTableData(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("durablespecname") String durablespecname, @RequestParam("cstspec") String cstspec,
			@RequestParam("type") String type) throws Exception {
		return service.getTableData(durablespecname, cstspec, type);
	}

	@RequestMapping(value = "/sc/cstinfopanelQT", method = RequestMethod.GET)
	public List<CstInfoPanelTableVO> queryTableData(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("durablespecname") String durablespecname, @RequestParam("cstspec") String cstspec,
			@RequestParam("type") String type, @RequestParam("start") int start, @RequestParam("end") int end)
			throws Exception {
		return service.queryTableData(durablespecname, cstspec, type, start, end);
	}

}
