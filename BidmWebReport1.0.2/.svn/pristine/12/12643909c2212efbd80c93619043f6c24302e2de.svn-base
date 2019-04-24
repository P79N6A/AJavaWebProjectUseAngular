package com.boe.idm.project.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.grid.GridMapper;
import com.boe.idm.project.model.mybatis.GridVO;
import com.boe.idm.project.model.mybatis.PageVO;
import com.boe.idm.project.service.GridService;

@Service
public class GridServiceImple implements GridService {
	
	@Autowired
	private GridMapper gridMapper;
	
	@Override
	public Map<String,Object> getGridtList(Map<String,Object> map) throws Exception {
		Map<String, Object> rsltMap = new HashMap<>();
		rsltMap = map;
//		pageVO = setPageInfo(pageVO);
		
		List<GridVO> gridList = gridMapper.getGridList(map);
		rsltMap.put("data", gridList);
//		pageVO.setResultList(gridList);
//		pageVO.setResultList(gridMapper.getGridList(pageVO));
		return rsltMap;
	}
	
	@Override
	public int gridInsert(GridVO gridVO) throws Exception {
		
		return gridMapper.insertGrid(gridVO);
	}
	
	@Override
	public int gridUpdate(GridVO gridVO) throws Exception {

		return gridMapper.updateGrid(gridVO);
	}
	
	@Override
	public int deleteChart(List<GridVO> gridVOList) throws Exception {
		int rslt = 0;
		for(GridVO gridVO: gridVOList) {
			rslt = gridMapper.deleteGrid(gridVO);
			if( rslt!= 1) {
				new Exception();
				return 0;
			}
		}
		return 0;
	}
	
	@Override
	public List<GridVO> getGridChildList(GridVO gridVO) throws Exception {
		List<GridVO> gridList = gridMapper.getGridChildList(gridVO);
		return gridList;
	}
	
	public PageVO setPageInfo(PageVO vo) throws Exception {
		//total page setting
		vo.setTotRow(gridMapper.getTotCount(vo.getGridName()));
		int now = (vo.getNowPage()-1)*vo.getPageRow() ;
		int end = vo.getNowPage()*vo.getPageRow();
		vo.setStartRow(now);
		vo.setEndRow(end);	
		return vo;
	}
	
	@Override
	public int getTotCount() throws Exception {
		String tableName = "";
		return gridMapper.getTotCount(tableName);
	}
	
	
	
	
}
