package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ModuleWipSearchInfoMapper;
import com.boe.idm.project.model.mybatis.ModuleWipCheckInCodeVO;
import com.boe.idm.project.model.mybatis.ModuleWipLineVO;
import com.boe.idm.project.model.mybatis.ModuleWipProductSizeVO;
import com.boe.idm.project.service.ModuleWipSearchInfoService;

@Service
public class ModuleWipSearchInfoServiceImple implements ModuleWipSearchInfoService {

	@Autowired
	private ModuleWipSearchInfoMapper mapper;
	
	@Override
	public List<ModuleWipCheckInCodeVO> getListC() {
		// TODO Auto-generated method stub
		return mapper.getListC();
	}

	@Override
	public List<ModuleWipLineVO> getListL() {
		// TODO Auto-generated method stub
		return mapper.getListL();
	}

	@Override
	public List<ModuleWipProductSizeVO> getlistPM(String hourtimekey) {
		// TODO Auto-generated method stub
		return mapper.getlistPM(hourtimekey);
	}

	@Override
	public List<ModuleWipProductSizeVO> getlistPS(String hourtimekey) {
		// TODO Auto-generated method stub
		return mapper.getlistPS(hourtimekey);
	}

}
