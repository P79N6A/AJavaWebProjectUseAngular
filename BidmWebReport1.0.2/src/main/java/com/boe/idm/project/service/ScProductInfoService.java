package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.ScProductInfoVO;

public interface ScProductInfoService {

	public List<ScProductInfoVO> getData() throws Exception;

	public int deleteData(ScProductInfoVO scProductInfo) throws Exception;

	public int insertData(ScProductInfoVO scProductInfo) throws Exception;

	public int updateData(ScProductInfoVO scProductInfo) throws Exception;

}
