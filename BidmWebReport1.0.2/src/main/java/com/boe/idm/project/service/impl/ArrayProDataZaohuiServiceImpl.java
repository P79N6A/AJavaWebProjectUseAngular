package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ArrayProDataZaohuiMapper;
import com.boe.idm.project.model.mybatis.ArrayProDataZaohui1;
import com.boe.idm.project.model.mybatis.ArrayProDataZaohui2;
import com.boe.idm.project.model.mybatis.ArrayProDataZaohui3;
import com.boe.idm.project.model.mybatis.ArrayProDataZaohui4;
import com.boe.idm.project.service.ArrayProDataZaohuiService;

@Service
public class ArrayProDataZaohuiServiceImpl implements ArrayProDataZaohuiService {

	@Autowired
	private ArrayProDataZaohuiMapper mapper;

	@Override
	public List<ArrayProDataZaohui1> getData1() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getData1();
	}

	@Override
	public List<ArrayProDataZaohui2> getData2() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getData2();
	}

	@Override
	public List<ArrayProDataZaohui3> getData3() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getData3();
	}

	@Override
	public List<ArrayProDataZaohui4> getData4(String type) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getData4(type);
	}

}
