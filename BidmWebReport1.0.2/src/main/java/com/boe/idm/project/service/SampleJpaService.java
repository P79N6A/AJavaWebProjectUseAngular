package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.jpa.SampleEntity;

public interface SampleJpaService {
	public List<SampleEntity> getSampleList() throws Exception;
}
