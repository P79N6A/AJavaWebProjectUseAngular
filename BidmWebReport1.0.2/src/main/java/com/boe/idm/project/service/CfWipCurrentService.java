package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CfWipCurrentVO;

public interface CfWipCurrentService {

	public List<CfWipCurrentVO> getList(String hourtimekey);
}
