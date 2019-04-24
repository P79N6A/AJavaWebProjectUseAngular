package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boe.idm.project.model.mybatis.CfMoveVO;

@Mapper
public interface CfMoveMapper {
	
	public List<CfMoveVO> getList();
	public List<CfMoveVO> getListPH1();
	public List<CfMoveVO> getListPH2();

}
