package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.ModuleWipPlanVO;

@Mapper
public interface ModuleWipPlanMapper {
	
	//1.删除一条数据
	public  int deleteObject(ModuleWipPlanVO moduleWipPlanVO);
	
	//2.插入一条数据
	public int insertObject(ModuleWipPlanVO moduleWipPlanVO);
	
	//3.查询一个对象
	public ModuleWipPlanVO queryObject(ModuleWipPlanVO moduleWipPlanVO);
	
	//3.从数据库中读取数据的方法
    public List<ModuleWipPlanVO> queryObjects(@Param("factory") String factory);

}
