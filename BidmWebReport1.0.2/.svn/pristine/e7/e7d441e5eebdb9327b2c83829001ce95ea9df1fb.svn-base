package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.CfMoveCurrentMapper;
import com.boe.idm.project.model.mybatis.CfMoveCurrentVO;
import com.boe.idm.project.service.CfMoveCurrentService;

@Service
public class CfMoveCurrentServiceImple implements  CfMoveCurrentService {
	
	@Autowired
	private CfMoveCurrentMapper mapper;

	@Override
	public List<CfMoveCurrentVO> getList(String starttime, String endtime) {
		// TODO Auto-generated method stub
		return mapper.getList(starttime, endtime);
	}

}
