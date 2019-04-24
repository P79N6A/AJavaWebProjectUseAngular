package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.ArrayWipKanbanShishiVO;

@Mapper
public interface ArrayWipKanbanShishiMapper {
	
	//1.根据查询条件进行查询
	public List<ArrayWipKanbanShishiVO> queryAllObjects(@Param("productiontype") String productiontype);

}
