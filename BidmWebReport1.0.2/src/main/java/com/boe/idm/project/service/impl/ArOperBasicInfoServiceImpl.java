package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ArOperBasicInfoMapper;
import com.boe.idm.project.model.mybatis.ArOperBasicInfoVO;
import com.boe.idm.project.service.ArOperBasicInfoService;

@Service
public class ArOperBasicInfoServiceImpl implements ArOperBasicInfoService {

	@Autowired
	private ArOperBasicInfoMapper mapper;

	@Override
	public List<ArOperBasicInfoVO> getData() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getData();
	}

	@Override
	public int deleteData(ArOperBasicInfoVO arOperBasicInfoVO) throws Exception {
		// TODO Auto-generated method stub
		return mapper.deleteData(arOperBasicInfoVO);
	}

	@Override
	public int insertData(ArOperBasicInfoVO arOperBasicInfoVO) throws Exception {
		// TODO Auto-generated method stub
		return mapper.insertData(arOperBasicInfoVO);
	}

	@Override
	public int updateData(ArOperBasicInfoVO arOperBasicInfoVO) throws Exception {
		// TODO Auto-generated method stub
		return mapper.updateData(arOperBasicInfoVO);
	}

}
