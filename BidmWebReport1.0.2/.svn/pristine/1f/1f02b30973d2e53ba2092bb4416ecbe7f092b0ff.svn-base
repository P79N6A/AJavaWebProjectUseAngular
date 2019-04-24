package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.GsKanbanTableVO;
import com.boe.idm.project.service.GsKanbanTableService;

@RestController
@RequestMapping("/api")
public class GsKanbanTableController {

	@Autowired
	private GsKanbanTableService service;

	@RequestMapping(value = "/sc/gskanbantable", method = RequestMethod.GET)
	public List<GsKanbanTableVO> getTable(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return service.getTable();
	};
}
