package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ScProductInfoMapper;
import com.boe.idm.project.model.mybatis.ScProductInfoVO;
import com.boe.idm.project.service.ScProductInfoService;

@Service
public class ScProductInfoServiceImpl implements ScProductInfoService {
	
	@Autowired
	private ScProductInfoMapper mapper;

	@Override
	public List<ScProductInfoVO> getData() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getData();
	}

	@Override
	public int deleteData(ScProductInfoVO scProductInfo) throws Exception {
		// TODO Auto-generated method stub
		return mapper.deleteData(scProductInfo);
	}

	@Override
	public int insertData(ScProductInfoVO scProductInfo) throws Exception {
		// TODO Auto-generated method stub
		return mapper.insertData(scProductInfo);
	}

	@Override
	public int updateData(ScProductInfoVO scProductInfo) throws Exception {
		// TODO Auto-generated method stub
		return mapper.updateData(scProductInfo);
	}

}
