package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CstInfo4VO;
import com.boe.idm.project.model.mybatis.CstInfoEmptyVO;
import com.boe.idm.project.model.mybatis.CstInfoRatio;
import com.boe.idm.project.model.mybatis.CstInfoSecondVO;
import com.boe.idm.project.model.mybatis.CstInfoVO;
import com.boe.idm.project.model.mybatis.CstStockerInfoVO;

public interface CstInfoService {
	public List<CstInfoVO> getInit() throws Exception;

	public List<CstInfoEmptyVO> getInit1() throws Exception;

	public List<CstStockerInfoVO> getInit2() throws Exception;

	public List<CstStockerInfoVO> getInit3() throws Exception;

	public List<CstInfo4VO> getInit4() throws Exception;

	public List<CstInfoRatio> getQuery1(int start, int end) throws Exception;

	public List<CstInfoEmptyVO> getQuery2(int start, int end) throws Exception;

	public List<CstInfoSecondVO> toSecond1(String cst_spec, String factory, String type, String[] productiontypes)
			throws Exception;

	public List<CstInfoSecondVO> toSecond2(String cst_spec, String factory, String type, String[] productiontypes,
			int start, int end) throws Exception;

	public List<CstInfoSecondVO> toSecond3(String cst_spec) throws Exception;

	public List<CstInfoSecondVO> toSecond4(String cst_spec, String transferstate) throws Exception;

	public List<CstInfoSecondVO> toSecond5(String cst_spec, int start, int end) throws Exception;

	public List<CstInfoSecondVO> toSecond6(String cst_spec, String transferstate, int start, int end) throws Exception;
}
