package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boe.idm.project.model.mybatis.GsKanbanEchartVO;

@Mapper
public interface GsKanbanEchartMapper {
	public List<GsKanbanEchartVO> getEchart() throws Exception;
}
