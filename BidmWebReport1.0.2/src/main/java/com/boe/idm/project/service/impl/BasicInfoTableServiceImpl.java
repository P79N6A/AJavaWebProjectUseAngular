package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.BasicInfoTableMapper;
import com.boe.idm.project.model.mybatis.BasicInfoTableVO;
import com.boe.idm.project.service.BasicInfoTableService;

@Service
public class BasicInfoTableServiceImpl implements BasicInfoTableService {

	@Autowired
	private BasicInfoTableMapper mapper;

	@Override
	public List<BasicInfoTableVO> getData() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getData();
	}

	@Override
	public int deleteData(BasicInfoTableVO basicInfo) throws Exception {
		// TODO Auto-generated method stub
		return mapper.deleteData(basicInfo);
	}

	@Override
	public int insertData(BasicInfoTableVO basicInfo) throws Exception {
		// TODO Auto-generated method stub
		return mapper.insertData(basicInfo);
	}

	@Override
	public int updateData(BasicInfoTableVO basicInfo) throws Exception {
		// TODO Auto-generated method stub
		return mapper.updateData(basicInfo);
	}

}
