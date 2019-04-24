package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.SortBankBasicInfoVO;
import com.boe.idm.project.service.SortBankBasicInfoService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class SortBankBasicInfoController {

	@Autowired
	private SortBankBasicInfoService service;

	@RequestMapping(value = "/sc/sortBankBasicInfo/list", method = RequestMethod.GET)
	public List<SortBankBasicInfoVO> getData(HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		return service.getData();
	};

	@RequestMapping(value = "/sc/sortBankBasicInfo/delete", method = RequestMethod.DELETE)
	public int deleteData(HttpServletRequest request, HttpServletResponse response,
			@RequestBody SortBankBasicInfoVO sortBankBasicInfo) throws Exception {
		return service.deleteData(sortBankBasicInfo);
	}

	@RequestMapping(value = "/sc/sortBankBasicInfo/insert", method = RequestMethod.POST)
	public int insertData(HttpServletRequest request, HttpServletResponse response,
			@RequestBody SortBankBasicInfoVO sortBankBasicInfo) throws Exception {
		return service.insertData(sortBankBasicInfo);
	}

	@RequestMapping(value = "/sc/sortBankBasicInfo/update", method = RequestMethod.PUT)
	public int updateData(HttpServletRequest request, HttpServletResponse response,
			@RequestBody SortBankBasicInfoVO sortBankBasicInfo, @RequestParam(value = "deleteKey") String deleteKey)
			throws Exception {
		System.out.println(sortBankBasicInfo.getProductname());
		return service.updateData(sortBankBasicInfo, deleteKey);
	}

}
