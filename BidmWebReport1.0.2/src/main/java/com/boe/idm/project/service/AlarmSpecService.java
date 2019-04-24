package com.boe.idm.project.service;

import java.util.List;
import java.util.Map;

import com.boe.idm.project.model.mybatis.AlarmSpec;

public interface AlarmSpecService {
	public List<AlarmSpec> getSpec(Map<String, Object> paraMap) throws Exception;
}
