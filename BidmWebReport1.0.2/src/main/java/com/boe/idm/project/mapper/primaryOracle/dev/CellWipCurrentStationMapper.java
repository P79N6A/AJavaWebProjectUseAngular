package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.CellWipCurrentStationVO;

@Mapper
public interface CellWipCurrentStationMapper {
	public List<CellWipCurrentStationVO> getList(@Param("hourtimekey")String hourtimekey,@Param("operationdesc") String operationdesc);
}
