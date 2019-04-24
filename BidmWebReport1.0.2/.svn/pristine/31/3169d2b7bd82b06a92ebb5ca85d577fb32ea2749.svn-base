package com.boe.idm.project.mapper.primary.grid;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.boe.idm.project.model.mybatis.GridVO;
import com.boe.idm.project.model.mybatis.PageVO;

@Mapper
public interface GridMapper {
	public List<GridVO> getGridList (Map<String,Object> map) throws Exception;
	
	public List<GridVO> getGridChildList (GridVO gridVO) throws Exception;
	
	public int insertGrid(GridVO gridVO) throws Exception;
	
	public int updateGrid(GridVO gridVO) throws Exception;
	
	public int deleteGrid(GridVO gridVO) throws Exception;
	
	public int getTotCount(String name) throws Exception;
	
	
}
