package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ArrayWipCurrentMapper;
import com.boe.idm.project.model.mybatis.ArrayWipCurrentVO;
import com.boe.idm.project.service.ArrayWipCurrentService;

@Service
public class ArrayWipCurrentServiceImple implements ArrayWipCurrentService {
	
	@Autowired
	private ArrayWipCurrentMapper mapper;

	@Override
	public List<ArrayWipCurrentVO> getList(String hourtimekey) {
		// TODO Auto-generated method stub
		return mapper.getList(hourtimekey);
	}

}
