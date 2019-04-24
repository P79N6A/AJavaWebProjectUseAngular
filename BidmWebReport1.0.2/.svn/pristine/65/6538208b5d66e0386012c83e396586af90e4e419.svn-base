package com.boe.idm.project.service;

import java.util.List;


import com.boe.idm.project.model.mybatis.ModuleS2CloseRatioVO;
import com.boe.idm.project.model.mybatis.ModuleS2ClosedCycleVO;
import com.boe.idm.project.model.mybatis.ModuleS2WorkCloseVO;

public interface ModuleS2WorkCloseService {
	//1. 二级界面查询数据的方法
	public List<ModuleS2WorkCloseVO> getList(String factoryname, String[] buttypes,
											String[] worktypes, String[] lottypes);
	
	//2.一级界面中查询关闭率的方法	
	public ModuleS2CloseRatioVO getCloseRatio(String factoryname, String[] buttypes,
			 								String[] worktypes, String[] lottypes);
	
	//3.一级界面中查询关闭周期的方法
	public ModuleS2ClosedCycleVO getCloseCycle(String factoryname, String[] buttypes,
											String[] worktypes, String[] lottypes);

}
