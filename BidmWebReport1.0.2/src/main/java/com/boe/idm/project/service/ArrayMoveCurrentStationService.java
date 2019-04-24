package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.ArrayMoveCurrentStationVO;

public interface ArrayMoveCurrentStationService {
	
	public List<ArrayMoveCurrentStationVO> getList(String operationdesc);

}
