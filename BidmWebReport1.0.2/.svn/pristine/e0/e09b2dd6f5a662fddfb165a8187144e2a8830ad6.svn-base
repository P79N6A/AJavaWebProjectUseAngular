package com.boe.idm.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ArBankCellInVO;
import com.boe.idm.project.service.ArBankCellInService;

@RestController
@RequestMapping("/api")
public class ArBankCellInController {

	@Autowired
	private ArBankCellInService service;

	@RequestMapping(value = "/sc/arrpt/bankcellin", method = RequestMethod.GET)
	public List<ArBankCellInVO> getData() throws Exception {
		return service.getData();
	}
}
