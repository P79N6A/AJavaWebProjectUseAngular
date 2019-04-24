package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.AlarmReceiverMapper;
import com.boe.idm.project.model.mybatis.AlarmReceiver;
import com.boe.idm.project.service.AlarmReceiverService;

@Service
public class AlarmReceiverServiceImpl implements AlarmReceiverService {

	@Autowired
	private AlarmReceiverMapper mapper;

	@Override
	public List<AlarmReceiver> getReceiver(String group_id) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getReceiver(group_id);
	}

}
