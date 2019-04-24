package com.boe.idm.project.mapper.primary.Timer;



import java.util.Date;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.TimingStorage;

@Mapper
public interface TimingStorageMapper {
	
	public   void insertdefectvalue(@Param("productspecname")String productspecname,@Param("processflowname")String processflowname,@Param("processoperationname")String processoperationname,@Param("defectname")String defectname,@Param("caculatetime")Date caculatetime,@Param("actvalue")float actvalue); 
	

}