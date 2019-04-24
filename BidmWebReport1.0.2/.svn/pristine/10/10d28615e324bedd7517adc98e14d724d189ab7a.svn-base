package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.PanelBankInfoVO;
import com.boe.idm.project.model.mybatis.PanelBankVO;
import com.boe.idm.project.model.mybatis.PanelBankkfVO;
import com.boe.idm.project.service.PanelBankService;

@RestController
@RequestMapping("/api")
public class PanelBankController {
	@Autowired
	private PanelBankService service;
	
	//1.查询 1条  表格数据的上面的   total 的数据
	@RequestMapping(value="/panelbank/total1",method=RequestMethod.GET)
	public List<PanelBankVO> queryObjects1(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="hourtime",required=true) String hourtime){
		return service.queryObjects1(hourtime);
	}
	
		
	//2.查询 4条  表格数据的上面的 
	@RequestMapping(value="/panelbank/bbb",method=RequestMethod.GET)
	public List<PanelBankVO> queryObjects2(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="hourtime",required=true) String hourtime){
		return service.queryObjects2(hourtime);
	}
		
	//3.按照时间来进行查询 ：第一个页面的数据 :数据主体部分
	@RequestMapping(value="/panelbank/maindata1",method=RequestMethod.GET)
	public List<PanelBankVO> queryObjects3(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="hourtime",required=true) String hourtime){
		return service.queryObjects3(hourtime);
	}
		
	//4.查询 上面的两个数据
	@RequestMapping(value="/panelbank/cstdata1",method=RequestMethod.GET)
	public List<PanelBankVO> queryObjects4(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="hourtime",required=true) String hourtime){
		return service.queryObjects4(hourtime);
	}
	
	
	
	//5.查询 1条  表格数据的上面的   total 的数据
		@RequestMapping(value="/panelbankkf/total2",method=RequestMethod.GET)
		public List<PanelBankkfVO> queryObjects5(HttpServletRequest request,
				HttpServletResponse response,
				@RequestParam(value="hourtime",required=true) String hourtime){
			return service.queryOjbects5(hourtime);
		}
		
			
		//6.查询 4条  表格数据的上面的 
		@RequestMapping(value="/panelbankkf/bbb2",method=RequestMethod.GET)
		public List<PanelBankkfVO> queryObjects6(HttpServletRequest request,
				HttpServletResponse response,
				@RequestParam(value="hourtime",required=true) String hourtime){
			return service.queryOjbects6(hourtime);
		}
			
		//7.按照时间来进行查询 ：第一个页面的数据 :数据主体部分
		@RequestMapping(value="/panelbankkf/maindata2",method=RequestMethod.GET)
		public List<PanelBankkfVO> queryObjects7(HttpServletRequest request,
				HttpServletResponse response,
				@RequestParam(value="hourtime",required=true) String hourtime){
			return service.queryOjbects7(hourtime);
		}
		
		//8.查询所有的基本信息 
		@RequestMapping(value="/panelbankinfo/queryall",method=RequestMethod.GET)
		public List<PanelBankInfoVO> queryAllBasicInfo(HttpServletRequest request,
				HttpServletResponse response){
			return service.queryAllBasicInfo();
		}
		
		//9.插入一个对象
		@RequestMapping(value="/panelbankinfo/insertone",method=RequestMethod.GET)
		public int insertOne(HttpServletRequest request,HttpServletResponse response,
				@RequestParam(value="productname",required=true) String productname,
				@RequestParam(value="productspecname",required=true) String productspecname,
				@RequestParam(value="modeltype",required=true) String modeltype,
				@RequestParam(value="flag",required=true) String flag,
				@RequestParam(value="bu",required=true) String bu,
				@RequestParam(value="cst",required=false) String cst,
				@RequestParam(value="no",required=true) String no){
			PanelBankInfoVO panelBankInfoVO = new PanelBankInfoVO(productname, productspecname, modeltype, flag, bu, cst, no);
			//System.out.println(panelBankInfoVO);
			return service.insertOne(panelBankInfoVO);
		}
		
		//10.更新一个对象
		@RequestMapping(value="/panelbankinfo/updateone",method=RequestMethod.POST)
		public int updateOne(HttpServletRequest request,HttpServletResponse response,
				@RequestBody PanelBankInfoVO panelBankInfoVO){
			return service.updateOne(panelBankInfoVO);
		}
		
		//11.删除一个duixiang
		@RequestMapping(value="/panelbankinfo/deleteone",method=RequestMethod.POST)
		public int deleteOne(HttpServletRequest request,HttpServletResponse response,
				@RequestBody PanelBankInfoVO panelBankInfoVO){
			return service.deleteOne(panelBankInfoVO);
		}
}
