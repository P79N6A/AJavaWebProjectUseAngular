package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boe.idm.project.model.mybatis.AlarmAct;

@Mapper
public interface AlarmActMapper {
	public List<AlarmAct> getAct() throws Exception;
}
