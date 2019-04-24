package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.boe.idm.project.model.mybatis.AlarmSpec;

@Mapper
public interface AlarmSpecMapper {

	public List<AlarmSpec> getSpec(Map<String, Object> paraMap);

}
