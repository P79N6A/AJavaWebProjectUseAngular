package com.boe.idm.project.service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.boe.idm.project.model.mybatis.SpecVO;


public interface SpecService {
	
	public List<SpecVO> specList() throws Exception;
	
	public int specUpdate(SpecVO specVO) throws Exception;
	
	public int specDelete(List<SpecVO> specVOList) throws Exception;
	
	public int specInsert(SpecVO specVO) throws Exception;
	
	public List<LinkedHashMap<String, Object>> alarmList(Map<String, Object> paraMap)throws Exception;
	
	public List<LinkedHashMap<String, Object>> alarmFreshList(Map<String, Object> paraMap)throws Exception;
	
	public List<SpecVO> specInsert_excel(String fileName) throws Exception;
	//能够读写任意路径下的文件 ：自己写的
	public List<SpecVO> specInsert_excel_path(String localPath) throws Exception;

	public int insert_ExcelImport(List<SpecVO> specVOList);
	
}