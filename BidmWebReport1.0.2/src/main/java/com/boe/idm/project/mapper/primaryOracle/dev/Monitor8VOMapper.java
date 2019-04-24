package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.Monitor8VO;


@Mapper
public interface Monitor8VOMapper {
	
	public List<Monitor8VO> queryForList(@Param("factoryname") String factoryname,@Param("datestr") String datestr) throws Exception;
	
	public int specUpdate(Monitor8VO Monitor8VO) throws Exception;
	
	public int specDelete(Monitor8VO Monitor8VO) throws Exception;
	
	public int specInsert(Monitor8VO Monitor8VO) throws Exception;
	
	List<LinkedHashMap<String, Object>> specAlarm(Map<String, Object> paraMap);
	
	List<LinkedHashMap<String, Object>> specFreshAlarm(Map<String, Object> paraMap);
	
	public int saveOrUpdate(Monitor8VO Monitor8VO) throws Exception;
}
