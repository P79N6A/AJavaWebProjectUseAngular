package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.OeeAeInfoVO;
import com.boe.idm.project.model.mybatis.OeeAeTop5VO;

@Mapper
public interface OeeAeInfoMapper {

	public List<OeeAeInfoVO> getData(@Param("date") int date, @Param("hour") int hour) throws Exception;

	public List<OeeAeInfoVO> queryData(@Param("dateType") String dateType, @Param("dateValue") String dateValue)
			throws Exception;

	public List<OeeAeTop5VO> getDataTop5(@Param("date") int date, @Param("hour") int hour) throws Exception;

	public List<OeeAeTop5VO> queryDataTop5(@Param("dateType") String dateType, @Param("dateValue") String dateValue)
			throws Exception;

}
