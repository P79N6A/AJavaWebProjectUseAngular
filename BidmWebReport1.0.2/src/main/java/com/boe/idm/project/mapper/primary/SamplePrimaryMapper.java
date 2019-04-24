package com.boe.idm.project.mapper.primary;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boe.idm.project.model.mybatis.MesGridVO;
import com.boe.idm.project.model.mybatis.PageVO;
import com.boe.idm.project.model.mybatis.SampleVO;


@Mapper
public interface SamplePrimaryMapper {
	
	public List<SampleVO> getSampleList() throws Exception;
	
}
