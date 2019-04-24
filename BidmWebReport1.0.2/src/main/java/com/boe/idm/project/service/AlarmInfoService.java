package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.AlarmInfo;

public interface AlarmInfoService {
	public List<AlarmInfo> getInfoList(int specID) throws Exception;

	public List<AlarmInfo> getInfoHist(int specID) throws Exception;

}
