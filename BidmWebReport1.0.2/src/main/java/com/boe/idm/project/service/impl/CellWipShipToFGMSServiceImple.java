package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.CellWipShipToFGMSMapper;
import com.boe.idm.project.model.mybatis.CellWipShipToFGMS1VO;
import com.boe.idm.project.model.mybatis.CellWipShipToFGMS2VO;
import com.boe.idm.project.service.CellWipShipToFGMSService;

@Service
public class CellWipShipToFGMSServiceImple implements CellWipShipToFGMSService {

	@Autowired
	private CellWipShipToFGMSMapper mapper;
	@Override
	public List<CellWipShipToFGMS1VO> queryByType(String lottype) {
		return mapper.queryByType(lottype);
	}
	@Override
	public List<CellWipShipToFGMS2VO> queryByProductspec(String productspec) {
		return mapper.queryByProductspec(productspec);
	}

}
