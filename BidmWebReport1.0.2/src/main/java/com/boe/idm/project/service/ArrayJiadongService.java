package com.boe.idm.project.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.ArrayJiadongTableVO;
import com.boe.idm.project.model.mybatis.ArrayJiadongVO;

public interface ArrayJiadongService {

	public List<ArrayJiadongVO> getPhotoJiadong(String dayControl, String eqp_id) throws Exception;

	public List<ArrayJiadongTableVO> getPhotoJiadongTable(String dayControl, String eqp_id) throws Exception;

	public List<ArrayJiadongVO> queryPhotoJiadong(String dateValue, String eqp_id) throws Exception;

	public List<ArrayJiadongTableVO> queryPhotoJiadongTable(String dateValue, String eqp_id) throws Exception;

	public List<ArrayJiadongVO> getPecvdFGI(String dayControl) throws Exception;

	public List<ArrayJiadongVO> queryPecvdFGI(String dateValue) throws Exception;

	public List<ArrayJiadongVO> getPecvdMulti(String dayControl) throws Exception;

	public List<ArrayJiadongVO> queryPecvdMulti(String dateValue) throws Exception;

	public List<ArrayJiadongVO> getPecvdPVX(String dayControl) throws Exception;

	public List<ArrayJiadongVO> queryPecvdPVX(String dateValue) throws Exception;

	public List<ArrayJiadongTableVO> getPecvdJiadongTable(String dayControl) throws Exception;

	public List<ArrayJiadongTableVO> queryPecvdJiadongTable(String dateValue) throws Exception;

	public List<ArrayJiadongVO> getEtchITO(String dayControl) throws Exception;

	public List<ArrayJiadongVO> queryEtchITO(String dateValue) throws Exception;

	public List<ArrayJiadongTableVO> getEtchITOTable(String dayControl) throws Exception;

	public List<ArrayJiadongTableVO> queryEtchITOTable(String dateValue) throws Exception;

	public List<ArrayJiadongVO> getEtchSDVIA(String dayControl, String eqp_id) throws Exception;

	public List<ArrayJiadongVO> queryEtchSDVIA(String dateValue, String eqp_id) throws Exception;

	public List<ArrayJiadongTableVO> getEtchSDVIATable(String dayControl, String eqp_id) throws Exception;

	public List<ArrayJiadongTableVO> queryEtchSDVIATable(String dateValue, String eqp_id) throws Exception;
}
