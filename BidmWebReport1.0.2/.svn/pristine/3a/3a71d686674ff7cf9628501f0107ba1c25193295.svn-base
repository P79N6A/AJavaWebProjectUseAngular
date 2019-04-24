package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.apache.xmlbeans.impl.xb.xsdschema.Public;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ModuleS2CloseRatioVO;
import com.boe.idm.project.model.mybatis.ModuleS2ClosedCycleVO;
import com.boe.idm.project.model.mybatis.ModuleS2WorkCloseVO;
import com.boe.idm.project.service.ModuleS2WorkCloseService;

@RestController
@RequestMapping("/api")
public class ModuleS2WorkCloseController {
	
	@Autowired
	private ModuleS2WorkCloseService service;
	
	//用来查询二级界面上的柱状图的数据信息的
	@RequestMapping(value="/modules2/workclose",method = RequestMethod.GET)
	public List<ModuleS2WorkCloseVO> getList(HttpServletRequest request,
											HttpServletResponse response,
											@RequestParam(value="factoryname",required=true) String factoryname,
											@RequestParam(value="buttypes",required=true) String[] buttypes,
											@RequestParam(value="worktypes",required=true) String[] worktypes,
											@RequestParam(value="lottypes",required=true) String[] lottypes){
		return service.getList(factoryname,buttypes,worktypes,lottypes);
	}
	
	//这是用来查询 关闭率 Ratio的
	@RequestMapping(value="/modules2/closedRatio",method = RequestMethod.GET)
	public ModuleS2CloseRatioVO getClosedRatio(HttpServletRequest request,
											HttpServletResponse response,
											@RequestParam(value="factoryname",required=true) String factoryname,
											@RequestParam(value="buttypes",required=true) String[] buttypes,
											@RequestParam(value="worktypes",required=true) String[] worktypes,
											@RequestParam(value="lottypes",required=true) String[] lottypes){
		return service.getCloseRatio(factoryname,buttypes,worktypes,lottypes);
	}

	//这个是用来查询关闭周期 cycle的
	@RequestMapping(value="/modules2/closeCycle",method = RequestMethod.GET)
	public ModuleS2ClosedCycleVO getCloseCycle(HttpServletRequest request,
											HttpServletResponse response,
											@RequestParam(value="factoryname",required=true) String factoryname,
											@RequestParam(value="buttypes",required=true) String[] buttypes,
											@RequestParam(value="worktypes",required=true) String[] worktypes,
											@RequestParam(value="lottypes",required=true) String[] lottypes){
		return service.getCloseCycle(factoryname,buttypes,worktypes,lottypes);
	}
}
