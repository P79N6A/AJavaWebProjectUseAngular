package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.KeyinArrayProDataZMapper;
import com.boe.idm.project.model.mybatis.KeyinArProDataZVO;
import com.boe.idm.project.service.KeyinArrayProDataZService;

@Service
public class KeyinArProDataZServiceImpl implements KeyinArrayProDataZService {

	@Autowired
	private KeyinArrayProDataZMapper mapper;

	@Override
	public int insert(KeyinArProDataZVO newRemark) throws Exception {
		return mapper.insert(newRemark);
	}

	@Override
	public List<KeyinArProDataZVO> getData(String report) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getData(report);
	}

}
