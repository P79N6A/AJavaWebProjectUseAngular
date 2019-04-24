package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.KeyInRemarkVO;
import com.boe.idm.project.model.mybatis.ModuleDaChengRatioVO;
import com.boe.idm.project.model.mybatis.ModulePlanVO;

@Mapper
public interface ModuleDaChengRatioMapper {
	//1.查询的方法
	public List<ModuleDaChengRatioVO> queryObjects();
	
	//2. 查询出满足条件的remark
	public List<KeyInRemarkVO> queryRemark();
	
	//2.插入remark的方法
	public int insertRemark(@Param("item") String item,@Param("remark") String remark);
	
	//3.删除数据的方法
	public int deleteRemark(@Param("item") String item);
	
	//4.更新数据的方法
	public int updateRemark(@Param("item") String item,@Param("remark") String remark);
	
	//5.向数据库中写入计划的操作
	public int insertPlan(@Param("datas") List<ModulePlanVO> datas);
}
