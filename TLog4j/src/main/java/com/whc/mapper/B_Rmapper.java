package com.whc.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.whc.model.Usera;

public interface B_Rmapper {
	
	//1.根据参数查询一个对象
	public Usera queryOne(@Param("id") int id);
	
	//2.根据参数查询一个对象 ： 这里要学习的是把 表明也传进去作为参数，拼串操作 ${} 的使用
	public Usera queryOne2(@Param("id") int id,@Param("tableName") String tableName);
		
	//3.使用resultMap 进行查询一个对象,resultMap非常的强大
	public Usera queryOne3(@Param("id")int id);
	
	//4.根据参数查询一组对象
	public List<Usera> queryForList1(@Param("id") int id);
	
	//5.根据参数查询一组对象
	public List<Usera> queryForList2(@Param("ids") int[] ids);
	
	//6.使用resultMap查询一族对象 ： 根据classid进行查询的操作
	public List<Usera> queryForList3(@Param("cid") int cid);
	
	

}
