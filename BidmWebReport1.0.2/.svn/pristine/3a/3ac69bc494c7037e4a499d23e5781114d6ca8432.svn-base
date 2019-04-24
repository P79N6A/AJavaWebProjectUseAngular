package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.ModuleS2WorkWipVO;

@Mapper
public interface ModuleS2WorkWipMapper {
	
	public List<ModuleS2WorkWipVO> getList(@Param("starttime") String starttime,
			@Param("endtime") String endtime, @Param("butypes") String[] butypes,
			@Param("workgroup") String[] workgroup,@Param("lottypes") String[] lottypes,
			@Param("workstates") String[] workstates,
			@Param("factoryname") String factoryname);

}
