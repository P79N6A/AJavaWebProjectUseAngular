package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ModuleS2WorkWipVO;
import com.boe.idm.project.service.ModuleS2WorkWipService;

@RestController
@RequestMapping("/api")
public class ModuleS2WorkWipController {
	
	
	@Autowired
	private ModuleS2WorkWipService service;
	
	@RequestMapping(value="/modules2/workwip",method = RequestMethod.GET)
	public List<ModuleS2WorkWipVO> getList(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="starttime",required=true) String starttime,
			@RequestParam(value="endtime",required=true) String endtime,
			@RequestParam(value="butypes",required=true) String[] butypes,
			@RequestParam(value="workgroup",required=true) String[] workgroup,
			@RequestParam(value="lottypes",required=true) String[] lottypes,
			@RequestParam(value="workstates",required=true) String[] workstates,
			@RequestParam(value="factoryname",required=true) String factoryname){
	
		return service.getList(starttime, endtime, butypes, workgroup, lottypes, workstates,factoryname);
	}

}
