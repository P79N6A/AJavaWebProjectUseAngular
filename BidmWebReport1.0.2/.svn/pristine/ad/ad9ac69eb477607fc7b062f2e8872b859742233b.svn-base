package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.SortBankMapper;
import com.boe.idm.project.model.mybatis.SortBankTftCfVO;
import com.boe.idm.project.model.mybatis.SortBankVO;
import com.boe.idm.project.service.SortBankService;

@Service
public class SortBankServiceImpl implements SortBankService {

	@Autowired
	private SortBankMapper mapper;

	@Override
	public List<SortBankVO> getData(String timekey) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getData(timekey);
	}

	@Override
	public List<SortBankTftCfVO> getSumData(String timekey) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getSumData(timekey);
	}

}
