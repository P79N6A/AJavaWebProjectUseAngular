package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.ArCellInPlanVO;

public interface ArImportPlanService {

	public List<ArCellInPlanVO> readExcelData(String localpath) throws Exception;

	// 2.插入一组对象的操作
	public int insert(List<ArCellInPlanVO> list);

	// 3.查询数据的方法，返回 一个结果集合
	public List<ArCellInPlanVO> query(String startdate, String enddate);

}
