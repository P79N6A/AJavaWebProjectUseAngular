package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.CstInfo4VO;
import com.boe.idm.project.model.mybatis.CstInfoEmptyVO;
import com.boe.idm.project.model.mybatis.CstInfoRatio;
import com.boe.idm.project.model.mybatis.CstInfoSecondVO;
import com.boe.idm.project.model.mybatis.CstInfoVO;
import com.boe.idm.project.model.mybatis.CstStockerInfoVO;

@Mapper
public interface CstInfoMapper {
	public List<CstInfoVO> getInit() throws Exception;

	public List<CstInfoEmptyVO> getInit1() throws Exception;

	public List<CstStockerInfoVO> getInit2() throws Exception;

	public List<CstStockerInfoVO> getInit3() throws Exception;

	public List<CstInfo4VO> getInit4() throws Exception;

	public List<CstInfoRatio> getQuery1(@Param("start") int start, @Param("end") int end) throws Exception;

	public List<CstInfoEmptyVO> getQuery2(@Param("start") int start, @Param("end") int end) throws Exception;

	public List<CstInfoSecondVO> toSecond1(@Param("cst_spec") String cst_spec, @Param("factory") String factory,
			@Param("type") String type, @Param("productiontypes") String[] productiontypes) throws Exception;

	public List<CstInfoSecondVO> toSecond2(@Param("cst_spec") String cst_spec, @Param("factory") String factory,
			@Param("type") String type, @Param("productiontypes") String[] productiontypes, @Param("start") int start,
			@Param("end") int end) throws Exception;

	public List<CstInfoSecondVO> toSecond3(@Param("cst_spec") String cst_spec) throws Exception;

	public List<CstInfoSecondVO> toSecond4(@Param("cst_spec") String cst_spec,
			@Param("transferstate") String transferstate) throws Exception;

	public List<CstInfoSecondVO> toSecond5(@Param("cst_spec") String cst_spec, @Param("start") int start,
			@Param("end") int end) throws Exception;

	public List<CstInfoSecondVO> toSecond6(@Param("cst_spec") String cst_spec,
			@Param("transferstate") String transferstate, @Param("start") int start, @Param("end") int end)
			throws Exception;
}
