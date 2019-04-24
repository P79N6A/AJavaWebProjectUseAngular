package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.ModuleWipVO;

@Mapper
public interface ModuleWipMapper {
	//1.查询module的wip
	public List<ModuleWipVO> getModuleList(@Param("hourtimekey") String hourtimekey,
			@Param("lines")String[] lines,@Param("checkincodes") String[] checkincodes,
			@Param("productsizes") String[] productsizes);
	//2.查询s2的wip
	public List<ModuleWipVO> getS2List(@Param("hourtimekey") String hourtimekey,
			@Param("lines")String[] lines,@Param("checkincodes") String[] checkincodes,
			@Param("productsizes") String[] productsizes,@Param("producttypes") String[] producttyes);
}
