package com.boe.idm.project.service.impl;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ModuleS2WorkCloseMapper;
import com.boe.idm.project.model.mybatis.ModuleS2CloseRatioVO;
import com.boe.idm.project.model.mybatis.ModuleS2ClosedCycleVO;
import com.boe.idm.project.model.mybatis.ModuleS2WorkCloseVO;
import com.boe.idm.project.service.ModuleS2WorkCloseService;

@Service
public class ModuleS2WorkCloseServiceImple implements ModuleS2WorkCloseService {

	@Autowired
	private ModuleS2WorkCloseMapper mapper;
	@Override
	public List<ModuleS2WorkCloseVO> getList(String factoryname,String[] buttypes,
			String[] worktypes, String[] lottypes) {
		
		return mapper.getList(factoryname,buttypes,worktypes,lottypes);
	}
	@Override
	public ModuleS2CloseRatioVO getCloseRatio(String factoryname,String[] buttypes,
							String[] worktypes, String[] lottypes) {
		// TODO Auto-generated method stub
		return mapper.getCloseRatio(factoryname,buttypes,worktypes,lottypes);
	}
	@Override
	public ModuleS2ClosedCycleVO getCloseCycle(String factoryname,String[] buttypes,
				String[] worktypes, String[] lottypes) {
		// TODO Auto-generated method stub
		return mapper.getCloseCycle(factoryname,buttypes,worktypes,lottypes);
	}

}
