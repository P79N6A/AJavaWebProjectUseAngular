package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.CfWipHourMapper;
import com.boe.idm.project.model.mybatis.CfWipHourVO;
import com.boe.idm.project.service.CfWipHourService;

@Service
public class CfWipHourServiceImple implements CfWipHourService {
	
	@Autowired
	private CfWipHourMapper mapper;

	@Override
	public List<CfWipHourVO> queryAllData(String hourtimekey,String productiontype) {
		return mapper.queryAllData(hourtimekey,productiontype);
	}

}
