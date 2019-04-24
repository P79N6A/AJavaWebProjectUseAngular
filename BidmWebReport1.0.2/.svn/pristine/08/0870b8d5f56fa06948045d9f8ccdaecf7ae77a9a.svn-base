package com.boe.idm.project.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.boe.idm.project.mapper.primary.SamplePrimaryMapper;
import com.boe.idm.project.model.mybatis.MesGridVO;
import com.boe.idm.project.model.mybatis.PageVO;
import com.boe.idm.project.model.mybatis.SampleVO;
import com.boe.idm.project.service.SamplePrimaryService;

@Service
@Transactional
public class SamplePrimaryServiceImpl implements SamplePrimaryService {
	private static Logger logger = Logger.getLogger(SamplePrimaryServiceImpl.class);
	
	@Autowired
	SamplePrimaryMapper sampleMapper;
	
	@Override
	public List<SampleVO> getSampleList() throws Exception {
		List<SampleVO> primaryList = sampleMapper.getSampleList();
		logger.debug("primary.getSampleList() : "+primaryList);
		return primaryList;
	}
	
	
	
}
