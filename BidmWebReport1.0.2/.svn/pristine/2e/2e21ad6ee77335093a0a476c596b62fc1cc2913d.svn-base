package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.HourMonitorVO;
import com.boe.idm.project.service.HourMonitorService;

@RestController
@RequestMapping("/api")
public class HourMonitorController {

	@Autowired
	private HourMonitorService service;

	@RequestMapping(value = "/sc/hourmonitor", method = RequestMethod.GET)
	public List<HourMonitorVO> getToday(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dayControl", required = true) String dayControl) throws Exception {
		return service.getToday(dayControl);
	};
	
	@RequestMapping(value = "/sc/hourmonitorOneday", method = RequestMethod.GET)
	public List<HourMonitorVO> getOneday(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dateValue", required = true) String dateValue) throws Exception {
		return service.getOneday(dateValue);
	};

}
