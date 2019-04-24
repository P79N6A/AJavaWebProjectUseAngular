package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CellProkb1VO;
import com.boe.idm.project.model.mybatis.CellProkb2VO;
import com.boe.idm.project.model.mybatis.CellProkb3VO;
import com.boe.idm.project.model.mybatis.CellProkb4VO;

public interface CellProkbService {

	public List<CellProkb1VO> getData1() throws Exception;

	public List<CellProkb2VO> getData2() throws Exception;

	public List<CellProkb3VO> getData3() throws Exception;

	public List<CellProkb4VO> getData4() throws Exception;

	public List<CellProkb4VO> getData5() throws Exception;

}
