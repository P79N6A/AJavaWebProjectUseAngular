package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CfWipVO;

public interface CfWipService {
	
	public List<CfWipVO> getList();
	public List<CfWipVO> getListPH1();
	public List<CfWipVO> getListPH2();

}
