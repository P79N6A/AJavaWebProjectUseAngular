package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ArrayMoveCurrentStationMapper;
import com.boe.idm.project.model.mybatis.ArrayMoveCurrentStationVO;
import com.boe.idm.project.service.ArrayMoveCurrentStationService;

@Service
public class ArrayMoveCurrentStationServiceImple implements ArrayMoveCurrentStationService {

	@Autowired
	private ArrayMoveCurrentStationMapper mapper;
	
	
	@Override
	public List<ArrayMoveCurrentStationVO> getList(String operationdesc) {
		// TODO Auto-generated method stub
		return mapper.getList(operationdesc);
	}

}
