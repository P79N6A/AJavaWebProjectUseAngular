package com.boe.idm.project.service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;


import com.boe.idm.project.model.mybatis.Monitor8VO;


public interface Monitor8Service {
	
	public List<Monitor8VO> queryForList(String factoryname,String datestr) throws Exception;
	
	public int specUpdate(Monitor8VO Monitor8VO) throws Exception;
	
	public int specDelete(List<Monitor8VO> Monitor8VOList) throws Exception;
	
	public int specInsert(Monitor8VO Monitor8VO) throws Exception;
	
	public List<LinkedHashMap<String, Object>> alarmList(Map<String, Object> paraMap)throws Exception;
	
	public List<LinkedHashMap<String, Object>> alarmFreshList(Map<String, Object> paraMap)throws Exception;
	
	public List<Monitor8VO> specInsert_excel(String fileName) throws Exception;
	//能够读写任意路径下的文件 ：自己写的
	public List<Monitor8VO> specInsert_excel_path(String localPath) throws Exception;

	public int insert_ExcelImport(List<Monitor8VO> Monitor8VOList);

}
