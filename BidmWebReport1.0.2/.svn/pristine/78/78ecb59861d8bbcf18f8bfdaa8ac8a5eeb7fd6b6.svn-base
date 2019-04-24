package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.KeyInRemarkMapper;
import com.boe.idm.project.model.mybatis.KeyInRemarkVO;
import com.boe.idm.project.service.KeyInRemarkService;

@Service
public class KeyInRemarkServiceImple implements KeyInRemarkService {
	
	@Autowired
	private KeyInRemarkMapper keyInRemarkMapper;

	@Override
	public void insertOrUpdateRemark(KeyInRemarkVO keyInRemarkVO) {
		keyInRemarkMapper.insertOrUpdateRemark(keyInRemarkVO);
	}

	@Override
	public List<KeyInRemarkVO> queryRemarks(String datename, String report) {
		return keyInRemarkMapper.queryRemarks(datename, report);
	}

}
