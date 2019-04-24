package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ModuleWipFirstVO;
import com.boe.idm.project.service.ModuleWipFirstService;

@RestController
@RequestMapping("/api")
public class ModuleWipFirstController {
	
	@Autowired
	private ModuleWipFirstService service;
	
	@RequestMapping(value="/module/wipfirst",method=RequestMethod.GET)
	public List<ModuleWipFirstVO> getList(HttpServletRequest request,HttpServletResponse response,
									@RequestParam(value="types",required=true) String [] types){
		return service.getList(types);
	}
	
	@RequestMapping(value="/module/wipfirstproduct",method=RequestMethod.GET)
	public List<ModuleWipFirstVO> getListProduct(HttpServletRequest request,HttpServletResponse response,
									@RequestParam(value="types",required=true) String [] types,
									@RequestParam(value="productseizes",required=true) String [] productseizes,
									@RequestParam(value="checkincodes",required=true) String [] checkincodes,
									@RequestParam(value="lottypes",required=true) String [] lottypes){
		return service.getListProduct(types, productseizes,checkincodes,lottypes);
	}
	
	@RequestMapping(value="/module/wipfirstS2",method=RequestMethod.GET)
	public List<ModuleWipFirstVO> getListS2(HttpServletRequest request,HttpServletResponse response,
									@RequestParam(value="types",required=true) String [] types){
		return service.getListS2(types);
	}
	
	@RequestMapping(value="/module/wipfirstproductS2",method=RequestMethod.GET)
	public List<ModuleWipFirstVO> getListProductS2(HttpServletRequest request,HttpServletResponse response,
									@RequestParam(value="types",required=true) String [] types,
									@RequestParam(value="productseizes",required=true) String [] productseizes,
									@RequestParam(value="checkincodes",required=true) String [] checkincodes,
									@RequestParam(value="lottypes",required=true) String [] lottypes){
		return service.getListProductS2(types, productseizes,checkincodes,lottypes);
	}
}
