package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boe.idm.project.model.mybatis.MmtVO;
import com.boe.idm.project.model.mybatis.Qtop5PVO;
import com.boe.idm.project.model.mybatis.Qtop5VO;

@Mapper
public interface MdlRatioAMapper {

	public List<MmtVO> getDataM060mmt() throws Exception;

	public List<MmtVO> getDataM069mmt() throws Exception;

	public List<MmtVO> getDataM151mmt() throws Exception;

	public List<Qtop5VO> getDataM060Qtop5() throws Exception;

	public List<Qtop5PVO> getDataM060Qtop5P() throws Exception;

	public List<Qtop5VO> getDataM069Qtop5() throws Exception;

	public List<Qtop5PVO> getDataM069Qtop5P() throws Exception;

	public List<Qtop5VO> getDataM151Qtop5() throws Exception;

	public List<Qtop5PVO> getDataM151Qtop5P() throws Exception;

	public List<Qtop5VO> getDataM060A0top5() throws Exception;

	public List<Qtop5PVO> getDataM060A0top5P() throws Exception;

	public List<Qtop5VO> getDataM069A0top5() throws Exception;

	public List<Qtop5PVO> getDataM069A0top5P() throws Exception;

	public List<Qtop5VO> getDataM151A0top5() throws Exception;

	public List<Qtop5PVO> getDataM151A0top5P() throws Exception;

	public List<Qtop5VO> getDataM060ALtop5() throws Exception;

	public List<Qtop5PVO> getDataM060ALtop5P() throws Exception;

	public List<Qtop5VO> getDataM069ALtop5() throws Exception;

	public List<Qtop5PVO> getDataM069ALtop5P() throws Exception;

	public List<Qtop5VO> getDataM151ALtop5() throws Exception;

	public List<Qtop5PVO> getDataM151ALtop5P() throws Exception;

}
