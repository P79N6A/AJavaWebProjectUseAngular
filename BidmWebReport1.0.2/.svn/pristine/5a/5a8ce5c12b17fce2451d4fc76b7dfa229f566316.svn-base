package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.ModuleS2CloseRatioVO;
import com.boe.idm.project.model.mybatis.ModuleS2ClosedCycleVO;
import com.boe.idm.project.model.mybatis.ModuleS2WorkCloseVO;

@Mapper
public interface ModuleS2WorkCloseMapper {
	//1. 二级界面查询数据的方法
	public List<ModuleS2WorkCloseVO> getList(@Param("factoryname") String factoryname,
											@Param("buttypes") String[] buttypes,
											@Param("worktypes") String[] worktypes,
											@Param("lottypes") String[] lottypes);
	
	//2.一级界面中查询关闭率的方法
	public ModuleS2CloseRatioVO getCloseRatio(@Param("factoryname") String factoryname,
											@Param("buttypes") String[] buttypes,
											@Param("worktypes") String[] worktypes,
											@Param("lottypes") String[] lottypes);
	
	//3.一级界面中查询关闭周期的方法
	public ModuleS2ClosedCycleVO getCloseCycle(@Param("factoryname") String factoryname,
											@Param("buttypes") String[] buttypes,
											@Param("worktypes") String[] worktypes,
											@Param("lottypes") String[] lottypes);
}
