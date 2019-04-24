package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.CellDailyRptWipMapper;
import com.boe.idm.project.model.mybatis.CellDailyReportWipVO;
import com.boe.idm.project.service.CellDailyRptWipService;

@Service
public class CellDailyRptWipServiceImpl implements CellDailyRptWipService {

	@Autowired
	private CellDailyRptWipMapper mapper;

	@Override
	public List<CellDailyReportWipVO> getData(String dayControl) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getData(dayControl);
	}

	@Override
	public List<CellDailyReportWipVO> queryData(String dateValue) throws Exception {
		// TODO Auto-generated method stub
		return mapper.queryData(dateValue);
	}

}
