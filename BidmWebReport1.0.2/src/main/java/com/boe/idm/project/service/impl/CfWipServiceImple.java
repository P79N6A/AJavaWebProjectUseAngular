package com.boe.idm.project.service.impl;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.CfWipMapper;
import com.boe.idm.project.model.mybatis.CfWipVO;
import com.boe.idm.project.service.CfWipService;

@Service
public class CfWipServiceImple implements CfWipService {

	@Autowired
	private CfWipMapper mapper;
	
	@Override
	public List<CfWipVO> getList() {
		// TODO Auto-generated method stub
		return mapper.getList();
	}

	@Override
	public List<CfWipVO> getListPH1() {
		// TODO Auto-generated method stub
		return mapper.getListPH1();
	}

	@Override
	public List<CfWipVO> getListPH2() {
		// TODO Auto-generated method stub
		return mapper.getListPH2();
	}

}
