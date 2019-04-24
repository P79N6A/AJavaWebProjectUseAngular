package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.MdlRatioAMapper;
import com.boe.idm.project.model.mybatis.MmtVO;
import com.boe.idm.project.model.mybatis.Qtop5PVO;
import com.boe.idm.project.model.mybatis.Qtop5VO;
import com.boe.idm.project.service.MdlRatioAService;

@Service
public class MdlRatioAServiceImpl implements MdlRatioAService {

	@Autowired
	private MdlRatioAMapper mapper;

	@Override
	public List<MmtVO> getDataM060mmt() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM060mmt();
	}

	@Override
	public List<MmtVO> getDataM069mmt() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM069mmt();
	}

	@Override
	public List<MmtVO> getDataM151mmt() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM151mmt();
	}

	@Override
	public List<Qtop5VO> getDataM060Qtop5() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM060Qtop5();
	}

	@Override
	public List<Qtop5PVO> getDataM060Qtop5P() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM060Qtop5P();
	}

	@Override
	public List<Qtop5VO> getDataM069Qtop5() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM069Qtop5();
	}

	@Override
	public List<Qtop5PVO> getDataM069Qtop5P() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM069Qtop5P();
	}

	@Override
	public List<Qtop5VO> getDataM151Qtop5() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM151Qtop5();
	}

	@Override
	public List<Qtop5PVO> getDataM151Qtop5P() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM151Qtop5P();
	}

	@Override
	public List<Qtop5VO> getDataM060A0top5() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM060A0top5();
	}

	@Override
	public List<Qtop5PVO> getDataM060A0top5P() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM060A0top5P();
	}

	@Override
	public List<Qtop5VO> getDataM069A0top5() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM069A0top5();
	}

	@Override
	public List<Qtop5PVO> getDataM069A0top5P() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM069A0top5P();
	}

	@Override
	public List<Qtop5VO> getDataM151A0top5() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM151A0top5();
	}

	@Override
	public List<Qtop5PVO> getDataM151A0top5P() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM151A0top5P();
	}

	@Override
	public List<Qtop5VO> getDataM060ALtop5() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM060ALtop5();
	}

	@Override
	public List<Qtop5PVO> getDataM060ALtop5P() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM060ALtop5P();
	}

	@Override
	public List<Qtop5VO> getDataM069ALtop5() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM069ALtop5();
	}

	@Override
	public List<Qtop5PVO> getDataM069ALtop5P() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM069ALtop5P();
	}

	@Override
	public List<Qtop5VO> getDataM151ALtop5() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM151ALtop5();
	}

	@Override
	public List<Qtop5PVO> getDataM151ALtop5P() throws Exception {
		// TODO Auto-generated method stub
		return mapper.getDataM151ALtop5P();
	}

}
