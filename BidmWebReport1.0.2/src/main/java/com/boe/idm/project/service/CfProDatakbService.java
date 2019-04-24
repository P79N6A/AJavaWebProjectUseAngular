package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CellProkb3VO;
import com.boe.idm.project.model.mybatis.CfProCellInVO;
import com.boe.idm.project.model.mybatis.CfProFcwCstVO;
import com.boe.idm.project.model.mybatis.CfProPlanVO;
import com.boe.idm.project.model.mybatis.CfProStkRtoVO;
import com.boe.idm.project.model.mybatis.CfProWipMoveVO;
import com.boe.idm.project.model.mybatis.CfProkbTouruVO;

public interface CfProDatakbService {

	public List<CfProPlanVO> getData1() throws Exception;

	public List<CfProkbTouruVO> getData2() throws Exception;

	public List<CfProFcwCstVO> getData3() throws Exception;

	public List<CfProStkRtoVO> getData4() throws Exception;

	public List<CfProWipMoveVO> getData5() throws Exception;

	public List<CfProCellInVO> getData6() throws Exception;

	public List<CellProkb3VO> getData7() throws Exception;

}