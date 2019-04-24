package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.AlarmInfoMapper;
import com.boe.idm.project.model.mybatis.AlarmInfo;
import com.boe.idm.project.service.AlarmInfoService;

@Service
public class AlarmInfoServiceImpl implements AlarmInfoService {

	@Autowired
	private AlarmInfoMapper mapper;

	@Override
	public List<AlarmInfo> getInfoList(int specID) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getInfoList(specID);
	}

	@Override
	public List<AlarmInfo> getInfoHist(int specID) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getInfoHist(specID);
	}

}
