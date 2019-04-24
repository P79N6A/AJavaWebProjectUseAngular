package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boe.idm.project.model.mybatis.ArBankCellInVO;

@Mapper
public interface ArBankCellInMapper {

	public List<ArBankCellInVO> getData() throws Exception;

}
