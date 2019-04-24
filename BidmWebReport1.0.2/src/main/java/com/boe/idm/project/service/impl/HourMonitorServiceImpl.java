package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.HourMonitorMapper;
import com.boe.idm.project.model.mybatis.HourMonitorVO;
import com.boe.idm.project.service.HourMonitorService;

@Service
public class HourMonitorServiceImpl implements HourMonitorService {

	@Autowired
	private HourMonitorMapper mapper;
	
	@Override
	public List<HourMonitorVO> getToday(String dayControl) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getToday(dayControl);
	}

	@Override
	public List<HourMonitorVO> getOneday(String dateValue) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getOneday(dateValue);
	}

}
