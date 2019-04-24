package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.ArrayMoveScrollVO;
import com.boe.idm.project.model.mybatis.KeyInRemarkVO;

@Mapper
public interface ArrayMoveScrollMapper {
	//1.按照时间和productiontype来进行操作
	public List<ArrayMoveScrollVO> queryAllData(@Param("month") String month,
										@Param("nowhour") int nowhour,
										@Param("productiontype") String productiontype);
	
	//2.keyin功能的写入操作
	public int insertRemark(@Param("month") String month,
			@Param("opercode") String opercode,
			@Param("productiontype") String productiontype,
			@Param("ratiotype") String ratio,
			@Param("content") String content);
	//3.把keyin的内容读出来
	public List<KeyInRemarkVO> readRemark(@Param("month") String month,
			@Param("productiontype") String productiontype,
			@Param("ratiotype") String ratio);

}
