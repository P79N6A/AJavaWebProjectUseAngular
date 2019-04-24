package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.CfMoveMonthRptMapper;
import com.boe.idm.project.model.mybatis.CfMoveMonthRptVO;
import com.boe.idm.project.service.CfMoveMonthRptService;

@Service
public class CfMoveMonthRptServiceImpl implements CfMoveMonthRptService {

	@Autowired
	private CfMoveMonthRptMapper mapper;

	@Override
	public List<CfMoveMonthRptVO> getData(int date, int hour) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getData(date, hour);
	}

	@Override
	public List<CfMoveMonthRptVO> queryData(String datename) throws Exception {
		// TODO Auto-generated method stub
		return mapper.queryData(datename);
	}

}
