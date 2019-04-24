package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.ArMoveRptSsVO;
import com.boe.idm.project.model.mybatis.KeyInRemarkVO;
import com.boe.idm.project.model.mybatis.KeyinArMoveSsVO;

@Mapper
public interface ArMoveRptSsMapper {

	public List<ArMoveRptSsVO> getData() throws Exception;

	public int keyinComment(@Param("keyinArMoveSsVO") KeyinArMoveSsVO keyinArMoveSsVO) throws Exception;

	public List<KeyInRemarkVO> getComment() throws Exception;
}
