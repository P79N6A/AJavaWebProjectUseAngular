package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CellWipVO;

public interface CellWipService {
	public List<CellWipVO> getList();
	public List<CellWipVO> getListBoth();
	public List<CellWipVO> getListPCL();
	public List<CellWipVO> getListPCS();
}
