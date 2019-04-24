package com.boe.idm.project.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.CellDailyReportMapper;
import com.boe.idm.project.model.mybatis.CellDailyReportMovementVO;
import com.boe.idm.project.model.mybatis.CellDailyReportVO;
import com.boe.idm.project.service.CellDailyReportService;

@Service
public class CellDailyReportServiceImple implements CellDailyReportService {
	
	@Autowired
	private CellDailyReportMapper cellDailyReportMapper;

	@Override
	public List<CellDailyReportVO> queryObjects() {
		return cellDailyReportMapper.queryObjects();
	}

	@Override
	public List<CellDailyReportVO> queryObjects02(String startdatename, String month, String enddatename) {
		return cellDailyReportMapper.queryObjects02(startdatename, month, enddatename);
	}

	@Override
	public CellDailyReportVO queryTotalAct() {
		return cellDailyReportMapper.queryTotalAct();
	}

	@Override
	public CellDailyReportVO queryTotalAct02(String startdatename, String month, String enddatename) {
		return cellDailyReportMapper.queryTotalAct02(startdatename, month, enddatename);
	}

	@Override
	public List<CellDailyReportMovementVO> qyeryAllCellMovement(String datename) {
		List<CellDailyReportMovementVO> list = new ArrayList<>();
		if (datename.equals("-1")) {
			list =  cellDailyReportMapper.qyeryAllCellMovement1();
		}else if(datename.equals("-2")){
			list = cellDailyReportMapper.qyeryAllCellMovement2();
		}else if(datename.length() == 8){
			list = cellDailyReportMapper.qyeryAllCellMovement(datename);
		}
		return list;
	}
	
	

//	@Override
//	public List<CellDailyReportVO> queryObjects(String startdatename, String month, String enddatename) {
//		return cellDailyReportMapper.queryObjects(startdatename, month, enddatename);
//	}

	
}
