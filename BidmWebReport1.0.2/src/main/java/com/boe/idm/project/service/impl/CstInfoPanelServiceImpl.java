package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.CstInfoPanelMapper;
import com.boe.idm.project.model.mybatis.CstInfoPanelTableVO;
import com.boe.idm.project.model.mybatis.CstInfoPanelVO;
import com.boe.idm.project.service.CstInfoPanelService;

@Service
public class CstInfoPanelServiceImpl implements CstInfoPanelService {

	@Autowired
	private CstInfoPanelMapper mapper;

	@Override
	public List<CstInfoPanelVO> getData() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getData();
	}

	@Override
	public List<CstInfoPanelVO> queryData(int start, int end) throws Exception {
		// TODO Auto-generated method stub
		return mapper.queryData(start, end);
	}

	@Override
	public List<CstInfoPanelTableVO> getTableData(String durablespecname, String cstspec, String type)
			throws Exception {
		// TODO Auto-generated method stub
		return mapper.getTableData(durablespecname, cstspec, type);
	}

	@Override
	public List<CstInfoPanelTableVO> queryTableData(String durablespecname, String cstspec, String type, int start,
			int end) throws Exception {
		// TODO Auto-generated method stub
		return mapper.queryTableData(durablespecname, cstspec, type, start, end);
	}

}
