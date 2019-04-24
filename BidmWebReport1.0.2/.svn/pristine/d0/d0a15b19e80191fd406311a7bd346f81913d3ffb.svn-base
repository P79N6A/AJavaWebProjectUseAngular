package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.CellWipShipToFGMS1VO;
import com.boe.idm.project.model.mybatis.CellWipShipToFGMS2VO;
import com.boe.idm.project.service.CellWipShipToFGMSService;

@RestController
@RequestMapping("/api")
public class CellWipShipToFGMSController {
	@Autowired
	private CellWipShipToFGMSService service;
	
	@RequestMapping(value="/cellwipshiptofgms/query1",method=RequestMethod.GET)
	public List<CellWipShipToFGMS1VO> queryByType(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="lottype",required=true) String lottype){
		return service.queryByType(lottype);
	}	
	
	@RequestMapping(value="/cellwipshiptofgms/query2",method=RequestMethod.GET)
	public List<CellWipShipToFGMS2VO> queryByProductspec(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="productspec",required=true) String productspec){
		return service.queryByProductspec(productspec);
	}	

}
