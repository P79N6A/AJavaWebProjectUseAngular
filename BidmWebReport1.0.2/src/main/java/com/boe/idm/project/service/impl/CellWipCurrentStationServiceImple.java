package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.CellWipCurrentStationMapper;
import com.boe.idm.project.model.mybatis.CellWipCurrentStationVO;
import com.boe.idm.project.service.CellWipCurrentStationService;

@Service
public class CellWipCurrentStationServiceImple implements CellWipCurrentStationService {

	@Autowired
	private CellWipCurrentStationMapper mapper;
	@Override
	public List<CellWipCurrentStationVO> getList(String hourtimekey, String operationdesc) {
		// TODO Auto-generated method stub
		return mapper.getList(hourtimekey, operationdesc);
	}

}
