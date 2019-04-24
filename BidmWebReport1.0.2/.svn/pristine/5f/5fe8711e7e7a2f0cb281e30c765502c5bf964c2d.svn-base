package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ModuleWipVO;
import com.boe.idm.project.service.ModuleWipService;

@RestController
@RequestMapping("/api")
public class ModuleWipController {
	
	@Autowired
	private ModuleWipService service;
	// 下面的这个是个测试的
	@RequestMapping(value="/module/wip2",method=RequestMethod.GET)
	public List<ModuleWipVO> getModuleList(HttpServletRequest request,HttpServletResponse response) {
		String hourtimekey = "2019010813";
		String [] lines = {"LINE01"};
		String [] checkincodes = {"M28"};
		String [] productsizes = {"23.6"};
		String [] producttypes = {"COF"};
		
		System.out.println("modulewip的参数 ： "+hourtimekey.toString()+" ; "+lines.toString()+" ;\n"+checkincodes+" ;\n"+productsizes);
		return service.getS2List(hourtimekey, lines, checkincodes, productsizes,producttypes);
	}
	
	@RequestMapping(value="/module/wip",method=RequestMethod.GET)
	public List<ModuleWipVO> getModuleList(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="hourtimekey",required = true) String hourtimekey,
			@RequestParam(value="lines",required = true) String[] lines,
			@RequestParam(value="checkincodes",required = true)String[] checkincodes,
			@RequestParam(value="productsizes",required = true) String[] productsizes) {
		System.out.println("modulewip的参数 ： "+hourtimekey+" ; "+lines+" ;\n"+checkincodes+" ;\n"+productsizes);
		return service.getModuleList(hourtimekey, lines, checkincodes, productsizes);
	}
	@RequestMapping(value="/S2/wip",method=RequestMethod.GET)
	public List<ModuleWipVO> getS2List(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="hourtimekey",required = true) String hourtimekey,
			@RequestParam(value="lines",required = true) String[] lines,
			@RequestParam(value="checkincodes",required = true)String[] checkincodes,
			@RequestParam(value="productsizes",required = true) String[] productsizes,
			@RequestParam(value="producttypes",required = true) String[] producttypes){
		System.out.println("modulewip的参数 ： "+hourtimekey+" ;\n"+lines.toString()+" ;\n"+checkincodes+" ;\n"+productsizes+" ;\n"+producttypes);
		return service.getS2List(hourtimekey, lines, checkincodes, productsizes, producttypes);
	}

}
