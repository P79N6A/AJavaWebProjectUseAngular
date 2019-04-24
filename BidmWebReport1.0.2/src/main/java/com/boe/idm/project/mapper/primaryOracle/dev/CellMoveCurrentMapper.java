package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.CellMoveCurrentVO;

@Mapper
public interface CellMoveCurrentMapper {
	public List<CellMoveCurrentVO> getList(@Param("starttime")String starttime,@Param("endtime")String endtime);
	public List<CellMoveCurrentVO> getListBoth();
}
