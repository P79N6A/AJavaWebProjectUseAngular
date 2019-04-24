package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CfMoveHourBasicinfoVO;
import com.boe.idm.project.model.mybatis.CfMoveHourVO;
import com.boe.idm.project.service.CfMoveHourService;

@RestController
@RequestMapping("/api")
public class CfMoveHourController {
	@Autowired
	private CfMoveHourService service;
	
	@RequestMapping(value="/cfmovehour",method=RequestMethod.GET)
	public List<CfMoveHourVO> queryObjectsByDatename(
			HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="datename",required=true) String datename,
			@RequestParam(value="productiontype",required=true) String productiontype){
		return service.queryObjectsByDatename(datename,productiontype);
	}
	
	/********下面是基础信息维护的方法*************/
	//2.查询所有的方法
	@RequestMapping(value="/cfmovehourbasicinfo/queryall",method=RequestMethod.GET)
	public List<CfMoveHourBasicinfoVO> queryAllObjects(
			HttpServletRequest request,HttpServletResponse response){
		return service.queryAllObjects();
	}

	//3.插入一个对象的方法
	@RequestMapping(value="/cfmovehourbasicinfo/insertone",method=RequestMethod.GET)
	public int insertone(
			HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="factory",required=true) String factory,
			@RequestParam(value="product",required=true) String product,
			@RequestParam(value="productname",required=true) String productname,
			@RequestParam(value="modeltype",required=true) String modeltype,
			@RequestParam(value="flag",required=true) String flag){
		CfMoveHourBasicinfoVO cfMoveHourBasicinfoVO = 
				new CfMoveHourBasicinfoVO(null, factory, product, productname, modeltype, flag, null);
		return service.insertOne(cfMoveHourBasicinfoVO);
	}
	
	//4.更新一个对象的方法
	@RequestMapping(value="/cfmovehourbasicinfo/updateone",method=RequestMethod.GET)
	public int updateone(
			HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="factory",required=true) String factory,
			@RequestParam(value="product",required=true) String product,
			@RequestParam(value="productname",required=true) String productname,
			@RequestParam(value="modeltype",required=true) String modeltype,
			@RequestParam(value="flag",required=true) String flag){
		CfMoveHourBasicinfoVO cfMoveHourBasicinfoVO = 
				new CfMoveHourBasicinfoVO(null, factory, product, productname, modeltype, flag, null);
		if (flag.equals("")) {
			cfMoveHourBasicinfoVO.setFlag(null);
		}
		return service.updateOne(cfMoveHourBasicinfoVO);
	}
	
	//5.删除一个对象的方法
	@RequestMapping(value="/cfmovehourbasicinfo/deleteone",method=RequestMethod.GET)
	public int deleteone(
			HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="factory",required=true) String factory,
			@RequestParam(value="product",required=true) String product,
			@RequestParam(value="productname",required=true) String productname,
			@RequestParam(value="modeltype",required=true) String modeltype,
			@RequestParam(value="flag",required=true) String flag){
		CfMoveHourBasicinfoVO cfMoveHourBasicinfoVO = 
				new CfMoveHourBasicinfoVO(null, factory, product, productname, modeltype, flag, null);
		if (flag.equals("")) {
			cfMoveHourBasicinfoVO.setFlag(null);
		}
		return service.deleteOne(cfMoveHourBasicinfoVO);
	}
}
