package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.KeyinArProDataZVO;
import com.boe.idm.project.service.KeyinArrayProDataZService;

@RestController
@RequestMapping("/api")
public class KeyinArProDataZController {

	@Autowired
	private KeyinArrayProDataZService service;

	@RequestMapping(value = "/sc/keyinremarkProDataZ", method = RequestMethod.POST)
	public int insert(HttpServletRequest request, HttpServletResponse response,
			@RequestBody KeyinArProDataZVO newRemark) throws Exception {
		return service.insert(newRemark);
	}

	@RequestMapping(value = "/sc/keyinArProDataZ", method = RequestMethod.GET)
	public List<KeyinArProDataZVO> getData(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("report") String report) throws Exception {
		return service.getData(report);

	}

}
