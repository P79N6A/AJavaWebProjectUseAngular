package com.boe.idm.project.service.impl;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.mes.MesMapper;
import com.boe.idm.project.model.mybatis.MesGridVO;
import com.boe.idm.project.model.mybatis.PageVO;
import com.boe.idm.project.service.MesService;

@Service
public class MesServiceImpl implements MesService {
	
	private static Logger logger = Logger.getLogger(MesServiceImpl.class);
	
	@Autowired
	private MesMapper mesMapper;
	
	@Override
	public PageVO getMesGridList(PageVO pageVO) throws Exception {
		
		pageVO = setPageInfo(pageVO);
		
		List<MesGridVO> mesGridList = mesMapper.getMesGridList(pageVO);
		pageVO.setResultList(mesGridList);
		
		logger.debug("primary.getMesGridList() : " +mesGridList);
		
		return pageVO;
	}
	
	public PageVO setPageInfo(PageVO vo) throws Exception {
		//total page setting
		vo.setTotRow(mesMapper.getTotCount(vo.getGridName()));
		int now = (vo.getNowPage()-1)*vo.getPageRow() ;
		int end = vo.getNowPage()*vo.getPageRow();
		vo.setStartRow(now);
		vo.setEndRow(end);	
		return vo;
	}
}
