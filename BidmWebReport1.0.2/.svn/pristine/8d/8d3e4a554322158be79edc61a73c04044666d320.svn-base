package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.SortBankBasicInfoVO;

@Mapper
public interface SortBankBasicInfoMapper {

	public List<SortBankBasicInfoVO> getData() throws Exception;

	public int deleteData(SortBankBasicInfoVO sortBankBasicInfo) throws Exception;

	public int insertData(SortBankBasicInfoVO sortBankBasicInfo) throws Exception;

	public int updateData(@Param("sortBankVO") SortBankBasicInfoVO sortBankBasicInfo, @Param("deleteKey") String deleteKey) throws Exception;

}
