package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.CfMoveCurrentVO;

@Mapper
public interface CfMoveCurrentMapper {
	public List<CfMoveCurrentVO> getList(@Param("starttime")String starttime,@Param("endtime")String endtime);
}