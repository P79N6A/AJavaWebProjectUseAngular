package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.ArMoveRptSsVO;
import com.boe.idm.project.model.mybatis.KeyInRemarkVO;
import com.boe.idm.project.model.mybatis.KeyinArMoveSsVO;

public interface ArMoveRptSsService {

	public List<ArMoveRptSsVO> getData() throws Exception;

	public int keyinComment(KeyinArMoveSsVO keyinArMoveSsVO) throws Exception;

	public List<KeyInRemarkVO> getComment() throws Exception;
}
