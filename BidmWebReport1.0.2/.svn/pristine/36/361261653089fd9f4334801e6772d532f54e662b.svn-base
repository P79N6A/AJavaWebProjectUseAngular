package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.dao.SampleDao;
import com.boe.idm.project.model.jpa.SampleEntity;
import com.boe.idm.project.service.SampleJpaService;

@Service
public class SampleJpaServiceImpl implements SampleJpaService {

	@Autowired
	SampleDao sampleDao;
	
	@Override
	public List<SampleEntity> getSampleList() {
		return sampleDao.findAll();
	}

}
