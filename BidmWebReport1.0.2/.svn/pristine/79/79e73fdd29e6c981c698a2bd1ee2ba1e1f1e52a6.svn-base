package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ModuleLegendMapper;
import com.boe.idm.project.model.mybatis.ModuleLegendVO;
import com.boe.idm.project.service.ModuleLegendService;

@Service
public class ModuleLegendServiceImple implements ModuleLegendService {

	@Autowired
	private ModuleLegendMapper mapper;
	@Override
	public List<ModuleLegendVO> getList(String factoryname) {
		// TODO Auto-generated method stub
		return mapper.getList(factoryname);
	}

}
