package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ArMoveRptSsMapper;
import com.boe.idm.project.model.mybatis.ArMoveRptSsVO;
import com.boe.idm.project.model.mybatis.KeyInRemarkVO;
import com.boe.idm.project.model.mybatis.KeyinArMoveSsVO;
import com.boe.idm.project.service.ArMoveRptSsService;

@Service
public class ArMoveRptSsServiceImpl implements ArMoveRptSsService {

	@Autowired
	private ArMoveRptSsMapper mapper;

	@Override
	public List<ArMoveRptSsVO> getData() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getData();
	}

	@Override
	public int keyinComment(KeyinArMoveSsVO keyinArMoveSsVO) throws Exception {
		// TODO Auto-generated method stub
		return mapper.keyinComment(keyinArMoveSsVO);
	}

	@Override
	public List<KeyInRemarkVO> getComment() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getComment();
	}

}
