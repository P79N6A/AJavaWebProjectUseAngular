package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.CellWipCurrentMapper;
import com.boe.idm.project.model.mybatis.CellWipCurrentVO;
import com.boe.idm.project.service.CellWipCurrentService;

@Service
public class CellWipCurrentServiceImple implements CellWipCurrentService {
	@Autowired
	private CellWipCurrentMapper mapper;

	@Override
	public List<CellWipCurrentVO> getList(String hourtimekey) {
		// TODO Auto-generated method stub
		return mapper.getList(hourtimekey);
	}

	@Override
	public List<CellWipCurrentVO> getListBoth(String hourtimekey) {
		// TODO Auto-generated method stub
		return mapper.getListBoth(hourtimekey);
	}
	

}
