package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ProductionInfoCellVO;
import com.boe.idm.project.model.mybatis.ProductionInfoModVO;
import com.boe.idm.project.model.mybatis.ProductionInfoVO;
import com.boe.idm.project.service.ProductionInfoService;

@RestController
@RequestMapping("/api")
public class ProductionInfoController {

	@Autowired
	private ProductionInfoService service;

	@RequestMapping(value = "/sc/productioninfo", method = RequestMethod.GET)
	public List<ProductionInfoVO> getData(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("dayControl") String dayControl) throws Exception {
		return service.getData(dayControl);
	}

	@RequestMapping(value = "/sc/productioninfoQ", method = RequestMethod.GET)
	public List<ProductionInfoVO> queryData(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("dateValue") String dateValue) throws Exception {
		return service.queryData(dateValue);
	}

	@RequestMapping(value = "/sc/productioninfocf", method = RequestMethod.GET)
	public List<ProductionInfoVO> getDataCf(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("dayControl") String dayControl) throws Exception {
		return service.getDataCf(dayControl);
	}

	@RequestMapping(value = "/sc/productioninfocfQ", method = RequestMethod.GET)
	public List<ProductionInfoVO> queryDataCf(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("dateValue") String dateValue) throws Exception {
		return service.queryDataCf(dateValue);
	}

	@RequestMapping(value = "/sc/productioninfom1", method = RequestMethod.GET)
	public List<ProductionInfoModVO> getDataM1(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("dayControl") String dayControl) throws Exception {
		return service.getDataM1(dayControl);
	}

	@RequestMapping(value = "/sc/productioninfom1Q", method = RequestMethod.GET)
	public List<ProductionInfoModVO> queryDataM1(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("dateValue") String dateValue) throws Exception {
		return service.queryDataM1(dateValue);
	}

	@RequestMapping(value = "/sc/productioninfom2", method = RequestMethod.GET)
	public List<ProductionInfoModVO> getDataM2(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("dayControl") String dayControl) throws Exception {
		return service.getDataM2(dayControl);
	}

	@RequestMapping(value = "/sc/productioninfom2Q", method = RequestMethod.GET)
	public List<ProductionInfoModVO> queryDataM2(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("dateValue") String dateValue) throws Exception {
		return service.queryDataM2(dateValue);
	}

	@RequestMapping(value = "/sc/productioninfocell1", method = RequestMethod.GET)
	public List<ProductionInfoCellVO> getDataCell(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("dayControl") String dayControl) throws Exception {
		return service.getDataCell(dayControl);
	}

	@RequestMapping(value = "/sc/productioninfocell1Q", method = RequestMethod.GET)
	public List<ProductionInfoCellVO> queryDataCell(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("dateValue") String dateValue) throws Exception {
		return service.queryDataCell(dateValue);
	}

	@RequestMapping(value = "/sc/productioninfocell2", method = RequestMethod.GET)
	public List<ProductionInfoCellVO> getDataCell2(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("dayControl") String dayControl) throws Exception {
		return service.getDataCell2(dayControl);
	}

	@RequestMapping(value = "/sc/productioninfocell2Q", method = RequestMethod.GET)
	public List<ProductionInfoCellVO> queryDataCell2(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("dateValue") String dateValue) throws Exception {
		return service.queryDataCell2(dateValue);
	}
}
