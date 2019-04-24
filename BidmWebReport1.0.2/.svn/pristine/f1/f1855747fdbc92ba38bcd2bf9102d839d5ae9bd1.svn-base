package com.boe.idm.project.mapper.primaryOracle.spec;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import com.boe.idm.project.model.mybatis.SpecVO;


@Mapper
public interface OSpecMapper {
	public List<SpecVO> specList() throws Exception;
	
	public int specUpdate(SpecVO specVO) throws Exception;
	
	public int specDelete(SpecVO specVOList) throws Exception;
	
	public int specInsert(SpecVO specVO) throws Exception;
	
	List<LinkedHashMap<String, Object>> specAlarm(Map<String, Object> paraMap);
	
	List<LinkedHashMap<String, Object>> specFreshAlarm(Map<String, Object> paraMap);
	
	public int saveOrUpdate(SpecVO specVO) throws Exception;
	


}