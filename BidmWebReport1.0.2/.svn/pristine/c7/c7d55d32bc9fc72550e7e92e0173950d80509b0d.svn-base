package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ArMoveRptSsVO;
import com.boe.idm.project.model.mybatis.KeyInRemarkVO;
import com.boe.idm.project.model.mybatis.KeyinArMoveSsVO;
import com.boe.idm.project.service.ArMoveRptSsService;

@RestController
@RequestMapping("/api")
public class ArMoveRptSsController {

	@Autowired
	private ArMoveRptSsService service;

	@RequestMapping(value = "/sc/arrayrpt/movess", method = RequestMethod.GET)
	public List<ArMoveRptSsVO> getData(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getData();
	}

	@RequestMapping(value = "/sc/keyin/armovess", method = RequestMethod.POST)
	public int keyinComment(HttpServletRequest request, HttpServletResponse response,
			@RequestBody KeyinArMoveSsVO keyinArMoveSsVO) throws Exception {
		return service.keyinComment(keyinArMoveSsVO);
	}

	@RequestMapping(value = "/sc/keyin/getcomment", method = RequestMethod.GET)
	public List<KeyInRemarkVO> getComment(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getComment();
	}

}
