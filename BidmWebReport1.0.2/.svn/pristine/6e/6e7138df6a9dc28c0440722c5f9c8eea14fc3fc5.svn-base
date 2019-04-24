package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.KeyInRemarkVO;

@Mapper
public interface KeyInRemarkMapper {
	
	//1.向数据库中插入 一条 数据的方法
	public void insertOrUpdateRemark(KeyInRemarkVO keyInRemarkVO);
	
	//2.从数据库中读取数据的方法
	public List<KeyInRemarkVO> queryRemarks(@Param("datename") String datename,@Param("report") String report);

}
