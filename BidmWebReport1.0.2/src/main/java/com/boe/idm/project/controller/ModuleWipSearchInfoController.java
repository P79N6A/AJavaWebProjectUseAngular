package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ModuleWipCheckInCodeVO;
import com.boe.idm.project.model.mybatis.ModuleWipLineVO;
import com.boe.idm.project.model.mybatis.ModuleWipProductSizeVO;
import com.boe.idm.project.service.ModuleWipSearchInfoService;

@RestController
@RequestMapping("/api")
public class ModuleWipSearchInfoController {
	
	@Autowired
	private ModuleWipSearchInfoService service;
	
	@RequestMapping(value="/modulewip/checkincode",method = RequestMethod.GET )
	public List<ModuleWipCheckInCodeVO> getListC(HttpServletRequest request,
										HttpServletResponse response){
		return service.getListC();
	}

	@RequestMapping(value="/modulewip/line",method = RequestMethod.GET )
	public List<ModuleWipLineVO> getListL(HttpServletRequest request,
										HttpServletResponse response){
		return service.getListL();
	}
	
	@RequestMapping(value="/modulewip/productsizeM",method = RequestMethod.GET )
	public List<ModuleWipProductSizeVO> getListPM(HttpServletRequest request,
										HttpServletResponse response,
										@RequestParam(value="hourtimekey",required = true)String hourtimekey){
		return service.getlistPM(hourtimekey);
	}
	@RequestMapping(value="/modulewip/productsizeS",method = RequestMethod.GET )
	public List<ModuleWipProductSizeVO> getListPS(HttpServletRequest request,
										HttpServletResponse response,
										@RequestParam(value="hourtimekey",required = true)String hourtimekey){
		return service.getlistPS(hourtimekey);
	}

}
