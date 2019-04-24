package com.boe.idm.project.service;

import java.io.IOException;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.ModuleWipPlanVO;

public interface ModuleWipPlanService {
	
	//1.读取文件的方法
	public List<ModuleWipPlanVO> importExcel(String localPath) throws IOException;

	
	//2.向数据库中插入数据的方法
	public int insertObjects(List<ModuleWipPlanVO> moduleWipPlanVOs);
	
	//3.从数据库中读取数据的方法
    public List<ModuleWipPlanVO> queryObjects(String factory);
}
