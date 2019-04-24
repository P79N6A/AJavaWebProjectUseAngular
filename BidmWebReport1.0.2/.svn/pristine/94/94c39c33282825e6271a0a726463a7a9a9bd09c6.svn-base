package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.SortBankTftCfVO;
import com.boe.idm.project.model.mybatis.SortBankVO;

@Mapper
public interface SortBankMapper {
	
	public List<SortBankVO> getData(@Param("timekey") String timekey) throws Exception;
	
	public List<SortBankTftCfVO> getSumData(@Param("timekey") String timekey) throws Exception;
}
