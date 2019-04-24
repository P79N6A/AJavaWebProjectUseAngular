package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.CfWipHourVO;

@Mapper
public interface CfWipHourMapper {
	//1.根据时间进行查询
	public List<CfWipHourVO> queryAllData(@Param("hourtimekey")String hourtimekey,@Param("productiontype") String productiontype);

}
