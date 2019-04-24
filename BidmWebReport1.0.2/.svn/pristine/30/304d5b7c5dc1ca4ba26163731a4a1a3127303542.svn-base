package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ArrayProDataZaohui1;
import com.boe.idm.project.model.mybatis.ArrayProDataZaohui2;
import com.boe.idm.project.model.mybatis.ArrayProDataZaohui3;
import com.boe.idm.project.model.mybatis.ArrayProDataZaohui4;
import com.boe.idm.project.service.ArrayProDataZaohuiService;

@RestController
@RequestMapping("/api")
public class ArrayProDataZaohuiController {

	@Autowired
	private ArrayProDataZaohuiService service;

	@RequestMapping(value = "/sc/arrayprodata/zaohui1", method = RequestMethod.GET)
	public List<ArrayProDataZaohui1> getData1(HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		return service.getData1();
	}

	@RequestMapping(value = "/sc/arrayprodata/zaohui2", method = RequestMethod.GET)
	public List<ArrayProDataZaohui2> getData2(HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		return service.getData2();
	}

	@RequestMapping(value = "/sc/arrayprodata/zaohui3", method = RequestMethod.GET)
	public List<ArrayProDataZaohui3> getData3(HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		return service.getData3();
	}

	@RequestMapping(value = "/sc/arrayprodata/zaohui4", method = RequestMethod.GET)
	public List<ArrayProDataZaohui4> getData4(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "type") String type) throws Exception {
		return service.getData4(type);
	}

}
