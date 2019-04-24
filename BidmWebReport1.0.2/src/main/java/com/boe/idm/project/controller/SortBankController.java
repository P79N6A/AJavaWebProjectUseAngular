package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.SortBankTftCfVO;
import com.boe.idm.project.model.mybatis.SortBankVO;
import com.boe.idm.project.service.SortBankService;

@RestController
@RequestMapping("/api")
public class SortBankController {

	@Autowired
	private SortBankService service;

	@RequestMapping(value = "/sc/sortbank", method = RequestMethod.GET)
	public List<SortBankVO> getData(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "timekey") String timekey) throws Exception {
		return service.getData(timekey);
	};
	
	@RequestMapping(value = "/sc/sortbank/sum", method = RequestMethod.GET)
	public List<SortBankTftCfVO> getSumData(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "timekey") String timekey) throws Exception {
		return service.getSumData(timekey);
	};

}
