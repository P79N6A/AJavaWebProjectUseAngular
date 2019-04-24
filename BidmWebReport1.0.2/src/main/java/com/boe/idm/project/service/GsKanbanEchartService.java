package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.GsKanbanEchartVO;

public interface GsKanbanEchartService {

	public List<GsKanbanEchartVO> getEchart() throws Exception;
}
