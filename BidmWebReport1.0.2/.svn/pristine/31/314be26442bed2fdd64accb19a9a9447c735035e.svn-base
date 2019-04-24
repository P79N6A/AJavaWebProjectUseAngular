package com.boe.idm.project.mapper.primaryOracle.dev;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.ModuleWipFirstVO;

@Mapper
public interface ModuleWipFirstMapper {
	//1.查询module的方法
	public List<ModuleWipFirstVO> getList(@Param("types") String [] types);
	public List<ModuleWipFirstVO> getListProduct(@Param("types") String [] types,@Param("productseizes") String[] productseizes,@Param("checkincodes") String[] checkincodes,@Param("lottypes")String[] lottypes);
	
	//2.查询S2的方法，实际上两个可以共用一个，但是，为了后期好维护，就拆开来写了
	public List<ModuleWipFirstVO> getListS2(@Param("types") String [] types);
	public List<ModuleWipFirstVO> getListProductS2(@Param("types") String [] types,@Param("productseizes") String[] productseizes,@Param("checkincodes") String[] checkincodes,@Param("lottypes")String[] lottypes);
	

}
