package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.OeeAeInfoMapper;
import com.boe.idm.project.model.mybatis.OeeAeInfoVO;
import com.boe.idm.project.model.mybatis.OeeAeTop5VO;
import com.boe.idm.project.service.OeeAeInfoService;

@Service
public class OeeAeInfoServiceImpl implements OeeAeInfoService {

	@Autowired
	private OeeAeInfoMapper mapper;

	@Override
	public List<OeeAeInfoVO> getData(int date, int hour) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getData(date, hour);
	}

	@Override
	public List<OeeAeInfoVO> queryData(String dateType, String dateValue) throws Exception {
		// TODO Auto-generated method stub
		return mapper.queryData(dateType, dateValue);
	}

	@Override
	public List<OeeAeTop5VO> getDataTop5(int date, int hour) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataTop5(date, hour);
	}

	@Override
	public List<OeeAeTop5VO> queryDataTop5(String dateType, String dateValue) throws Exception {
		// TODO Auto-generated method stub
		return mapper.queryDataTop5(dateType, dateValue);
	}

}
