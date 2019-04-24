package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.GSshowTableMapper;
import com.boe.idm.project.model.mybatis.GSshowTableVO;
import com.boe.idm.project.service.GSshowTableService;

@Service
public class GSshowTableServiceImple implements GSshowTableService {
	
	@Autowired
	private GSshowTableMapper mapper;

	@Override
	public List<GSshowTableVO> getList(String factoryname) {
		
		return mapper.getList(factoryname);
	}

}
