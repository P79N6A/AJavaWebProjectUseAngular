package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CellMoveCurrentVO;


public interface CellMoveCurrentService {
	public List<CellMoveCurrentVO> getList(String starttime, String endtime);
	public List<CellMoveCurrentVO> getListBoth();
}
