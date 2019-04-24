package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ArrayWipKanbanShishiMapper;
import com.boe.idm.project.model.mybatis.ArrayWipKanbanShishiVO;
import com.boe.idm.project.service.ArrayWipKanbanShishiService;

@Service
public class ArrayWipKanbanShishiServiceImple implements ArrayWipKanbanShishiService {

	@Autowired
	private ArrayWipKanbanShishiMapper mapper;
	
	@Override
	public List<ArrayWipKanbanShishiVO> queryAllObjects(String productiontype) {
		return mapper.queryAllObjects(productiontype);
	}

}
