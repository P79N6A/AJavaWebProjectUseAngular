package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.CfMoveHourMapper;
import com.boe.idm.project.model.mybatis.CfMoveHourBasicinfoVO;
import com.boe.idm.project.model.mybatis.CfMoveHourVO;
import com.boe.idm.project.service.CfMoveHourService;

@Service
public class CfMoveHourServiceImple implements CfMoveHourService {
	
	@Autowired
	private CfMoveHourMapper mapper;
	
	@Override
	public List<CfMoveHourVO> queryObjectsByDatename(String datename,String productiontype) {
		return mapper.queryObjectsByDatename(datename,productiontype);
	}
	/********下面是基础信息维护的方法*************/
	@Override
	public List<CfMoveHourBasicinfoVO> queryAllObjects() {
		return mapper.queryAllObjects();
	}

	@Override
	public int insertOne(CfMoveHourBasicinfoVO cfMoveHourBasicinfoVO) {
		return mapper.insertOne(cfMoveHourBasicinfoVO);
	}

	@Override
	public int updateOne(CfMoveHourBasicinfoVO cfMoveHourBasicinfoVO) {
		return mapper.updateOne(cfMoveHourBasicinfoVO);
	}

	@Override
	public int deleteOne(CfMoveHourBasicinfoVO cfMoveHourBasicinfoVO) {
		return mapper.deleteOne(cfMoveHourBasicinfoVO);
	}

}
