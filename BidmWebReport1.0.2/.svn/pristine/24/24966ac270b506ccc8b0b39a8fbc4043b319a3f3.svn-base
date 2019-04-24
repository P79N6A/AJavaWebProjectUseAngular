package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CfWipHourVO;
import com.boe.idm.project.service.CfWipHourService;

@RestController
@RequestMapping("/api")
public class CfWipHourController {
	@Autowired
	private CfWipHourService service;
	
	@RequestMapping(value="/cfwiphour",method=RequestMethod.GET)
	public List<CfWipHourVO> queryObjectsByHourtimekey(
			HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="hourtimekey",required=true) String hourtimekey,
			@RequestParam(value="productiontype",required=true) String productiontype){
		return service.queryAllData(hourtimekey,productiontype);
	}
	

}
