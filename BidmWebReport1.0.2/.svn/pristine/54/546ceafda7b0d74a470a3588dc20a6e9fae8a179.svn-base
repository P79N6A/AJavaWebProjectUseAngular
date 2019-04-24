package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.CellImportPlanVO;

@Mapper
public interface CellImportPlanMapper {
	
	//1.删除数据的方法：OWNER ： CELL
	public void delete(CellImportPlanVO cellImportPlanVO);
	//2.像数据库中插入一个对象的方法
	public int insertObject(CellImportPlanVO cellImportPlanVO);
	//3.查询数据的方法，返回 一个结果集合
	public List<CellImportPlanVO> queryObjects(@Param("startdate") String startdate,@Param("enddate") String enddate);

}
