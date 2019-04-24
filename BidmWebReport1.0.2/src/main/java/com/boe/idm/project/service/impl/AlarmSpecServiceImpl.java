package com.boe.idm.project.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.AlarmSpecMapper;
import com.boe.idm.project.model.mybatis.AlarmSpec;
import com.boe.idm.project.service.AlarmSpecService;

@Service
public class AlarmSpecServiceImpl implements AlarmSpecService {

	@Autowired
	private AlarmSpecMapper mapper;

	@Override
	public List<AlarmSpec> getSpec(Map<String, Object> paraMap) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getSpec(paraMap);
	}

}
