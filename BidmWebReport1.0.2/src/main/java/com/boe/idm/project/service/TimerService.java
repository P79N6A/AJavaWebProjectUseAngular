package com.boe.idm.project.service;

import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.boe.idm.project.model.mybatis.TimingQuery;

public interface TimerService {
   public TimingQuery TimingQuery();
   
   public  void TimingStorage(String productspecname,String processflowname,String processoperationname,String defectname,Date caculatetime,float actvalue);
   
   public List<LinkedHashMap<String, Object>> TimeSpec(Map<String, Object> paraMap) throws Exception;
	

   
}
