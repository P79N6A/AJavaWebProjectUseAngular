package com.boe.idm.project.service;

import java.util.List;


import com.boe.idm.project.model.mybatis.ArrayWipCurrentStationVO;

public interface ArrayWipCurrentStationService {
	
	public List<ArrayWipCurrentStationVO> getList(String hourtimekey,String operationdesc);

}
