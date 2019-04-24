package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ArrayMoveScrollMapper;
import com.boe.idm.project.model.mybatis.ArrayMoveScrollVO;
import com.boe.idm.project.model.mybatis.KeyInRemarkVO;
import com.boe.idm.project.service.ArrayMoveScrollService;

@Service
public class ArrayMoveScrollServiceImple implements ArrayMoveScrollService {
	
	@Autowired
	private ArrayMoveScrollMapper mapper;

	@Override
	public List<ArrayMoveScrollVO> queryAllData(String month, int nowhour,String productiontype) {
		return mapper.queryAllData(month,nowhour, productiontype);
	}

	@Override
	public int insertRemark(String month, String opercode, String productiontype,String ratio,String content) {
		return mapper.insertRemark(month, opercode,productiontype,ratio, content);
	}

	@Override
	public List<KeyInRemarkVO> readRemark(String month,String productiontype,String ratio) {
		return mapper.readRemark(month,productiontype,ratio);
	}

}
