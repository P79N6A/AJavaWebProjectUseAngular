package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.GsKanbanEchartVO;
import com.boe.idm.project.service.GsKanbanEchartService;

@RestController
@RequestMapping("/api")
public class GsKanbanEchartController {

	@Autowired
	private GsKanbanEchartService service;

	@RequestMapping(value = "/sc/gskanbanechart", method = RequestMethod.GET)
	public List<GsKanbanEchartVO> getEchart(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getEchart();
	}

}
