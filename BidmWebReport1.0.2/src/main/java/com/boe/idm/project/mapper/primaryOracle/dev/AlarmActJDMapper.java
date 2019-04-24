package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boe.idm.project.model.mybatis.AlarmActJD;

@Mapper
public interface AlarmActJDMapper {
	public List<AlarmActJD> getActJD() throws Exception;
}
