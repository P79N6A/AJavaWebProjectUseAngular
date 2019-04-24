package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CellWipCurrentStationVO;

public interface CellWipCurrentStationService {
	public List<CellWipCurrentStationVO> getList(String hourtimekey, String operationdesc);

}
