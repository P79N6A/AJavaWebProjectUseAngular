package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ModuleWipFirstMapper;
import com.boe.idm.project.model.mybatis.ModuleWipFirstVO;
import com.boe.idm.project.service.ModuleWipFirstService;

@Service
public class ModuleWipFirstServiceImple implements ModuleWipFirstService {
	
	@Autowired
	private ModuleWipFirstMapper mapper;
	
	@Override
	public List<ModuleWipFirstVO> getList(String[] types) {
		// TODO Auto-generated method stub
		return mapper.getList(types);
	}

	@Override
	public List<ModuleWipFirstVO> getListProduct(String[] types, String[] productseizes,String[] checkincodes,String[] lottypes) {
		// TODO Auto-generated method stub
		return mapper.getListProduct(types, productseizes,checkincodes,lottypes);
	}

	@Override
	public List<ModuleWipFirstVO> getListS2(String[] types) {
		// TODO Auto-generated method stub
		return mapper.getListS2(types);
	}

	@Override
	public List<ModuleWipFirstVO> getListProductS2(String[] types, String[] productseizes,String[] checkincodes,String[] lottypes) {
		// TODO Auto-generated method stub
		return mapper.getListProductS2(types, productseizes,checkincodes,lottypes);
	}

}
