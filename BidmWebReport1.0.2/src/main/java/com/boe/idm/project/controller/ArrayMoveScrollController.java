package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ArrayMoveScrollVO;
import com.boe.idm.project.model.mybatis.KeyInRemarkVO;
import com.boe.idm.project.service.ArrayMoveScrollService;

@RestController
@RequestMapping("/api")
public class ArrayMoveScrollController {
	
	@Autowired
	private ArrayMoveScrollService service;
	
	@RequestMapping(value="/arraymove/scroll",method=RequestMethod.GET)
	public List<ArrayMoveScrollVO> queryAllData(HttpServletRequest request,
						HttpServletResponse response,
						@RequestParam(value="month",required=true) String month,
						@RequestParam(value="nowhour",required=true) String nowhour,
						@RequestParam(value="productiontype",required=true) String productiontype){
		System.out.println(month + " : "+nowhour + " : "+productiontype);
		return service.queryAllData(month,Integer.parseInt(nowhour), productiontype);
	}
	
	@RequestMapping(value="/arraymove/scrollremarkinsert",method=RequestMethod.GET)
	public int insertRemark(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="month",required=true) String month, 
			@RequestParam(value="opercode",required=true) String opercode, 
			@RequestParam(value="productiontype",required=true) String productiontype,
			@RequestParam(value="ratiotype",required=true)String ratio,
			@RequestParam(value="content",required=true) String content) {
		return service.insertRemark(month, opercode,productiontype,ratio, content);
	}
	
	@RequestMapping(value="/arraymove/scrollremarkread",method=RequestMethod.GET)
	public List<KeyInRemarkVO> readRemark(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="month",required=true) String month,
			@RequestParam(value="productiontype",required=true) String productiontype,
			@RequestParam(value="ratiotype",required=true)String ratio) {
		return service.readRemark(month,productiontype,ratio);
	}

}
