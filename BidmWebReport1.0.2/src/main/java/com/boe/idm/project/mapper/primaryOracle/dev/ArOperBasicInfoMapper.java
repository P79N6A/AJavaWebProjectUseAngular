package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.ArOperBasicInfoVO;

@Mapper
public interface ArOperBasicInfoMapper {

	public List<ArOperBasicInfoVO> getData() throws Exception;

	public int deleteData(ArOperBasicInfoVO arOperBasicInfoVO) throws Exception;

	public int insertData(ArOperBasicInfoVO arOperBasicInfoVO) throws Exception;

	public int updateData(@Param("arOperVO") ArOperBasicInfoVO arOperBasicInfoVO) throws Exception;
}
