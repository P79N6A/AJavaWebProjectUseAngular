package com.boe.idm.project.service.impl;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.boe.idm.project.mapper.second.SampleSecondMapper;
import com.boe.idm.project.model.mybatis.SampleVO;
import com.boe.idm.project.service.SampleSecondService;

@Service
@Transactional
public class SampleSecondServiceImpl implements SampleSecondService {
	private static Logger logger = Logger.getLogger(SampleSecondServiceImpl.class);
	
	@Autowired
	SampleSecondMapper sampleMapper;
	
	@Override
	public List<SampleVO> getSampleList() throws Exception {
		List<SampleVO> secondList = sampleMapper.getSampleList();
		logger.debug("second.getSampleList() : "+secondList);
		return secondList;
	}

	
}
