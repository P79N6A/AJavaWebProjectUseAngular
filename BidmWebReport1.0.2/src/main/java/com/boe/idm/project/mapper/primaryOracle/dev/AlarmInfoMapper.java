package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.AlarmInfo;

@Mapper
public interface AlarmInfoMapper {
	public List<AlarmInfo> getInfoList(@Param("specID") int specID) throws Exception;

	public List<AlarmInfo> getInfoHist(@Param("specID") int specID) throws Exception;
}
