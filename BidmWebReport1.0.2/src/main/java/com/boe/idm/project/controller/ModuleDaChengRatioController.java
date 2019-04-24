package com.boe.idm.project.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.KeyInRemarkVO;
import com.boe.idm.project.model.mybatis.ModuleDaChengRatioVO;
import com.boe.idm.project.model.mybatis.ModulePlanVO;
import com.boe.idm.project.service.ModuleDaChengRatioService;

@RestController
@RequestMapping("/api")
public class ModuleDaChengRatioController {

	@Autowired
	private ModuleDaChengRatioService service;
	
	//1.查询数据的操作
	@RequestMapping(value = "/module/dacheng", method = RequestMethod.GET)
	public List<ModuleDaChengRatioVO> getData(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.queryObjects();
	}
	
	//2.插入remark的操作
	@RequestMapping(value = "/module/dacheng/insertremark", method = RequestMethod.GET)
	public int insertRemark(HttpServletRequest request, HttpServletResponse response,
						@RequestParam(value="item",required=true) String item,
						@RequestParam(value="remark",required=true) String remark) throws Exception {
		return service.insertRemark(item, remark);
	}
	
	//3.查询remark的操作
	@RequestMapping(value = "/module/dacheng/queryremark", method = RequestMethod.GET)
	public List<KeyInRemarkVO> queryRemark(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.queryRemark();
	}
	
	//4.读取excel中的计划
	@RequestMapping(value = "/module/dacheng/readEscel", method = RequestMethod.GET)
	public List<ModulePlanVO> readExcel(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="path",required=true) String path) throws Exception {
		return service.readExcel(path);
	}
	
	//5.写计划
	@RequestMapping(value = "/module/dacheng/insertData", method = RequestMethod.PUT)
	public int insertPlan(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Map map) throws Exception {
		List<ModulePlanVO> list = (List<ModulePlanVO>) map.get("moduleplan");
		return service.insertPlan(list);
	}
}
