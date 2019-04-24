package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.GsKanbanEchartMapper;
import com.boe.idm.project.model.mybatis.GsKanbanEchartVO;
import com.boe.idm.project.service.GsKanbanEchartService;

@Service
public class GsKanbanEchartServiceImpl implements GsKanbanEchartService {

	@Autowired
	private GsKanbanEchartMapper mapper;

	@Override
	public List<GsKanbanEchartVO> getEchart() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getEchart();
	}

}
