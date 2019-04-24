package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.CfMoveCurrentStationVO;

@Mapper
public interface CfMoveCurrentStationMapper {
	
	public List<CfMoveCurrentStationVO> getList(@Param("operationdesc")  String operationdesc);

}
