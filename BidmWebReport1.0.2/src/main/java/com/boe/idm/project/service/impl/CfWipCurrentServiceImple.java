package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.CfWipCurrentMapper;
import com.boe.idm.project.model.mybatis.CfWipCurrentVO;
import com.boe.idm.project.service.CfWipCurrentService;

@Service
public class CfWipCurrentServiceImple implements CfWipCurrentService {
	
	@Autowired
	private CfWipCurrentMapper mapper;

	@Override
	public List<CfWipCurrentVO> getList(String hourtimekey) {
		return mapper.getList(hourtimekey);
	}

}
