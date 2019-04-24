package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CfMoveCurrentStationVO;

public interface CfMoveCurrentStationService {
	public List<CfMoveCurrentStationVO> getList(String operationdesc);
}
