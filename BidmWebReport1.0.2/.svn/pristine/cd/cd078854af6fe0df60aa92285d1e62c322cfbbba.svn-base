package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CellDailyReportMovementVO;
import com.boe.idm.project.model.mybatis.CellDailyReportVO;
import com.boe.idm.project.service.CellDailyReportService;

@RestController   
@RequestMapping("/api")
public class CellDailyReportController {
	

	
	@Autowired
	private CellDailyReportService service;
	//1.
	@RequestMapping(value="/celldaily/report01",method=RequestMethod.GET)
	public List<CellDailyReportVO> queryObjects(HttpServletRequest request,
			HttpServletResponse response){
		return service.queryObjects();
	}
	//2.
	@RequestMapping(value="/celldaily/report02",method=RequestMethod.GET)
	public List<CellDailyReportVO> queryObjects02(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="startdatename",required=true) String startdatename,
			@RequestParam(value="month",required=true) String month,
			@RequestParam(value="enddatename",required=true) String enddatename){
		
		return service.queryObjects02(startdatename, month, enddatename);
	}
	
	// 3.
	@RequestMapping(value = "/celldaily/report03", method = RequestMethod.GET)
	public CellDailyReportVO queryTotalAct(HttpServletRequest request, HttpServletResponse response) {
		return service.queryTotalAct();
	}

	// 4.
	@RequestMapping(value = "/celldaily/report04", method = RequestMethod.GET)
	public CellDailyReportVO queryTotalAct(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "startdatename", required = true) String startdatename,
			@RequestParam(value = "month", required = true) String month,
			@RequestParam(value = "enddatename", required = true) String enddatename) {

		return service.queryTotalAct02(startdatename, month, enddatename);
	}
	
	//5.cell movement
	@RequestMapping(value = "/celldaily/movement", method = RequestMethod.GET)
	public List<CellDailyReportMovementVO> queryTAllCellMovement(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "datename", required = true) String datename) {

		return service.qyeryAllCellMovement(datename);
	}

}
