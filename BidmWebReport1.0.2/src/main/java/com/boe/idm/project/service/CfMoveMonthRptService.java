package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CfMoveMonthRptVO;

public interface CfMoveMonthRptService {

	public List<CfMoveMonthRptVO> getData(int date, int hour) throws Exception;

	public List<CfMoveMonthRptVO> queryData(String datename) throws Exception;

}
