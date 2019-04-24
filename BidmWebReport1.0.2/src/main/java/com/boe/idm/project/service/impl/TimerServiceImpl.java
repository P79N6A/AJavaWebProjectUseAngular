package com.boe.idm.project.service.impl;

import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.Timer.TimingQueryMapper;
import com.boe.idm.project.mapper.primary.Timer.TimingStorageMapper;
import com.boe.idm.project.model.mybatis.TimingQuery;
import com.boe.idm.project.service.TimerService;
@Service
public class TimerServiceImpl  implements TimerService {

	@Resource
	private TimingQueryMapper  TimingQueryMapper;
	@Resource 
	private  TimingStorageMapper TimingStorageMapper;
	public TimingQuery   TimingQuery() {
	return  TimingQueryMapper.selectproductdefect();

}
	public  void TimingStorage(String productspecname,String processflowname,String processoperationname,String defectname,Date caculatetime,float actvalue) {
		TimingStorageMapper.insertdefectvalue(productspecname, processflowname, processoperationname, defectname, caculatetime, actvalue);
	}
	
	@Override
	public List<LinkedHashMap<String, Object>> TimeSpec(Map<String, Object> paraMap) throws Exception{
		return  TimingQueryMapper.TimeSpec(paraMap);
	}
}
