package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.ArOperBasicInfoVO;

public interface ArOperBasicInfoService {

	public List<ArOperBasicInfoVO> getData() throws Exception;

	public int deleteData(ArOperBasicInfoVO arOperBasicInfoVO) throws Exception;

	public int insertData(ArOperBasicInfoVO arOperBasicInfoVO) throws Exception;

	public int updateData(ArOperBasicInfoVO arOperBasicInfoVO) throws Exception;

}
