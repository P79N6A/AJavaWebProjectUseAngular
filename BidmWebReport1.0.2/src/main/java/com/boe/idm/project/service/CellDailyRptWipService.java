package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CellDailyReportWipVO;

public interface CellDailyRptWipService {

	public List<CellDailyReportWipVO> getData(String dayControl) throws Exception;

	public List<CellDailyReportWipVO> queryData(String dateValue) throws Exception;

}
