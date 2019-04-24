package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ArrayMoveCurrentStationVO;
import com.boe.idm.project.service.ArrayMoveCurrentStationService;

@RestController
@RequestMapping("/api")
public class ArrayMoveCurrentStationController {

	@Autowired
	private ArrayMoveCurrentStationService service;

	@RequestMapping(value = "/array/movecurrentstation", method = RequestMethod.GET)
	public List<ArrayMoveCurrentStationVO> getList(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "operationdesc",required = true) String operationdesc) {

		return service.getList(operationdesc);
	}

}
