package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ModuleS2WorkWipMapper;
import com.boe.idm.project.model.mybatis.ModuleS2WorkWipVO;
import com.boe.idm.project.service.ModuleS2WorkWipService;

@Service
public class ModuleS2WorkWipServiceImple implements ModuleS2WorkWipService {
	
	@Autowired
	private ModuleS2WorkWipMapper mapper;

	@Override
	public List<ModuleS2WorkWipVO> getList(String starttime, String endtime, String[] butypes, String[] workgroup,
			String[] lottypes, String[] workstates,String factoryname) {
		return mapper.getList(starttime, endtime, butypes, workgroup, lottypes, workstates,factoryname);
	}

}
