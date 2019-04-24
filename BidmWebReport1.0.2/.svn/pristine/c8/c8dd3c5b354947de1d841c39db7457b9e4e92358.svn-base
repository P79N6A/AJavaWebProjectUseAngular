package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ArrayWipCurrentStationMapper;
import com.boe.idm.project.model.mybatis.ArrayWipCurrentStationVO;
import com.boe.idm.project.service.ArrayWipCurrentStationService;

@Service
public class ArrayWipCurrentStationServiceImple implements ArrayWipCurrentStationService {

	@Autowired
	private ArrayWipCurrentStationMapper mapper;
	
	
	@Override
	public List<ArrayWipCurrentStationVO> getList(String hourtimekey, String operationdesc) {
		// TODO Auto-generated method stub
		System.out.println(" serviceImple 传递过来的参数是 ： "+hourtimekey + " :  "+operationdesc);
		return mapper.getList(hourtimekey, operationdesc);
	}

}
