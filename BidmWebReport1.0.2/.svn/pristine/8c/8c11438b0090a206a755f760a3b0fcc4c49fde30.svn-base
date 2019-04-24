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

import com.boe.idm.project.model.mybatis.OeeAeInfoVO;
import com.boe.idm.project.model.mybatis.OeeAeTop5VO;
import com.boe.idm.project.service.OeeAeInfoService;

@RestController
@RequestMapping("/api")
public class OeeAeInfoController {

	@Autowired
	private OeeAeInfoService service;

	private Calendar c = Calendar.getInstance();

	@RequestMapping(value = "/sc/oeekanban/aeinfo", method = RequestMethod.GET)
	public List<OeeAeInfoVO> getData(HttpServletRequest request, HttpServletResponse response) throws Exception {

		int date = c.get(Calendar.DATE);
		int hour = c.get(Calendar.HOUR_OF_DAY);

		return service.getData(date, hour);
	}

	@RequestMapping(value = "/sc/oeekanban/aeinfoQ", method = RequestMethod.GET)
	public List<OeeAeInfoVO> queryData(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dateType") String dateType, @RequestParam(value = "dateValue") String dateValue)
			throws Exception {
		return service.queryData(dateType, dateValue);
	}

	@RequestMapping(value = "/sc/oeekanban/aetop5", method = RequestMethod.GET)
	public List<OeeAeTop5VO> getDataTop5(HttpServletRequest request, HttpServletResponse response) throws Exception {

		int date = c.get(Calendar.DATE);
		int hour = c.get(Calendar.HOUR_OF_DAY);

		return service.getDataTop5(date, hour);
	}

	@RequestMapping(value = "/sc/oeekanban/aetop5Q", method = RequestMethod.GET)
	public List<OeeAeTop5VO> queryDataTop5(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dateType") String dateType, @RequestParam(value = "dateValue") String dateValue)
			throws Exception {
		return service.queryDataTop5(dateType, dateValue);
	}

}
