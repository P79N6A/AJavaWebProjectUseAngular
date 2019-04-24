package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.CellWipShipToFGMS1VO;
import com.boe.idm.project.model.mybatis.CellWipShipToFGMS2VO;

@Mapper
public interface CellWipShipToFGMSMapper {
	
	//1.一级界面的查询操作，根据lottype
	public List<CellWipShipToFGMS1VO> queryByType(@Param("lottype") String lottype);
	
	//2.二级界面的查询操作，根据 productspec
	public List<CellWipShipToFGMS2VO> queryByProductspec(@Param("productspec") String productspec);

}
