package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CellMoveVO;

public interface CellMoveService {
	public List<CellMoveVO> getList();
	public List<CellMoveVO> getListBoth();
	public List<CellMoveVO> getListPCL();
	public List<CellMoveVO> getListPCS();
}
