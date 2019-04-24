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

import com.boe.idm.project.model.mybatis.CfWipMoveBasicinfoVO;
import com.boe.idm.project.model.mybatis.CfWipMoveMoveVO;
import com.boe.idm.project.model.mybatis.CfWipMovePlanVO;
import com.boe.idm.project.model.mybatis.CfWipMoveVO;
import com.boe.idm.project.model.mybatis.CfWipMoveWipVO;
import com.boe.idm.project.service.CfWipMoveService;

@RestController
@RequestMapping("/api")
public class CfWipMoveController {
	
	@Autowired
	private CfWipMoveService service;
	
	
	//1.
	@RequestMapping(value="/cfwipmove/firstpart",method=RequestMethod.GET)
	public List<CfWipMoveVO> queryNumbers(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="timedate",required=true) String timedate,
			@RequestParam(value="timehour",required=true) String timehour){
		 return service.queryNumbers(timedate,timehour);
	}
	
	//2.wip部分的数据
	@RequestMapping(value="/cfwipmove/wippart",method=RequestMethod.GET)
	public List<CfWipMoveWipVO> queryWipNumbers(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="timehour",required=true) String timehour){
		 return service.queryWipNumbers(timehour);
	}
	
	//3.move部分的数据
	@RequestMapping(value="/cfwipmove/movepart",method=RequestMethod.GET)
	public List<CfWipMoveMoveVO> queryMoveNumbers(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="timehour",required=true) String timehour){
		 return service.queryMoveNumbers(timehour);
	}
	
	
	/**********下面是 关于基础信息维护的方法*****************************/
	//4.查询所有的数据
	@RequestMapping(value="/cfwipmove/querybasicinfo",method=RequestMethod.GET)
	public List<CfWipMoveBasicinfoVO> queryAllBasicinfo(HttpServletRequest request,
			HttpServletResponse response){
		return service.queryAllBasicinfo();
	}
	
	//5.插入一个对象
	@RequestMapping(value="/cfwipmove/insertone",method=RequestMethod.GET)
	public int insertOne(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="factory",required=true) String factory,
			@RequestParam(value="productspecname",required=true) String productspecname,
			@RequestParam(value="line",required=true) String line){
		CfWipMoveBasicinfoVO cfWipMoveBasicinfoVO = new CfWipMoveBasicinfoVO(null, factory, productspecname, line);
		return service.insertOne(cfWipMoveBasicinfoVO);
	}
	
	//6.更新一个对象
	@RequestMapping(value="/cfwipmove/updateone",method=RequestMethod.GET)
	public int updateOne(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="factorynew",required=true) String factorynew,
			@RequestParam(value="productspecnamenew",required=true) String productspecnamenew,
			@RequestParam(value="linenew",required=true) String linenew,
			@RequestParam(value="factoryold",required=true) String factoryold,
			@RequestParam(value="productspecnameold",required=true) String productspecnameold,
			@RequestParam(value="lineold",required=true) String lineold){
		return service.updateOne(factorynew, productspecnamenew, linenew, factoryold, productspecnameold, lineold);
	}
	
	//7.删除一个对象
	@RequestMapping(value="/cfwipmove/deleteone",method=RequestMethod.GET)
	public int deleteOne(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="factory",required=true) String factory,
			@RequestParam(value="productspecname",required=true) String productspecname,
			@RequestParam(value="line",required=true) String line){
		CfWipMoveBasicinfoVO cfWipMoveBasicinfoVO = new CfWipMoveBasicinfoVO(null, factory, productspecname, line);
		return service.deleteOne(cfWipMoveBasicinfoVO);
	}
	
	/***********************下面是 move 计划的倒入 excel表格的 实现方法
	 * @throws Exception ****************************/
	//8.倒入 excel 表中的计划
	
	@RequestMapping(value="/importplancfmove/excelUpload",method=RequestMethod.GET)
	public List<CfWipMovePlanVO> excelUpload(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="localPath",required=true) String filePath) throws Exception{
		return service.readExcel(filePath);
	}
	
	//9.写入 数据库中的操作
	@RequestMapping(value="/importplancfmove/excelImport",method=RequestMethod.PUT)
	public int excelImport(HttpServletRequest request,
			HttpServletResponse response,
			@RequestBody Map map) throws Exception{
		List<CfWipMovePlanVO> list = (List<CfWipMovePlanVO>) map.get("cfmoveplan");
		return service.insertPlanOne(list);
	}
	
	//10.读取数据库中的操作
		@RequestMapping(value="/importplancfmove/getplan",method=RequestMethod.GET)
		public List<CfWipMovePlanVO> getPlan(HttpServletRequest request,
				HttpServletResponse response,
				@RequestParam(value="hourtimekey",required=true) String hourtimekey) throws Exception{
				//System.out.println(hourtimekey);
				hourtimekey = hourtimekey.substring(0, 8);
				//System.out.println(hourtimekey);
			return service.queryPlanByHourtimekey(hourtimekey);
		}
	

}
