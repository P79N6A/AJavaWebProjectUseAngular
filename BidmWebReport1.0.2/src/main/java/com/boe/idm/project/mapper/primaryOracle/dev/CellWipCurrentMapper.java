package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.CellWipCurrentVO;

@Mapper
public interface CellWipCurrentMapper {
	public List<CellWipCurrentVO> getList(@Param("hourtimekey") String hourtimekey);
	public List<CellWipCurrentVO> getListBoth(@Param("hourtimekey") String hourtimekey);
}
