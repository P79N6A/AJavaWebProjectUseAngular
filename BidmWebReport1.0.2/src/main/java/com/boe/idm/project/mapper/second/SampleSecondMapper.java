package com.boe.idm.project.mapper.second;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boe.idm.project.model.mybatis.SampleVO;


@Mapper
public interface SampleSecondMapper {
	
	public List<SampleVO> getSampleList() throws Exception;
	
}
