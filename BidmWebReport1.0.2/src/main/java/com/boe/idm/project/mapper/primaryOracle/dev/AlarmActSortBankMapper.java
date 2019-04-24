package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boe.idm.project.model.mybatis.AlarmActSortBank;

@Mapper
public interface AlarmActSortBankMapper {
	public List<AlarmActSortBank> getActSortBank() throws Exception;
}
