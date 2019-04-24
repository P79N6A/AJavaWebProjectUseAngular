package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CellWipShipToFGMS1VO;
import com.boe.idm.project.model.mybatis.CellWipShipToFGMS2VO;

public interface CellWipShipToFGMSService {
	//1.一级界面的查询操作，根据lottype
	public List<CellWipShipToFGMS1VO> queryByType(String lottype);

	//2.二级界面的查询操作，根据 productspec
	public List<CellWipShipToFGMS2VO> queryByProductspec(String productspec);

}
