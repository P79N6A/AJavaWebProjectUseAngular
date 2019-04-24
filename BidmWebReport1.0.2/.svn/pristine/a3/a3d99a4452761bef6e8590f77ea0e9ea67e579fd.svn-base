package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.CellWipMapper;
import com.boe.idm.project.model.mybatis.CellWipVO;
import com.boe.idm.project.service.CellWipService;

@Service
public class CellWipServiceImple implements CellWipService {

	@Autowired
	private CellWipMapper mapper;
	@Override
	public List<CellWipVO> getList() {
		// TODO Auto-generated method stub
		return mapper.getList();
	}
	@Override
	public List<CellWipVO> getListBoth() {
		// TODO Auto-generated method stub
		return mapper.getListBoth();
	}
	@Override
	public List<CellWipVO> getListPCL() {
		// TODO Auto-generated method stub
		return mapper.getListPCL();
	}
	@Override
	public List<CellWipVO> getListPCS() {
		// TODO Auto-generated method stub
		return mapper.getListPCS();
	}

}
