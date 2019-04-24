package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.MesGridVO;
import com.boe.idm.project.model.mybatis.PageVO;
import com.boe.idm.project.model.mybatis.SampleVO;


public interface SamplePrimaryService {
	public List<SampleVO> getSampleList() throws Exception;
	
}
