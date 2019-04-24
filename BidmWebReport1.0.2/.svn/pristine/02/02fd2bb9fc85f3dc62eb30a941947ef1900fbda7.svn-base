package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ArrayJiadongTableVO;
import com.boe.idm.project.model.mybatis.ArrayJiadongVO;
import com.boe.idm.project.service.ArrayJiadongService;

@RestController
@RequestMapping("/api")
public class ArrayJiadongController {

	@Autowired
	private ArrayJiadongService service;

	@RequestMapping(value = "/sc/arrayjiadong", method = RequestMethod.GET)
	public List<ArrayJiadongVO> getPhotoJiadong(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dayControl") String dayControl, @RequestParam(value = "eqp_id") String eqp_id)
			throws Exception {
		return service.getPhotoJiadong(dayControl, eqp_id);
	}

	@RequestMapping(value = "/sc/arrayjiadongtable", method = RequestMethod.GET)
	public List<ArrayJiadongTableVO> getPhotoJiadongTable(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dayControl") String dayControl, @RequestParam(value = "eqp_id") String eqp_id)
			throws Exception {
		return service.getPhotoJiadongTable(dayControl, eqp_id);
	}

	@RequestMapping(value = "/sc/arrayjiadongQ", method = RequestMethod.GET)
	public List<ArrayJiadongVO> queryPhotoJiadong(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dateValue") String dateValue, @RequestParam(value = "eqp_id") String eqp_id)
			throws Exception {
		return service.queryPhotoJiadong(dateValue, eqp_id);
	}

	@RequestMapping(value = "/sc/arrayjiadongtableQ", method = RequestMethod.GET)
	public List<ArrayJiadongTableVO> queryPhotoJiadongTable(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dateValue") String dateValue, @RequestParam(value = "eqp_id") String eqp_id)
			throws Exception {
		return service.queryPhotoJiadongTable(dateValue, eqp_id);
	}

	@RequestMapping(value = "/sc/PecvdFGIjiadong", method = RequestMethod.GET)
	public List<ArrayJiadongVO> getPecvdFGI(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dayControl") String dayControl) throws Exception {
		return service.getPecvdFGI(dayControl);
	}

	@RequestMapping(value = "/sc/PecvdFGIjiadongQ", method = RequestMethod.GET)
	public List<ArrayJiadongVO> queryPecvdFGI(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dateValue") String dateValue) throws Exception {
		return service.queryPecvdFGI(dateValue);
	}

	@RequestMapping(value = "/sc/PecvdMultijiadong", method = RequestMethod.GET)
	public List<ArrayJiadongVO> getPecvdMulti(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dayControl") String dayControl) throws Exception {
		return service.getPecvdMulti(dayControl);
	}

	@RequestMapping(value = "/sc/PecvdMultijiadongQ", method = RequestMethod.GET)
	public List<ArrayJiadongVO> queryPecvdMulti(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dateValue") String dateValue) throws Exception {
		return service.queryPecvdMulti(dateValue);
	}

	@RequestMapping(value = "/sc/PecvdPVXjiadong", method = RequestMethod.GET)
	public List<ArrayJiadongVO> getPecvdPVX(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dayControl") String dayControl) throws Exception {
		return service.getPecvdPVX(dayControl);
	}

	@RequestMapping(value = "/sc/PecvdPVXjiadongQ", method = RequestMethod.GET)
	public List<ArrayJiadongVO> queryPecvdPVX(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dateValue") String dateValue) throws Exception {
		return service.queryPecvdPVX(dateValue);
	}

	@RequestMapping(value = "/sc/Pecvdjiadongtable", method = RequestMethod.GET)
	public List<ArrayJiadongTableVO> getPecvdJiadongTable(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dayControl") String dayControl) throws Exception {
		return service.getPecvdJiadongTable(dayControl);
	}

	@RequestMapping(value = "/sc/PecvdjiadongtableQ", method = RequestMethod.GET)
	public List<ArrayJiadongTableVO> queryPecvdJiadongTable(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dateValue") String dateValue) throws Exception {
		return service.queryPecvdJiadongTable(dateValue);
	}

	@RequestMapping(value = "/sc/getEtchITO", method = RequestMethod.GET)
	public List<ArrayJiadongVO> getEtchITO(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dayControl") String dayControl) throws Exception {
		return service.getEtchITO(dayControl);
	}

	@RequestMapping(value = "/sc/queryEtchITO", method = RequestMethod.GET)
	public List<ArrayJiadongVO> queryEtchITO(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dateValue") String dateValue) throws Exception {
		return service.queryEtchITO(dateValue);
	}

	@RequestMapping(value = "/sc/getEtchITOTable", method = RequestMethod.GET)
	public List<ArrayJiadongTableVO> getEtchITOTable(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dayControl") String dayControl) throws Exception {
		return service.getEtchITOTable(dayControl);
	}

	@RequestMapping(value = "/sc/queryEtchITOTable", method = RequestMethod.GET)
	public List<ArrayJiadongTableVO> queryEtchITOTable(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dateValue") String dateValue) throws Exception {
		return service.queryEtchITOTable(dateValue);
	}

	@RequestMapping(value = "/sc/getEtchSDVIA", method = RequestMethod.GET)
	public List<ArrayJiadongVO> getEtchSDVIA(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dayControl") String dayControl, @RequestParam(value = "eqp_id") String eqp_id)
			throws Exception {
		return service.getEtchSDVIA(dayControl, eqp_id);
	}

	@RequestMapping(value = "/sc/queryEtchSDVIA", method = RequestMethod.GET)
	public List<ArrayJiadongVO> queryEtchSDVIA(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dateValue") String dateValue, @RequestParam(value = "eqp_id") String eqp_id)
			throws Exception {
		return service.queryEtchSDVIA(dateValue, eqp_id);
	}

	@RequestMapping(value = "/sc/getEtchSDVIATable", method = RequestMethod.GET)
	public List<ArrayJiadongTableVO> getEtchSDVIATable(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dayControl") String dayControl, @RequestParam(value = "eqp_id") String eqp_id)
			throws Exception {
		return service.getEtchSDVIATable(dayControl, eqp_id);
	}

	@RequestMapping(value = "/sc/queryEtchSDVIATable", method = RequestMethod.GET)
	public List<ArrayJiadongTableVO> queryEtchSDVIATable(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "dateValue") String dateValue, @RequestParam(value = "eqp_id") String eqp_id)
			throws Exception {
		return service.queryEtchSDVIATable(dateValue, eqp_id);
	}
}
