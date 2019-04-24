package com.boe.idm.project.controller;

import java.util.Calendar;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CfMoveMonthRptVO;
import com.boe.idm.project.service.CfMoveMonthRptService;

@RestController
@RequestMapping("/api")
public class CfMoveMonthRptController {

	@Autowired
	private CfMoveMonthRptService service;

	@RequestMapping(value = "/sc/cfreport/movemonth", method = RequestMethod.GET)
	public List<CfMoveMonthRptVO> getData(HttpServletRequest request, HttpServletResponse response) throws Exception {

		Calendar c = Calendar.getInstance();
		int date = c.get(Calendar.DATE);
		int hour = c.get(Calendar.HOUR_OF_DAY);

		return service.getData(date, hour);
	}

	@RequestMapping(value = "/sc/cfreport/movemonthQ", method = RequestMethod.GET)
	public List<CfMoveMonthRptVO> queryData(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "datename", required = true) String datename) throws Exception {
		return service.queryData(datename);
	}

}
