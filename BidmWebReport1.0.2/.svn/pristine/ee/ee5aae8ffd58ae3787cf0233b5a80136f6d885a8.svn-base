package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.ProductionInfoCellVO;
import com.boe.idm.project.model.mybatis.ProductionInfoModVO;
import com.boe.idm.project.model.mybatis.ProductionInfoVO;

@Mapper
public interface ProductionInfoMapper {

	public List<ProductionInfoVO> getData(@Param("dayControl") String dayControl) throws Exception;

	public List<ProductionInfoVO> queryData(@Param("dateValue") String dateValue) throws Exception;

	public List<ProductionInfoVO> getDataCf(@Param("dayControl") String dayControl) throws Exception;

	public List<ProductionInfoVO> queryDataCf(@Param("dateValue") String dateValue) throws Exception;

	public List<ProductionInfoModVO> getDataM1(@Param("dayControl") String dayControl) throws Exception;

	public List<ProductionInfoModVO> queryDataM1(@Param("dateValue") String dateValue) throws Exception;

	public List<ProductionInfoModVO> getDataM2(@Param("dayControl") String dayControl) throws Exception;

	public List<ProductionInfoModVO> queryDataM2(@Param("dateValue") String dateValue) throws Exception;

	public List<ProductionInfoCellVO> getDataCell(@Param("dayControl") String dayControl) throws Exception;

	public List<ProductionInfoCellVO> queryDataCell(@Param("dateValue") String dateValue) throws Exception;

	public List<ProductionInfoCellVO> getDataCell2(@Param("dayControl") String dayControl) throws Exception;

	public List<ProductionInfoCellVO> queryDataCell2(@Param("dateValue") String dateValue) throws Exception;
}
