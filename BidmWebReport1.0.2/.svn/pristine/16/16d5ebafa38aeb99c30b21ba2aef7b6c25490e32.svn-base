package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ModuleLegendVO;
import com.boe.idm.project.service.ModuleLegendService;

@RestController
@RequestMapping("/api")
public class ModuleLegendController {
	
	@Autowired
	private ModuleLegendService service;
	
	@RequestMapping(value="/module/legend",method = RequestMethod.GET )
	public List<ModuleLegendVO> getList(HttpServletRequest request,
										HttpServletResponse response,
										@RequestParam(value="factoryname",required=true) String factoryname){
		System.out.println(factoryname);
		return service.getList(factoryname);
	}

}
