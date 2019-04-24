package com.boe.idm.project.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.Monitor8VO;
import com.boe.idm.project.model.mybatis.SpecVO;
import com.boe.idm.project.service.Monitor8Service;
import com.boe.idm.project.service.SpecService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class Monitor8VOConrtoller {
	
	Logger log = LoggerFactory.getLogger(SpecController.class);
	
	@Autowired
	private Monitor8Service monitor8Service;
	
	// 根据筛选条件进行查询数据的操作
	@RequestMapping(value="/Monitor8/searchPlan", method = RequestMethod.GET)
	public List<Monitor8VO> queryForList(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="factoryname",required=true) String factoryname,
			@RequestParam(value="datestr",required=true) String datestr
			) throws Exception{
		//System.out.println(factoryname+" : "+datestr);
		return monitor8Service.queryForList(factoryname, datestr);
	}
	

	@RequestMapping(value="/alarmspec/update1",method = RequestMethod.PUT)
	public int specUpdate(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody Monitor8VO monitor8vo
			)throws Exception{
		return monitor8Service.specUpdate(monitor8vo);
	}
	
	@RequestMapping(value="/alarmspec/delete1",method = RequestMethod.DELETE)
	public int specDelete(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody List<Monitor8VO> monitor8voList
			)throws Exception{
		return monitor8Service.specDelete(monitor8voList);
	}
	
	@RequestMapping(value="/alarmspec/insert1",method =RequestMethod.POST)
	public Monitor8VO specInsert(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody Monitor8VO monitor8vo
			)throws Exception{
		 Monitor8VO  rslt = new  Monitor8VO();
		 monitor8Service.specInsert(monitor8vo);
		return rslt;
	}
	
	//下面的这个方法，先暂时不要实现， 我也不知道这是要干什么
//	@RequestMapping(value="/alarm/list", method = RequestMethod.GET)
//	public List<LinkedHashMap<String, Object>> alarmList(
//			HttpServletRequest request, 
//			HttpServletResponse response,
//			@RequestParam(value="productid",required=true) String productid,
//			@RequestParam(value="stepid",required=true) String stepid,
//			@RequestParam(value="defectname",required=true) String defectname)
//					throws Exception {
//		Map<String, Object> paraMap = new HashMap<String, Object>();
//		paraMap.put("productid",productid);
//		paraMap.put("stepid",stepid);
//		paraMap.put("defectname",defectname);
//		
//		List<LinkedHashMap<String, Object>> Lastlist = new ArrayList<LinkedHashMap<String, Object>>();
//		List<LinkedHashMap<String, Object>> Newlist = specService.alarmList(paraMap);
//
//		
////		System.out.println(Newlist.get(0));
////		System.out.println(Newlist.get(1));
//		for(int i = 0; i < Newlist.size(); i++) {
//			LinkedHashMap<String, Object>	map = new LinkedHashMap<String, Object>();
//			map.put("key",Lastlist.size() + 1);
//			map.put("caculatetime",Newlist.get(i).get("CACULATETIME"));
//			map.put("specvalue1",Newlist.get(i).get("SPECVALUE1"));
//			map.put("specvalue2",Newlist.get(i).get("SPECVALUE2"));
//			map.put("actvalue",Newlist.get(i).get("ACTVALUE"));
//			Lastlist.add(map);
//		}
//		
//		return Lastlist;
//		
//}
//	@RequestMapping(value="/alarm/fresh", method = RequestMethod.GET)
//	public List<LinkedHashMap<String, Object>> alarmFreshList(
//			HttpServletRequest request, 
//			HttpServletResponse response,
//			@RequestParam(value="productid",required=true) String productid,
//			@RequestParam(value="stepid",required=true) String stepid,
//			@RequestParam(value="defectname",required=true) String defectname)
//					throws Exception {
//		Map<String, Object> paraMap = new HashMap<String, Object>();
//		paraMap.put("productid",productid);
//		paraMap.put("stepid",stepid);
//		paraMap.put("defectname",defectname);
//		
//		List<LinkedHashMap<String, Object>> Lastlist = new ArrayList<LinkedHashMap<String, Object>>();
//		List<LinkedHashMap<String, Object>> Newlist = specService.alarmList(paraMap);
//		List<LinkedHashMap<String, Object>> Addlist = specService.alarmFreshList(paraMap);
//				
////		System.out.println(Newlist.get(0));
////		System.out.println(Newlist.get(1));
//		for(int i = 0; i < Newlist.size(); i++) {
//			LinkedHashMap<String, Object>	map = new LinkedHashMap<String, Object>();
//			map.put("key",Lastlist.size() + 1);
//			map.put("caculatetime",Newlist.get(i).get("CACULATETIME"));
//			map.put("specvalue1",Newlist.get(i).get("SPECVALUE1"));
//			map.put("specvalue2",Newlist.get(i).get("SPECVALUE2"));
//			map.put("actvalue",Newlist.get(i).get("ACTVALUE"));
//			Lastlist.add(map);
//		}
//		System.out.println(Lastlist.size());
//		LinkedHashMap<String, Object>	map2 = new LinkedHashMap<String, Object>();
//		map2.put("key",Lastlist.size() + 1);
//		map2.put("caculatetime",Addlist.get(0).get("CACULATETIME"));
//		map2.put("specvalue1",Addlist.get(0).get("SPECVALUE1"));
//		map2.put("specvalue2",Addlist.get(0).get("SPECVALUE2"));
//		map2.put("actvalue",Addlist.get(0).get("ACTVALUE"));
//		Lastlist.add(map2);
//		
//		return Lastlist;
//	
//}
	//这个是把数据写入到数据库中的操作
	@RequestMapping(value="/monitor8/excelImport1",method =RequestMethod.PUT)
	public int excelInsert(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody Map map
			)throws Exception{
		List<Monitor8VO> monitor8voList = (List<Monitor8VO>) map.get("monitor8VOList");
		//输出一下这个接受到的数据，看是不是对不对
//		for (int i = 0; i <monitor8voList.size(); i++) {
//			System.out.println(monitor8voList.get(i));
//		}
		
		return monitor8Service.insert_ExcelImport(monitor8voList);
	}

	//这个方法是用来上传文件的 : 文件名和 文件路径作为参数，自己写的
	@RequestMapping(value="/alarmspec/excelUpload1",method =RequestMethod.GET)
	public List<Monitor8VO> handleExcelUpload(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="localPath",required=true) String localPath
			)throws Exception{	
		System.out.println(" ==> localPath : "+localPath);
		return monitor8Service.specInsert_excel_path(localPath);
	}
//	@RequestMapping(value="/alarmspec/excelUpload",method =RequestMethod.GET)
//	public List<SpecVO> handleExcelUpload(
//			HttpServletRequest request, 
//			HttpServletResponse response,
//			@RequestParam(value="fileName",required=true) String fileName
//			)throws Exception{	
//		return specService.specInsert_excel(fileName);
//	}
	
	
	
	

}
