package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.CellMoveCurrentMapper;
import com.boe.idm.project.model.mybatis.CellMoveCurrentVO;
import com.boe.idm.project.service.CellMoveCurrentService;

@Service
public class CellMoveCurrentServiceImple implements CellMoveCurrentService {

	@Autowired
	private CellMoveCurrentMapper mapper;
	@Override
	public List<CellMoveCurrentVO> getList(String starttime, String endtime) {
		// TODO Auto-generated method stub
		return mapper.getList(starttime, endtime);
	}
	@Override
	public List<CellMoveCurrentVO> getListBoth() {
		// TODO Auto-generated method stub
		return mapper.getListBoth();
	}

}
