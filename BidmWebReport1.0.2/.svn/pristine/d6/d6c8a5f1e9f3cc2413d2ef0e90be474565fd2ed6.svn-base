package com.boe.idm.project.controller;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.SpecVO;
import com.boe.idm.project.service.SpecService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class SpecController {
	Logger log = LoggerFactory.getLogger(SpecController.class);
	
	@Autowired
	private SpecService specService;
	
	@RequestMapping(value="/alarmspec/list", method = RequestMethod.GET)
	public List<SpecVO> specList(
			HttpServletRequest request, 
			HttpServletResponse response
			) throws Exception{
		return specService.specList();
	}
	

	@RequestMapping(value="/alarmspec/update",method = RequestMethod.PUT)
	public int specUpdate(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody SpecVO specVO
			)throws Exception{
		return specService.specUpdate(specVO);
	}
	
	@RequestMapping(value="/alarmspec/delete",method = RequestMethod.DELETE)
	public int specDelete(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody List<SpecVO> specVOList
			)throws Exception{
		return specService.specDelete(specVOList);
	}
	
	@RequestMapping(value="/alarmspec/insert",method =RequestMethod.POST)
	public SpecVO specInsert(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody SpecVO specVO
			)throws Exception{
		SpecVO rslt = new SpecVO();
		specService.specInsert(specVO);
		return rslt;
	}
	
	@RequestMapping(value="/alarm/list", method = RequestMethod.GET)
	public List<LinkedHashMap<String, Object>> alarmList(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="productid",required=true) String productid,
			@RequestParam(value="stepid",required=true) String stepid,
			@RequestParam(value="defectname",required=true) String defectname)
					throws Exception {
		Map<String, Object> paraMap = new HashMap<String, Object>();
		paraMap.put("productid",productid);
		paraMap.put("stepid",stepid);
		paraMap.put("defectname",defectname);
		
		List<LinkedHashMap<String, Object>> Lastlist = new ArrayList<LinkedHashMap<String, Object>>();
		List<LinkedHashMap<String, Object>> Newlist = specService.alarmList(paraMap);

		
//		System.out.println(Newlist.get(0));
//		System.out.println(Newlist.get(1));
		for(int i = 0; i < Newlist.size(); i++) {
			LinkedHashMap<String, Object>	map = new LinkedHashMap<String, Object>();
			map.put("key",Lastlist.size() + 1);
			map.put("caculatetime",Newlist.get(i).get("CACULATETIME"));
			map.put("specvalue1",Newlist.get(i).get("SPECVALUE1"));
			map.put("specvalue2",Newlist.get(i).get("SPECVALUE2"));
			map.put("actvalue",Newlist.get(i).get("ACTVALUE"));
			Lastlist.add(map);
		}
		
		return Lastlist;
		
}
	@RequestMapping(value="/alarm/fresh", method = RequestMethod.GET)
	public List<LinkedHashMap<String, Object>> alarmFreshList(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="productid",required=true) String productid,
			@RequestParam(value="stepid",required=true) String stepid,
			@RequestParam(value="defectname",required=true) String defectname)
					throws Exception {
		Map<String, Object> paraMap = new HashMap<String, Object>();
		paraMap.put("productid",productid);
		paraMap.put("stepid",stepid);
		paraMap.put("defectname",defectname);
		
		List<LinkedHashMap<String, Object>> Lastlist = new ArrayList<LinkedHashMap<String, Object>>();
		List<LinkedHashMap<String, Object>> Newlist = specService.alarmList(paraMap);
		List<LinkedHashMap<String, Object>> Addlist = specService.alarmFreshList(paraMap);
				
//		System.out.println(Newlist.get(0));
//		System.out.println(Newlist.get(1));
		for(int i = 0; i < Newlist.size(); i++) {
			LinkedHashMap<String, Object>	map = new LinkedHashMap<String, Object>();
			map.put("key",Lastlist.size() + 1);
			map.put("caculatetime",Newlist.get(i).get("CACULATETIME"));
			map.put("specvalue1",Newlist.get(i).get("SPECVALUE1"));
			map.put("specvalue2",Newlist.get(i).get("SPECVALUE2"));
			map.put("actvalue",Newlist.get(i).get("ACTVALUE"));
			Lastlist.add(map);
		}
		System.out.println(Lastlist.size());
		LinkedHashMap<String, Object>	map2 = new LinkedHashMap<String, Object>();
		map2.put("key",Lastlist.size() + 1);
		map2.put("caculatetime",Addlist.get(0).get("CACULATETIME"));
		map2.put("specvalue1",Addlist.get(0).get("SPECVALUE1"));
		map2.put("specvalue2",Addlist.get(0).get("SPECVALUE2"));
		map2.put("actvalue",Addlist.get(0).get("ACTVALUE"));
		Lastlist.add(map2);
		
		return Lastlist;
	
}
	//这个是把数据写入到数据库中的操作
	@RequestMapping(value="/alarmspec/excelImport",method =RequestMethod.PUT)
	public int excelInsert(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody Map map
			)throws Exception{
		List<SpecVO> specVOList = (List<SpecVO>) map.get("specVOList");
		//输出一下这个接受到的数据，看是不是对不对
		for (int i = 0; i <specVOList.size(); i++) {
			System.out.println(specVOList.get(i));
		}
		
		return specService.insert_ExcelImport(specVOList);
	}

	//这个方法是用来上传文件的 : 文件名和 文件路径作为参数，自己写的
	@RequestMapping(value="/alarmspec/excelUpload",method =RequestMethod.GET)
	public List<SpecVO> handleExcelUpload(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="localPath",required=true) String localPath
			)throws Exception{	
		//System.out.println(" ; localPath : "+localPath);
		return specService.specInsert_excel_path(localPath);
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
