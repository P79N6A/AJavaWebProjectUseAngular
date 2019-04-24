package com.boe.idm.project.service;

import com.boe.idm.project.model.mybatis.PageVO;

public interface MesService {
	
	public PageVO getMesGridList(PageVO pageVO) throws Exception;
}
