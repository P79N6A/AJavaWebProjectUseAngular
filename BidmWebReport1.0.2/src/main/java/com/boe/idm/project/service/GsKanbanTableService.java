package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.GsKanbanTableVO;

public interface GsKanbanTableService {
	public List<GsKanbanTableVO> getTable() throws Exception;
}
