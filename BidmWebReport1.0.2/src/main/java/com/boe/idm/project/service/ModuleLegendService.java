package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.ModuleLegendVO;

public interface ModuleLegendService {
	
	public List<ModuleLegendVO> getList(String factoryname);

}
