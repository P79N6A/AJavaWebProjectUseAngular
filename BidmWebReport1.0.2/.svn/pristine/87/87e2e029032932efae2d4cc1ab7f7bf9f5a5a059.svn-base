package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.CstInfoMapper;
import com.boe.idm.project.model.mybatis.CstInfo4VO;
import com.boe.idm.project.model.mybatis.CstInfoEmptyVO;
import com.boe.idm.project.model.mybatis.CstInfoRatio;
import com.boe.idm.project.model.mybatis.CstInfoSecondVO;
import com.boe.idm.project.model.mybatis.CstInfoVO;
import com.boe.idm.project.model.mybatis.CstStockerInfoVO;
import com.boe.idm.project.service.CstInfoService;

@Service
public class CstInfoServiceImpl implements CstInfoService {

	@Autowired
	private CstInfoMapper mapper;

	@Override
	public List<CstInfoVO> getInit() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getInit();
	}

	@Override
	public List<CstInfoEmptyVO> getInit1() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getInit1();
	}

	@Override
	public List<CstStockerInfoVO> getInit2() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getInit2();
	}

	@Override
	public List<CstStockerInfoVO> getInit3() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getInit3();
	}

	@Override
	public List<CstInfo4VO> getInit4() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getInit4();
	}

	@Override
	public List<CstInfoRatio> getQuery1(int start, int end) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getQuery1(start, end);
	}

	@Override
	public List<CstInfoEmptyVO> getQuery2(int start, int end) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getQuery2(start, end);
	}

	@Override
	public List<CstInfoSecondVO> toSecond1(String cst_spec, String factory, String type, String[] productiontypes)
			throws Exception {
		// TODO Auto-generated method stub
		return mapper.toSecond1(cst_spec, factory, type, productiontypes);
	}

	@Override
	public List<CstInfoSecondVO> toSecond2(String cst_spec, String factory, String type, String[] productiontypes,
			int start, int end) throws Exception {
		// TODO Auto-generated method stub
		return mapper.toSecond2(cst_spec, factory, type, productiontypes, start, end);
	}

	@Override
	public List<CstInfoSecondVO> toSecond3(String cst_spec) throws Exception {
		// TODO Auto-generated method stub
		return mapper.toSecond3(cst_spec);
	}

	@Override
	public List<CstInfoSecondVO> toSecond4(String cst_spec, String transferstate) throws Exception {
		// TODO Auto-generated method stub
		return mapper.toSecond4(cst_spec, transferstate);
	}

	@Override
	public List<CstInfoSecondVO> toSecond5(String cst_spec, int start, int end) throws Exception {
		// TODO Auto-generated method stub
		return mapper.toSecond5(cst_spec, start, end);
	}

	@Override
	public List<CstInfoSecondVO> toSecond6(String cst_spec, String transferstate, int start, int end) throws Exception {
		// TODO Auto-generated method stub
		return mapper.toSecond6(cst_spec, transferstate, start, end);
	}

}
