package com.boe.idm.project.service;

import java.io.IOException;
import java.util.List;

import com.boe.idm.project.model.mybatis.KeyInRemarkVO;
import com.boe.idm.project.model.mybatis.ModuleDaChengRatioVO;
import com.boe.idm.project.model.mybatis.ModulePlanVO;

public interface ModuleDaChengRatioService {
	//1.查询的方法
	public List<ModuleDaChengRatioVO> queryObjects();
	
	//2.插入remark数据的方法
	public int insertRemark(String item,String remark);
	
	//3.查询remark的方法
	public List<KeyInRemarkVO> queryRemark();
	
	//4.计划写入数据库中
	public int insertPlan(List<ModulePlanVO> datas);
	
	//4.上传excel表格的方法
	public List<ModulePlanVO> readExcel(String realpath)throws IOException;
}
