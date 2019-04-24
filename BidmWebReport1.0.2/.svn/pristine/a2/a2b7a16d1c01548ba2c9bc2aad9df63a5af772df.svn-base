package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CfMoveCurrentVO;
import com.boe.idm.project.service.CfMoveCurrentService;

@RestController
@RequestMapping("/api")
public class CfMoveCurrentController {

	@Autowired
	public CfMoveCurrentService service;

	@RequestMapping(value = "/cf/currentmove", method = RequestMethod.GET)
	public List<CfMoveCurrentVO> getList(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "starttime", required = true) String starttime,
			@RequestParam(value = "endtime", required = true) String endtime) {
		return service.getList(starttime, endtime);
	}

}
