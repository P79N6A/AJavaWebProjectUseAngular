package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ArrayMoveCurrentMapper;
import com.boe.idm.project.model.mybatis.ArrayMoveCurrentVO;
import com.boe.idm.project.service.ArrayMoveCurrentService;

@Service
public class ArrayMoveCurrentServiceImple implements ArrayMoveCurrentService {

	@Autowired
	private ArrayMoveCurrentMapper mapper;

	@Override
	public List<ArrayMoveCurrentVO> getList(String starttime, String endtime) {
		// TODO Auto-generated method stub
		return mapper.getList(starttime, endtime);
	}

}
