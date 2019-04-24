package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ModuleWipMapper;
import com.boe.idm.project.model.mybatis.ModuleWipVO;
import com.boe.idm.project.service.ModuleWipService;


@Service
public class ModuleWipServiceImple implements ModuleWipService{
	
	@Autowired
	private ModuleWipMapper mapper;

	@Override
	public List<ModuleWipVO> getModuleList(String hourtimekey, String[] lines, String[] checkincodes,
			String[] productsizes) {
		// TODO Auto-generated method stub
		return mapper.getModuleList(hourtimekey, lines, checkincodes, productsizes);
	}

	@Override
	public List<ModuleWipVO> getS2List(String hourtimekey, String[] lines, String[] checkincodes, String[] productsizes,
			String[] producttyes) {
		// TODO Auto-generated method stub
		return mapper.getS2List(hourtimekey, lines, checkincodes, productsizes, producttyes);
	}


}
