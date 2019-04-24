package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.CstInfoPanelTableVO;
import com.boe.idm.project.model.mybatis.CstInfoPanelVO;

@Mapper
public interface CstInfoPanelMapper {

	public List<CstInfoPanelVO> getData() throws Exception;

	public List<CstInfoPanelVO> queryData(@Param("start") int start, @Param("end") int end) throws Exception;

	public List<CstInfoPanelTableVO> getTableData(@Param("durablespecname") String durablespecname,
			@Param("cstspec") String cstspec, @Param("type") String type) throws Exception;

	public List<CstInfoPanelTableVO> queryTableData(@Param("durablespecname") String durablespecname,
			@Param("cstspec") String cstspec, @Param("type") String type, @Param("start") int start,
			@Param("end") int end) throws Exception;

}
