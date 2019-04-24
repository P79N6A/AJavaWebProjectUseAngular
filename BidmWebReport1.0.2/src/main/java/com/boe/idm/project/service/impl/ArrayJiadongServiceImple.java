package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ArrayJiadongMapper;
import com.boe.idm.project.model.mybatis.ArrayJiadongTableVO;
import com.boe.idm.project.model.mybatis.ArrayJiadongVO;
import com.boe.idm.project.service.ArrayJiadongService;

@Service
public class ArrayJiadongServiceImple implements ArrayJiadongService {
	
	@Autowired
	private ArrayJiadongMapper mapper;

	@Override
	public List<ArrayJiadongVO> getPhotoJiadong(String dayControl, String eqp_id) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getPhotoJiadong(dayControl, eqp_id);
	}

	@Override
	public List<ArrayJiadongTableVO> getPhotoJiadongTable(String dayControl, String eqp_id) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getPhotoJiadongTable(dayControl, eqp_id);
	}

	@Override
	public List<ArrayJiadongVO> queryPhotoJiadong(String dateValue, String eqp_id) throws Exception {
		// TODO Auto-generated method stub
		return mapper.queryPhotoJiadong(dateValue, eqp_id);
	}

	@Override
	public List<ArrayJiadongTableVO> queryPhotoJiadongTable(String dateValue, String eqp_id) throws Exception {
		// TODO Auto-generated method stub
		return mapper.queryPhotoJiadongTable(dateValue, eqp_id);
	}

	@Override
	public List<ArrayJiadongVO> getPecvdFGI(String dayControl) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getPecvdFGI(dayControl);
	}

	@Override
	public List<ArrayJiadongVO> queryPecvdFGI(String dateValue) throws Exception {
		// TODO Auto-generated method stub
		return mapper.queryPecvdFGI(dateValue);
	}

	@Override
	public List<ArrayJiadongVO> getPecvdMulti(String dayControl) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getPecvdMulti(dayControl);
	}

	@Override
	public List<ArrayJiadongVO> queryPecvdMulti(String dateValue) throws Exception {
		// TODO Auto-generated method stub
		return mapper.queryPecvdMulti(dateValue);
	}

	@Override
	public List<ArrayJiadongVO> getPecvdPVX(String dayControl) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getPecvdPVX(dayControl);
	}

	@Override
	public List<ArrayJiadongVO> queryPecvdPVX(String dateValue) throws Exception {
		// TODO Auto-generated method stub
		return mapper.queryPecvdPVX(dateValue);
	}

	@Override
	public List<ArrayJiadongTableVO> getPecvdJiadongTable(String dayControl) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getPecvdJiadongTable(dayControl);
	}

	@Override
	public List<ArrayJiadongTableVO> queryPecvdJiadongTable(String dateValue) throws Exception {
		// TODO Auto-generated method stub
		return mapper.queryPecvdJiadongTable(dateValue);
	}

	@Override
	public List<ArrayJiadongVO> getEtchITO(String dayControl) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getEtchITO(dayControl);
	}

	@Override
	public List<ArrayJiadongVO> queryEtchITO(String dateValue) throws Exception {
		// TODO Auto-generated method stub
		return mapper.queryEtchITO(dateValue);
	}

	@Override
	public List<ArrayJiadongTableVO> getEtchITOTable(String dayControl) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getEtchITOTable(dayControl);
	}

	@Override
	public List<ArrayJiadongTableVO> queryEtchITOTable(String dateValue) throws Exception {
		// TODO Auto-generated method stub
		return mapper.queryEtchITOTable(dateValue);
	}

	@Override
	public List<ArrayJiadongVO> getEtchSDVIA(String dayControl, String eqp_id) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getEtchSDVIA(dayControl, eqp_id);
	}

	@Override
	public List<ArrayJiadongVO> queryEtchSDVIA(String dateValue, String eqp_id) throws Exception {
		// TODO Auto-generated method stub
		return mapper.queryEtchSDVIA(dateValue, eqp_id);
	}

	@Override
	public List<ArrayJiadongTableVO> getEtchSDVIATable(String dayControl, String eqp_id) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getEtchSDVIATable(dayControl, eqp_id);
	}

	@Override
	public List<ArrayJiadongTableVO> queryEtchSDVIATable(String dateValue, String eqp_id) throws Exception {
		// TODO Auto-generated method stub
		return mapper.queryEtchSDVIATable(dateValue, eqp_id);
	}

}
