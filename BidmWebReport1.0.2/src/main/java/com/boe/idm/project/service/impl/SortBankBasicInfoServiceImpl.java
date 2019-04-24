package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.SortBankBasicInfoMapper;
import com.boe.idm.project.model.mybatis.SortBankBasicInfoVO;
import com.boe.idm.project.service.SortBankBasicInfoService;

@Service
public class SortBankBasicInfoServiceImpl implements SortBankBasicInfoService {

	@Autowired
	private SortBankBasicInfoMapper mapper;

	@Override
	public List<SortBankBasicInfoVO> getData() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getData();
	}

	@Override
	public int deleteData(SortBankBasicInfoVO sortBankBasicInfo) throws Exception {
		// TODO Auto-generated method stub
		return mapper.deleteData(sortBankBasicInfo);
	}

	@Override
	public int insertData(SortBankBasicInfoVO sortBankBasicInfo) throws Exception {
		// TODO Auto-generated method stub
		return mapper.insertData(sortBankBasicInfo);
	}

	@Override
	public int updateData(SortBankBasicInfoVO sortBankBasicInfo, String deleteKey) throws Exception {
		// TODO Auto-generated method stub
		return mapper.updateData(sortBankBasicInfo, deleteKey);
	}

}
