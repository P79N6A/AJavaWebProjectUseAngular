package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CellImportPlanVO;

public interface CellImportPlanService {
	
	//1.把excel中的数据读入到 界面上显示:返回的就是 excel中数据的对象的集合
	/**
	 * 
	 * @param localpath 文件的路径
	 * @return
	 * @throws Exception 文件读取时候的异常抛出
	 */
	public List<CellImportPlanVO> readExcelData(String localpath) throws Exception;
	
	//2.插入一组对象的操作
	public int insertObjects(List<CellImportPlanVO> list);
	
	//3.查询数据的方法，返回 一个结果集合
	public List<CellImportPlanVO> queryObjects(String startdate,String enddate);

}
