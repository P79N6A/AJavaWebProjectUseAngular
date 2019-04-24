package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.ModuleWipCheckInCodeVO;
import com.boe.idm.project.model.mybatis.ModuleWipLineVO;
import com.boe.idm.project.model.mybatis.ModuleWipProductSizeVO;

@Mapper
public interface ModuleWipSearchInfoMapper {
	
	public List<ModuleWipCheckInCodeVO> getListC();
	public List<ModuleWipLineVO> getListL();
	public List<ModuleWipProductSizeVO> getlistPM(@Param("hourtimekey") String hourtimekey);
	public List<ModuleWipProductSizeVO> getlistPS(@Param("hourtimekey") String hourtimekey);

}
