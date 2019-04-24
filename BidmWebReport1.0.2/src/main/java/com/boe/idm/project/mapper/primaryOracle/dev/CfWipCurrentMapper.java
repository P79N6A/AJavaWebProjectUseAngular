package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.CfWipCurrentVO;

@Mapper
public interface CfWipCurrentMapper {
	public List<CfWipCurrentVO> getList(@Param("hourtimekey") String hourtimekey);
}
