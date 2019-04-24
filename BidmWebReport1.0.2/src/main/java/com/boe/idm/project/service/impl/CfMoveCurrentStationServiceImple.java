package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.CfMoveCurrentStationMapper;
import com.boe.idm.project.model.mybatis.CfMoveCurrentStationVO;
import com.boe.idm.project.service.CfMoveCurrentStationService;

@Service
public class CfMoveCurrentStationServiceImple implements CfMoveCurrentStationService {

	@Autowired
	private CfMoveCurrentStationMapper mapper;
	
	@Override
	public List<CfMoveCurrentStationVO> getList(String operationdesc) {
		// TODO Auto-generated method stub
		
		return mapper.getList(operationdesc);
	}

}
