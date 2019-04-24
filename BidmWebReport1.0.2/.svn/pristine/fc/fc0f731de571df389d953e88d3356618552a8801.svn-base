package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.KeyInRemarkVO;
import com.boe.idm.project.service.KeyInRemarkService;

@RestController
@RequestMapping("/api")
public class KeyInRemarkController {
	
	@Autowired
	private KeyInRemarkService service;
	
	//1.写入数据库的操作 
	@RequestMapping(value="/keyinremartk",method=RequestMethod.GET)
	public void insertOrUpdateRemark(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="datename",required=true) String datename,
			@RequestParam(value="report",required=true) String report,
			@RequestParam(value="item",required=true) String item,
			@RequestParam(value="remark",required=true) String remark,
			@RequestParam(value="linebie",required=false) String line
			){
		
			if (report.equals("HourMonitor") || report.equals("CST info")||report.equals("gskanban")) {
				KeyInRemarkVO keyInRemarkVO= new KeyInRemarkVO(datename, report, item, remark,null , "", "");
				service.insertOrUpdateRemark(keyInRemarkVO);	
			}else if(report.equals("CF WIP MOVE")){
				KeyInRemarkVO keyInRemarkVO = new KeyInRemarkVO(datename, report, item, remark, null, "", line);
				service.insertOrUpdateRemark(keyInRemarkVO);
			}
			
	}
	
	
	//2.读取数据库的操作
	@RequestMapping(value="/queryRemark",method=RequestMethod.GET)
	public List<KeyInRemarkVO> queryRemarks(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="datename",required=true) String datename,
			@RequestParam(value="report",required=true) String report
			){
		return service.queryRemarks(datename, report);
	}
	
	

}
