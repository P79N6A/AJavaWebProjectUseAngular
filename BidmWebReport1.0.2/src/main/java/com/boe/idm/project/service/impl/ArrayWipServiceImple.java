package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ArrayWipMapper;
import com.boe.idm.project.model.mybatis.ArrayWipVO;
import com.boe.idm.project.service.ArrayWipService;

@Service
public class ArrayWipServiceImple implements ArrayWipService {

	@Autowired
	public ArrayWipMapper Mapper;

	
	@Override
	public List<ArrayWipVO> getList() {
		// TODO Auto-generated method stub
		return Mapper.getList();
	}

}
