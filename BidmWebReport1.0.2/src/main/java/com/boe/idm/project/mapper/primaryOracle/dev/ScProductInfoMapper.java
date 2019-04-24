package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boe.idm.project.model.mybatis.ScProductInfoVO;

@Mapper
public interface ScProductInfoMapper {
	
	public List<ScProductInfoVO> getData() throws Exception;
	
	public int deleteData(ScProductInfoVO scProductInfo) throws Exception;

	public int insertData(ScProductInfoVO scProductInfo) throws Exception;

	public int updateData(ScProductInfoVO scProductInfo) throws Exception;
	
}
