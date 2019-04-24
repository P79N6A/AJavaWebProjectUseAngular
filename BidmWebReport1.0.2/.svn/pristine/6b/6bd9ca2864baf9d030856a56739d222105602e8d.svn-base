package com.boe.idm.project.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.CstInfoPanelTableVO;
import com.boe.idm.project.model.mybatis.CstInfoPanelVO;

public interface CstInfoPanelService {

	public List<CstInfoPanelVO> getData() throws Exception;

	public List<CstInfoPanelVO> queryData(int start, int end) throws Exception;

	public List<CstInfoPanelTableVO> getTableData(String durablespecname, String cstspec, String type) throws Exception;

	public List<CstInfoPanelTableVO> queryTableData(String durablespecname, String cstspec, String type, int start, int end)
			throws Exception;

}
