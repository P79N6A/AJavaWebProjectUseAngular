package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.CfWipCurrentStationMapper;
import com.boe.idm.project.model.mybatis.CfWipCurrentStationVO;
import com.boe.idm.project.service.CfWipCurrentStationService;

@Service
public class CfWipCurrentStationServiceImple implements CfWipCurrentStationService {

	@Autowired
	private CfWipCurrentStationMapper mapper;
	
	@Override
	public List<CfWipCurrentStationVO> getList(String hourtimekey, String operationdesc) {
		// TODO Auto-generated method stub
		return mapper.getList(hourtimekey, operationdesc);
	}

}
